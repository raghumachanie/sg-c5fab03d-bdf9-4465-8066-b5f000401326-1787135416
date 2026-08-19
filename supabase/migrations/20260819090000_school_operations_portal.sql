-- School Operations Portal: resources plus strict staff-only access to private records.
create schema if not exists private;

create table if not exists private.school_staff (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'admin' check (role in ('owner', 'admin', 'editor')),
  created_at timestamptz not null default now()
);

-- Preserve access for the accounts that administered the original portal.
insert into private.school_staff (user_id, role)
select id, 'owner' from auth.users
on conflict (user_id) do nothing;

create or replace function private.is_school_staff()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select (select auth.uid()) is not null and exists (
    select 1 from private.school_staff where user_id = (select auth.uid())
  );
$$;

revoke all on function private.is_school_staff() from public, anon, authenticated;

create table if not exists public.school_resources (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(title) between 2 and 120),
  description text,
  url text not null check (url ~ '^https?://'),
  category text not null default 'general',
  audience text not null default 'all',
  is_published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists school_resources_published_order_idx
  on public.school_resources (is_published, sort_order, created_at desc);
create index if not exists admission_inquiries_status_created_idx
  on public.admission_inquiries (status, created_at desc);
create index if not exists contact_messages_status_created_idx
  on public.contact_messages (status, created_at desc);
create index if not exists donations_status_created_idx
  on public.donations (status, created_at desc);

alter table public.school_resources enable row level security;

-- Replace permissive authenticated policies on operational tables.
do $$
declare p record;
begin
  for p in select schemaname, tablename, policyname from pg_policies
    where schemaname = 'public' and tablename in
      ('notices','admission_inquiries','contact_messages','gallery_images','donations','school_resources')
  loop
    execute format('drop policy if exists %I on %I.%I', p.policyname, p.schemaname, p.tablename);
  end loop;
end $$;

revoke all on public.notices, public.admission_inquiries, public.contact_messages,
  public.gallery_images, public.donations, public.school_resources from anon, authenticated;

grant select on public.notices, public.gallery_images, public.school_resources to anon, authenticated;
grant insert on public.admission_inquiries, public.contact_messages, public.donations to anon, authenticated;
grant select, insert, update, delete on public.notices, public.admission_inquiries,
  public.contact_messages, public.gallery_images, public.donations, public.school_resources to authenticated;

create policy "Public can read notices" on public.notices for select to anon, authenticated using (true);
create policy "Staff manage notices" on public.notices for all to authenticated
  using ((select private.is_school_staff())) with check ((select private.is_school_staff()));

create policy "Public submits admissions" on public.admission_inquiries for insert to anon, authenticated with check (true);
create policy "Staff manage admissions" on public.admission_inquiries for all to authenticated
  using ((select private.is_school_staff())) with check ((select private.is_school_staff()));

create policy "Public submits messages" on public.contact_messages for insert to anon, authenticated with check (true);
create policy "Staff manage messages" on public.contact_messages for all to authenticated
  using ((select private.is_school_staff())) with check ((select private.is_school_staff()));

create policy "Public submits donations" on public.donations for insert to anon, authenticated with check (true);
create policy "Staff manage donations" on public.donations for all to authenticated
  using ((select private.is_school_staff())) with check ((select private.is_school_staff()));

create policy "Public can read gallery" on public.gallery_images for select to anon, authenticated using (true);
create policy "Staff manage gallery" on public.gallery_images for all to authenticated
  using ((select private.is_school_staff())) with check ((select private.is_school_staff()));

create policy "Public can read published resources" on public.school_resources for select to anon, authenticated
  using (is_published or (select private.is_school_staff()));
create policy "Staff manage resources" on public.school_resources for all to authenticated
  using ((select private.is_school_staff())) with check ((select private.is_school_staff()));


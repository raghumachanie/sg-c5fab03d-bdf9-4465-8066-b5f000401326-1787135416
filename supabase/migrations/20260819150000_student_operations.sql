-- Repair portal authorization and add the first school student register.
grant usage on schema private to authenticated;
grant execute on function private.is_school_staff() to authenticated;

create table if not exists public.students (
  id uuid primary key default gen_random_uuid(),
  admission_number text not null unique,
  first_name text not null,
  last_name text,
  date_of_birth date,
  gender text check (gender is null or gender in ('female', 'male', 'other')),
  class_name text not null,
  section text,
  academic_year text not null,
  guardian_name text not null,
  guardian_phone text not null,
  guardian_email text,
  address text,
  admission_date date not null default current_date,
  status text not null default 'active' check (status in ('active', 'inactive', 'graduated', 'transferred')),
  fee_status text not null default 'pending' check (fee_status in ('pending', 'partial', 'paid', 'waived')),
  notes text,
  source_inquiry_id uuid references public.admission_inquiries(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists students_class_status_idx on public.students (class_name, status);
create index if not exists students_guardian_phone_idx on public.students (guardian_phone);
alter table public.students enable row level security;
revoke all on public.students from anon, authenticated;
grant select, insert, update, delete on public.students to authenticated;
create policy "Staff manage students" on public.students for all to authenticated
  using ((select private.is_school_staff()))
  with check ((select private.is_school_staff()));


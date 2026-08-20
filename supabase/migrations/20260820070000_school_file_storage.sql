-- Public downloads, staff-only uploads for gallery and school forms.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'school-files',
  'school-files',
  true,
  10485760,
  array[
    'image/jpeg','image/png','image/webp','image/gif',
    'application/pdf','application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ]
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Public download school files" on storage.objects;
drop policy if exists "Staff upload school files" on storage.objects;
drop policy if exists "Staff update school files" on storage.objects;
drop policy if exists "Staff delete school files" on storage.objects;

create policy "Public download school files" on storage.objects for select to anon, authenticated
  using (bucket_id = 'school-files');
create policy "Staff upload school files" on storage.objects for insert to authenticated
  with check (bucket_id = 'school-files' and (select private.is_school_staff()));
create policy "Staff update school files" on storage.objects for update to authenticated
  using (bucket_id = 'school-files' and (select private.is_school_staff()))
  with check (bucket_id = 'school-files' and (select private.is_school_staff()));
create policy "Staff delete school files" on storage.objects for delete to authenticated
  using (bucket_id = 'school-files' and (select private.is_school_staff()));


-- Allow authenticated users to upload files
create policy "Users can upload playlist images"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'playlist-images');

-- Allow authenticated users to manage their own files
create policy "Users can manage their own playlist images"
on storage.objects
for all
to authenticated
using (bucket_id = 'playlist-images' and owner = auth.uid());

-- (Optional) Allow public read
create policy "Public can view playlist images"
on storage.objects
for select
using (bucket_id = 'playlist-images');
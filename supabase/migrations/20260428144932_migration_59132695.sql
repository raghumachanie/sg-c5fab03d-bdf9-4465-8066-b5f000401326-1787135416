-- Create notices table for notice board
CREATE TABLE notices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  priority TEXT CHECK (priority IN ('low', 'normal', 'high')) DEFAULT 'normal',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create admission_inquiries table
CREATE TABLE admission_inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_name TEXT NOT NULL,
  parent_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  class_applying TEXT NOT NULL,
  message TEXT,
  status TEXT CHECK (status IN ('new', 'contacted', 'admitted', 'declined')) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_messages table
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT CHECK (status IN ('new', 'read', 'replied')) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create gallery_images table
CREATE TABLE gallery_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  category TEXT CHECK (category IN ('events', 'classroom', 'activities', 'achievements')) DEFAULT 'activities',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE notices ENABLE ROW LEVEL SECURITY;
ALTER TABLE admission_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

-- RLS Policies for notices (T2: public read, auth write)
CREATE POLICY "public_read_notices" ON notices FOR SELECT USING (true);
CREATE POLICY "auth_insert_notices" ON notices FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "auth_update_notices" ON notices FOR UPDATE USING (auth.uid() IS NOT NULL);
CREATE POLICY "auth_delete_notices" ON notices FOR DELETE USING (auth.uid() IS NOT NULL);

-- RLS Policies for admission_inquiries (T3: anon insert, auth read/update)
CREATE POLICY "anon_insert_inquiries" ON admission_inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "auth_read_inquiries" ON admission_inquiries FOR SELECT USING (auth.uid() IS NOT NULL);
CREATE POLICY "auth_update_inquiries" ON admission_inquiries FOR UPDATE USING (auth.uid() IS NOT NULL);

-- RLS Policies for contact_messages (T3: anon insert, auth read/update)
CREATE POLICY "anon_insert_messages" ON contact_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "auth_read_messages" ON contact_messages FOR SELECT USING (auth.uid() IS NOT NULL);
CREATE POLICY "auth_update_messages" ON contact_messages FOR UPDATE USING (auth.uid() IS NOT NULL);

-- RLS Policies for gallery_images (T2: public read, auth write)
CREATE POLICY "public_read_gallery" ON gallery_images FOR SELECT USING (true);
CREATE POLICY "auth_insert_gallery" ON gallery_images FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "auth_update_gallery" ON gallery_images FOR UPDATE USING (auth.uid() IS NOT NULL);
CREATE POLICY "auth_delete_gallery" ON gallery_images FOR DELETE USING (auth.uid() IS NOT NULL);
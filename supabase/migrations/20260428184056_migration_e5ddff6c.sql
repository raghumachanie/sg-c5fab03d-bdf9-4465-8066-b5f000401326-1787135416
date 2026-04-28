-- Create donations table
CREATE TABLE donations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  donor_name TEXT NOT NULL,
  email TEXT,
  phone TEXT NOT NULL,
  amount DECIMAL(10, 2),
  purpose TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

-- Public can insert (anonymous donations allowed)
CREATE POLICY "anon_insert_donations" ON donations FOR INSERT WITH CHECK (true);

-- Public can read (for transparency)
CREATE POLICY "public_read_donations" ON donations FOR SELECT USING (true);

-- Authenticated users (admin) can update
CREATE POLICY "auth_update_donations" ON donations FOR UPDATE USING (auth.uid() IS NOT NULL);

-- Authenticated users (admin) can delete
CREATE POLICY "auth_delete_donations" ON donations FOR DELETE USING (auth.uid() IS NOT NULL);
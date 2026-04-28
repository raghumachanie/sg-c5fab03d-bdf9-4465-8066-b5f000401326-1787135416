---
title: Admin dashboard and authentication
status: done
priority: high
type: feature
tags: [admin, auth, dashboard]
created_by: agent
created_at: 2026-04-28T14:49:57Z
position: 6
---

## Notes
Create password-protected admin dashboard where Sister can post notices, manage gallery uploads, view admission inquiries, and handle contact form submissions. Use Supabase Auth with email/password.

## Checklist
- [x] Create admin login page with email/password authentication
- [x] Build admin dashboard with tabs for different sections
- [x] Add notice management (create, edit, delete notices)
- [x] Add admission inquiry viewer with status management
- [x] Add gallery image upload with category selection
- [x] Add image deletion functionality
- [x] Protect dashboard route with authentication check

## Acceptance
- Admin can login with email/password
- Only authenticated users can access dashboard
- All CRUD operations function correctly
- Data displays in organized tables/cards
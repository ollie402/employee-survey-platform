# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Primary Development
- `npm start` - Start development server on port 3000 using live-server
- `npm run dev` - Start development with file watching (combines start + watch)
- `npm run build` - Build project by copying files to dist folder

### Deployment Commands
- `npm run deploy:test` - Deploy to test environment 
- `npm run deploy:live` - Deploy to production environment
- `npm run surge:deploy` - Deploy to Surge.sh production domain
- `npm run surge:deploy-test` - Deploy to Surge.sh test domain

### File Watching & Auto-Deploy
- `npm run watch` - Watch files and auto-deploy to production on changes
- `npm run watch-test` - Watch files and auto-deploy to test on changes
- `npm run auto-deploy` - One-time deploy + start watching (production)
- `npm run auto-deploy-test` - One-time deploy + start watching (test)

### Setup
- `npm run setup` - Install dependencies and login to Surge.sh

## Architecture Overview

This is a **multi-environment employee survey platform** with the following key architectural components:

### Frontend Architecture
- **Static HTML/CSS/JS application** served via live-server in development
- **Multi-language support** with translation system (English/Spanish) in `assets/js/app.js`
- **Environment-aware configuration** in `assets/js/config.js` that automatically detects environment based on hostname
- **Supabase integration** for database operations via `lib/supabase.js`

### Backend Architecture
- **Serverless API functions** in `/api` folder designed for Vercel deployment
- **Email service integration** using SMTP2GO for sending emails, invitations, and password resets
- **Express.js server** (`server.js`) for local development with environment-based static file serving

### Environment Management
- **Three-tier environment system**: development, test, production
- **Environment detection** based on hostname (localhost = dev, test domains = test, live domains = production)
- **Environment-specific configuration** stored in `/environments` folder with separate folders for dev/test/live
- **Visual environment indicators** - colored badges appear in dev/test environments
- **Automated deployment pipeline** using Surge.sh for hosting

### Build System
- **Custom build script** (`build-script.js`) that copies files from source to `dist` folder
- **File watching system** using nodemon to trigger rebuilds and deployments
- **Vercel configuration** for serverless function deployment

### Key Features
- Multi-tenant survey platform with organization management
- Real-time chat feedback system
- AI-powered analytics and reporting
- User authentication and role-based access control
- Branding customization per organization
- Survey builder with analytics dashboard

### File Structure Notes
- `/api` - Serverless functions for email and backend operations
- `/assets` - Frontend static assets (CSS, JS, images)
- `/lib` - Shared libraries (Supabase client)
- `/environments` - Environment-specific configuration
- `/public` - Built/copied files for production
- `/pages` - Additional page components and database test utilities

### Database
- Uses **Supabase** as the backend database and authentication provider
- Client configuration in `lib/supabase.js` with public anon key
- Database testing utilities available in `pages/test-db.js`

## Development Notes

- The application uses a custom environment detection system rather than traditional build tools
- Email functionality requires SMTP2GO API credentials in environment variables
- The project supports both local development and cloud deployment workflows
- File watching and auto-deployment features are available for rapid development iteration
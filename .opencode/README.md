# OpenCode Configuration

## Development Server

**CRITICAL**: The development server is already running and managed by Chipify.

- **Local Dev Server**: `http://127.0.0.1:5195`
- **Preview URL**: `https://api.chitterchat.co.uk/chipify/projects/c91b2748-e03b-4789-8482-511c41d584db/preview`
- **Port**: `5195`

## Instructions for AI Agents

**DO NOT** attempt to start a development server. The server is:
- Already running when the project is created
- Managed by Chipify backend service
- Accessible via the preview URL above
- Automatically reloads on file changes (Vite HMR)

When working on this project:
1. **NEVER** run `npm run dev` - it's already running
2. **NEVER** start a new dev server process
3. Use the preview URL to view the application
4. File changes will automatically reload via Vite HMR

# Critical SSR Build Fix Required

## Issue
The current `package.json` build command creates an indirect chain that may not properly generate the `build-status.json` file needed by the BuildStatus component.

## Current Build Chain
```
package.json "build" → vite build → scripts/prerender.js → scripts/verify-and-build.js
```

## Required Fix
Update the build command in `package.json` to directly use the robust build script:

```json
{
  "scripts": {
    "build": "node scripts/verify-and-build.js",
    "build:legacy": "vite build && node scripts/prerender.js"
  }
}
```

## Why This Matters
1. **BuildStatus Component**: Needs `dist/__diagnostics/build-status.json` to show correct status
2. **SSR Verification**: The robust script includes comprehensive build verification
3. **Production Deployment**: Hosting platforms need the correct build command

## For Lovable Users
Since `package.json` is read-only in Lovable, this change would need to be made by:
1. Exporting the project to GitHub
2. Making the package.json change
3. Re-importing or deploying from GitHub

## Testing the Fix
Run these scripts to verify the build works:
- `node scripts/run-tests.js` - Comprehensive test suite
- `node scripts/quick-build-test.js` - Quick verification
- `node scripts/verify-production.js` - Production verification

## Alternative Solution
If the build command cannot be changed, the BuildStatus component has been enhanced to handle missing diagnostic files gracefully and show appropriate messages for development vs production environments.
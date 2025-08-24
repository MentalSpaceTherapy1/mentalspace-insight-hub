import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Handle legacy routes if needed
  const { pathname } = request.nextUrl;
  
  // Redirect old routes to new structure if any exist
  if (pathname.startsWith('/online-therapy')) {
    return NextResponse.redirect(new URL('/services/adults', request.url));
  }
  
  if (pathname.startsWith('/couples-therapy')) {
    return NextResponse.redirect(new URL('/services/couples', request.url));
  }
  
  if (pathname.startsWith('/teen-therapy')) {
    return NextResponse.redirect(new URL('/services/teens', request.url));
  }
  
  // Block access to diagnostics in production
  if (pathname.startsWith('/__diagnostics') && process.env.NEXT_PUBLIC_ENV === 'prod') {
    return new NextResponse('Not Found', { status: 404 });
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
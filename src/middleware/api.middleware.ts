import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function apiMiddleware(request: NextRequest) {
  const response = NextResponse.next();

  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');

  if (request.nextUrl.pathname.startsWith('/api')) {
    response.headers.set('Cache-Control', 'no-store');
  }

  return response;
}

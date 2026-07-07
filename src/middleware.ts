import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { apiMiddleware } from '@/middleware/api.middleware';

export function middleware(request: NextRequest) {
  return apiMiddleware(request);
}

export const config = {
  matcher: '/api/:path*',
};

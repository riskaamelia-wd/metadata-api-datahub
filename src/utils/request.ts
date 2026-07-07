import type { NextRequest } from 'next/server';
import type { PaginationParams } from '@/types/api';

export function parsePagination(request: NextRequest): PaginationParams {
  const { searchParams } = request.nextUrl;
  const start = searchParams.get('start');
  const count = searchParams.get('count');

  return {
    start: start ? Number(start) : undefined,
    count: count ? Number(count) : undefined,
  };
}

export function parseQuery(request: NextRequest): string | undefined {
  const query = request.nextUrl.searchParams.get('q');
  return query ?? undefined;
}

export function parseUrn(request: NextRequest): string {
  const urn = request.nextUrl.searchParams.get('urn');
  if (!urn) {
    throw new Error('Query parameter "urn" is required');
  }
  return urn;
}

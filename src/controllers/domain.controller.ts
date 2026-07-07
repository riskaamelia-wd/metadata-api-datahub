import type { NextRequest } from 'next/server';
import { domainService } from '@/services/domain.service';
import { successResponse } from '@/utils/response';
import { parsePagination, parseQuery, parseUrn } from '@/utils/request';

export async function listDomains(request: NextRequest) {
  const data = await domainService.search(
    parseQuery(request),
    parsePagination(request),
  );
  return successResponse(data, 'Domains retrieved successfully');
}

export async function getDomain(request: NextRequest) {
  const data = await domainService.getByUrn(parseUrn(request));
  return successResponse(data, 'Domain retrieved successfully');
}

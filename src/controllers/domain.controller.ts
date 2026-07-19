import type { NextRequest } from 'next/server';
import { domainService } from '@/services/domain.service';
import { successResponse } from '@/utils/response';
import { parsePagination, parseUrn } from '@/utils/request';

export async function listDomains(request: NextRequest) {
  const data = await domainService.search(parsePagination(request));
  return successResponse(data, 'Domains retrieved successfully');
}

export async function getDomain(request: NextRequest) {
  const data = await domainService.getByUrn(parseUrn(request));
  return successResponse(data, 'Domain retrieved successfully');
}

import type { NextRequest } from 'next/server';
import { ownerService } from '@/services/owner.service';
import { successResponse } from '@/utils/response';
import { parsePagination, parseQuery, parseUrn } from '@/utils/request';

export async function listOwners(request: NextRequest) {
  const data = await ownerService.search(
    parseQuery(request),
    parsePagination(request),
  );
  return successResponse(data, 'Owners retrieved successfully');
}

export async function getOwner(request: NextRequest) {
  const data = await ownerService.getByUrn(parseUrn(request));
  return successResponse(data, 'Owner retrieved successfully');
}

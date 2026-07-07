import type { NextRequest } from 'next/server';
import { lineageService } from '@/services/lineage.service';
import { successResponse } from '@/utils/response';
import { parseUrn } from '@/utils/request';

export async function getLineage(request: NextRequest) {
  const data = await lineageService.getByUrn(parseUrn(request));
  return successResponse(data, 'Lineage retrieved successfully');
}

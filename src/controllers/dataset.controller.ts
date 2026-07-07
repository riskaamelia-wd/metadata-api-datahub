import type { NextRequest } from 'next/server';
import { datasetService } from '@/services/dataset.service';
import { successResponse } from '@/utils/response';
import { parsePagination, parseQuery, parseUrn } from '@/utils/request';

export async function listDatasets(request: NextRequest) {
  const data = await datasetService.search(
    parseQuery(request),
    parsePagination(request),
  );
  return successResponse(data, 'Datasets retrieved successfully');
}

export async function getDataset(request: NextRequest) {
  const data = await datasetService.getByUrn(parseUrn(request));
  return successResponse(data, 'Dataset retrieved successfully');
}

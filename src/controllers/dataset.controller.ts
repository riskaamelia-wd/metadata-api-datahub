import type { NextRequest } from 'next/server';
import { datasetService } from '@/services/dataset.service';
import { successResponse } from '@/utils/response';
import {
  parseDomainUrn,
  parsePagination,
  parseQuery,
  parseUrn,
} from '@/utils/request';

export async function listDatasets(request: NextRequest) {
  const data = await datasetService.search(
    parseQuery(request),
    parsePagination(request),
  );
  return successResponse(data, 'Datasets retrieved successfully');
}

export async function listDatasetsByDomain(request: NextRequest) {
  const data = await datasetService.searchByDomain(
    parseDomainUrn(request),
    parsePagination(request),
  );
  return successResponse(data, 'Domain datasets retrieved successfully');
}

export async function getDataset(request: NextRequest) {
  const data = await datasetService.getByUrn(parseUrn(request));
  return successResponse(data, 'Dataset retrieved successfully');
}

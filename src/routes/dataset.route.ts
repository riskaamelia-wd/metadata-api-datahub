import * as datasetController from '@/controllers/dataset.controller';
import { asyncHandler } from '@/utils/async-handler';

export const datasetRoutes = {
  GET: asyncHandler(async (request, _context) => {
    const urn = request.nextUrl.searchParams.get('urn');
    if (urn) {
      return datasetController.getDataset(request);
    }
    if (request.nextUrl.searchParams.has('domainUrn')) {
      return datasetController.listDatasetsByDomain(request);
    }
    return datasetController.listDatasets(request);
  }),
};

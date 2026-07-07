import * as lineageController from '@/controllers/lineage.controller';
import { asyncHandler } from '@/utils/async-handler';

export const lineageRoutes = {
  GET: asyncHandler(async (request, _context) =>
    lineageController.getLineage(request),
  ),
};

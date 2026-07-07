import * as tableController from '@/controllers/table.controller';
import { asyncHandler } from '@/utils/async-handler';

export const tableRoutes = {
  GET: asyncHandler(async (request) => tableController.listTables(request)),
};

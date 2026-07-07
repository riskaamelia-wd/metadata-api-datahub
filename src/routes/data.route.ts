import * as dataController from '@/controllers/data.controller';
import { asyncHandler } from '@/utils/async-handler';

export const dataRoutes = {
  GET: asyncHandler(async (request, context) => {
    const { schema, table } = await context.params;
    return dataController.getTableData(request, schema, table);
  }),
};

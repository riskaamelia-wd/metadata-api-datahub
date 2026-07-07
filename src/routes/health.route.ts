import * as healthController from '@/controllers/health.controller';
import { asyncHandler } from '@/utils/async-handler';

export const healthRoutes = {
  GET: asyncHandler(async (_request, _context) =>
    healthController.healthCheck(),
  ),
};

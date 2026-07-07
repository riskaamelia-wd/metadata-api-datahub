import * as ownerController from '@/controllers/owner.controller';
import { asyncHandler } from '@/utils/async-handler';

export const ownerRoutes = {
  GET: asyncHandler(async (request, _context) => {
    const urn = request.nextUrl.searchParams.get('urn');
    if (urn) {
      return ownerController.getOwner(request);
    }
    return ownerController.listOwners(request);
  }),
};

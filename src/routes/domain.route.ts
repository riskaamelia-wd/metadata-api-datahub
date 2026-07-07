import * as domainController from '@/controllers/domain.controller';
import { asyncHandler } from '@/utils/async-handler';

export const domainRoutes = {
  GET: asyncHandler(async (request, _context) => {
    const urn = request.nextUrl.searchParams.get('urn');
    if (urn) {
      return domainController.getDomain(request);
    }
    return domainController.listDomains(request);
  }),
};

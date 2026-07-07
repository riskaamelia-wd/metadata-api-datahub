import * as glossaryController from '@/controllers/glossary.controller';
import { asyncHandler } from '@/utils/async-handler';

export const glossaryRoutes = {
  GET: asyncHandler(async (request, _context) => {
    const urn = request.nextUrl.searchParams.get('urn');
    if (urn) {
      return glossaryController.getGlossaryTerm(request);
    }
    return glossaryController.listGlossaryTerms(request);
  }),
};

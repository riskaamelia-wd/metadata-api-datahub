import type { NextRequest } from 'next/server';
import { glossaryService } from '@/services/glossary.service';
import { successResponse } from '@/utils/response';
import { parsePagination, parseQuery, parseUrn } from '@/utils/request';

export async function listGlossaryTerms(request: NextRequest) {
  const data = await glossaryService.search(
    parseQuery(request),
    parsePagination(request),
  );
  return successResponse(data, 'Glossary terms retrieved successfully');
}

export async function getGlossaryTerm(request: NextRequest) {
  const data = await glossaryService.getByUrn(parseUrn(request));
  return successResponse(data, 'Glossary term retrieved successfully');
}

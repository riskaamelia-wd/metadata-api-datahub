import type { PaginationParams } from '@/types/api';

interface SearchInputOptions extends PaginationParams {
  query?: string;
  entityType: string;
}

export function buildSearchInput(options: SearchInputOptions) {
  return {
    type: options.entityType,
    query: options.query ?? '*',
    start: options.start ?? 0,
    count: options.count ?? 10,
  };
}

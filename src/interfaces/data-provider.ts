export interface DataQueryOptions {
  schema: string;
  table: string;
  searchParams?: URLSearchParams;
}

export interface DataProvider {
  query<T = unknown>(options: DataQueryOptions): Promise<T>;
}

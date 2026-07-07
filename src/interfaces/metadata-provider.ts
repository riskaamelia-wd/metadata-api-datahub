export interface GraphQLExecuteOptions {
  query: string;
  variables?: Record<string, unknown>;
}

export interface MetadataProvider {
  execute<T = unknown>(options: GraphQLExecuteOptions): Promise<T>;
}

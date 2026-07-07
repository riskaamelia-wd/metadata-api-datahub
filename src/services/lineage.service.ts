import { GET_LINEAGE_QUERY } from '@/graphql/queries/lineage.query';
import type { DataHubLineageResult } from '@/graphql/types/datahub.types';
import type { MetadataProvider } from '@/interfaces/metadata-provider';
import { datahubClient } from '@/providers/datahub';

export class LineageService {
  constructor(private readonly provider: MetadataProvider = datahubClient) {}

  async getByUrn(urn: string) {
    const result = await this.provider.execute<DataHubLineageResult>({
      query: GET_LINEAGE_QUERY,
      variables: { urn },
    });

    if (!result.entity) {
      throw new Error(`Entity not found: ${urn}`);
    }

    return {
      urn: result.entity.urn,
      type: result.entity.type,
      upstream:
        result.entity.upstream?.upstreams.map((item) => item.dataset) ?? [],
      downstream:
        result.entity.downstream?.downstreams.map((item) => item.dataset) ??
        [],
    };
  }
}

export const lineageService = new LineageService();

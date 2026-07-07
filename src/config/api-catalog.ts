import { ALLOWED_DATA_SCHEMAS } from '@/config/schemas';

export interface ApiEndpoint {
  id: string;
  method: 'GET';
  path: string;
  description: string;
  category: string;
  note?: string;
}

const metadataEndpoints: ApiEndpoint[] = [
  {
    id: 'health',
    method: 'GET',
    path: '/api/health',
    description: 'Cek status kesehatan layanan API',
    category: 'Sistem',
  },
  {
    id: 'domains-list',
    method: 'GET',
    path: '/api/domains',
    description: 'Daftar semua domain metadata',
    category: 'Metadata',
  },
  {
    id: 'domains-detail',
    method: 'GET',
    path: '/api/domains?urn={urn}',
    description: 'Detail domain berdasarkan URN',
    category: 'Metadata',
    note: 'Ganti {urn} dengan URN yang valid',
  },
  {
    id: 'datasets-list',
    method: 'GET',
    path: '/api/datasets',
    description: 'Daftar semua dataset',
    category: 'Metadata',
  },
  {
    id: 'datasets-detail',
    method: 'GET',
    path: '/api/datasets?urn={urn}',
    description: 'Detail dataset berdasarkan URN',
    category: 'Metadata',
    note: 'Ganti {urn} dengan URN yang valid',
  },
  {
    id: 'glossary-list',
    method: 'GET',
    path: '/api/glossary',
    description: 'Daftar istilah glossary',
    category: 'Metadata',
  },
  {
    id: 'glossary-detail',
    method: 'GET',
    path: '/api/glossary?urn={urn}',
    description: 'Detail istilah glossary berdasarkan URN',
    category: 'Metadata',
    note: 'Ganti {urn} dengan URN yang valid',
  },
  {
    id: 'owners-list',
    method: 'GET',
    path: '/api/owners',
    description: 'Daftar pemilik (owners) data',
    category: 'Metadata',
  },
  {
    id: 'owners-detail',
    method: 'GET',
    path: '/api/owners?urn={urn}',
    description: 'Detail owner berdasarkan URN',
    category: 'Metadata',
    note: 'Ganti {urn} dengan URN yang valid',
  },
  {
    id: 'lineage',
    method: 'GET',
    path: '/api/lineage?urn={urn}',
    description: 'Lineage data berdasarkan URN',
    category: 'Metadata',
    note: 'Parameter urn wajib diisi',
  },
];

const dataEndpoints: ApiEndpoint[] = [
  {
    id: 'tables-all',
    method: 'GET',
    path: '/api/tables',
    description: 'Daftar semua tabel yang tersedia',
    category: 'Data',
  },
  ...ALLOWED_DATA_SCHEMAS.map((schema) => ({
    id: `tables-${schema}`,
    method: 'GET' as const,
    path: `/api/tables?schema=${schema}`,
    description: `Daftar tabel pada schema ${schema}`,
    category: 'Data',
  })),
  ...ALLOWED_DATA_SCHEMAS.map((schema) => ({
    id: `data-${schema}`,
    method: 'GET' as const,
    path: `/api/${schema}/{table}`,
    description: `Data dari tabel pada schema ${schema}`,
    category: 'Data',
    note: 'Ganti {table} dengan nama tabel yang valid',
  })),
];

export const API_CATALOG: ApiEndpoint[] = [
  ...metadataEndpoints,
  ...dataEndpoints,
];

export function groupByCategory(
  endpoints: ApiEndpoint[],
): Record<string, ApiEndpoint[]> {
  return endpoints.reduce<Record<string, ApiEndpoint[]>>((groups, endpoint) => {
    const list = groups[endpoint.category] ?? [];
    list.push(endpoint);
    groups[endpoint.category] = list;
    return groups;
  }, {});
}

/** * Returns true when the path can be fetched directly without placeholder substitution. */
export function isDirectlyCallable(path: string): boolean {
  return !path.includes('{');
}

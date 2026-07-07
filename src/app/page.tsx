import { ApiCatalogList } from '@/components/api-catalog-list';

export default function HomePage() {
  return (
    <main className="page">
      <header className="page-header">
        <h1>Metadata API</h1>
        <p>
          Daftar endpoint API yang tersedia. Klik untuk membuka respons JSON
          di tab baru.
        </p>
      </header>

      <ApiCatalogList />
    </main>
  );
}

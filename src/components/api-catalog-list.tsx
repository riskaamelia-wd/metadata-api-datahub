import {
  API_CATALOG,
  groupByCategory,
  isDirectlyCallable,
} from '@/config/api-catalog';

export function ApiCatalogList() {
  const grouped = groupByCategory(API_CATALOG);

  return (
    <>
      {Object.entries(grouped).map(([category, endpoints]) => (
        <section key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <ul className="api-list">
            {endpoints.map((endpoint) => {
              const callable = isDirectlyCallable(endpoint.path);

              if (!callable) {
                return (
                  <li
                    key={endpoint.id}
                    className="api-item api-item-disabled"
                  >
                    <div className="api-item-header">
                      <span className="method-badge">{endpoint.method}</span>
                      <code className="api-path">{endpoint.path}</code>
                    </div>
                    <p className="api-description">{endpoint.description}</p>
                    {endpoint.note && (
                      <p className="api-note">{endpoint.note}</p>
                    )}
                  </li>
                );
              }

              return (
                <li key={endpoint.id}>
                  <a
                    href={endpoint.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="api-item"
                  >
                    <div className="api-item-header">
                      <span className="method-badge">{endpoint.method}</span>
                      <code className="api-path">{endpoint.path}</code>
                    </div>
                    <p className="api-description">{endpoint.description}</p>
                    {endpoint.note && (
                      <p className="api-note">{endpoint.note}</p>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </>
  );
}

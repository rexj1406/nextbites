export default function LoadingRecipe() {
  return (
    <main className="detail-shell loading-shell" aria-busy="true">
      <p className="loading-announcement" role="status">
        Loading recipe...
      </p>
      <div className="loading-hero">
        <div className="skeleton skeleton-art" />
        <div className="loading-copy">
          <div className="skeleton skeleton-line skeleton-short" />
          <div className="skeleton skeleton-title" />
          <div className="skeleton skeleton-line" />
          <div className="skeleton skeleton-line skeleton-medium" />
          <div className="skeleton skeleton-meta" />
        </div>
      </div>
      <div className="loading-content">
        <div className="skeleton skeleton-panel" />
        <div className="loading-steps">
          <div className="skeleton skeleton-line skeleton-short" />
          <div className="skeleton skeleton-line" />
          <div className="skeleton skeleton-line skeleton-medium" />
          <div className="skeleton skeleton-line" />
          <div className="skeleton skeleton-line skeleton-medium" />
        </div>
      </div>
    </main>
  );
}

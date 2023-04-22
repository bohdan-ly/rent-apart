import { ErrorBoundary } from 'shared/error-boundary';

// import { InternalServerPage } from 'pages/server-error';

export const withFallback = (component) =>
  function WithFallback() {
    return <ErrorBoundary fallback={<h1>Error</h1>}>{component()}</ErrorBoundary>;
  };

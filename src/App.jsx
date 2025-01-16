import { RouterProvider } from 'react-router-dom';
import Router from './Router';
import { ErrorBoundary } from './Component/ErrorBoundary';


export default function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={Router} />
    </ErrorBoundary>
  );
}
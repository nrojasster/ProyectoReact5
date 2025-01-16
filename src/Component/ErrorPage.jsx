import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error("Det. Error:",error);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Oops!</h1>
      <p>Lo sentimos, ha ocurrido un error inesperado.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/" style={{ color: '#22C77A', textDecoration: 'none' }}>Volver a la página de inicio</a>
    </div>
  );
}

export default ErrorPage;
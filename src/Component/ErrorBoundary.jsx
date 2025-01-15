
const ErrorBoundary = ({ children, error }) => {    
    if (error) {
      return (
        <div>
          <h1>Oops! Algo salió mal</h1>
          <p>Por favor, recarga la página o intenta más tarde.</p>
        </div>
      );
    }
    return <>{children}</>;
  };

  export default ErrorBoundary;
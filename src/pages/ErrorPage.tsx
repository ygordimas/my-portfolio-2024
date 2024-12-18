import { Link } from 'react-router-dom';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

type RouteError = {
  status?: number;
  statusText?: string;
  message?: string;
};

const ErrorPage: React.FC = () => {
  const errorContainer = 'grow';

  const ErrorDisplay = () => {
    return (
      <div className="flex flex-col w-full h-full items-center justify-center">
        <p>Nothing to see here.</p>
        <Link to="/" className="inline-block">
          Please return home.
        </Link>
      </div>
    );
  };

  const error = useRouteError();
  console.log(error);

  // type guard for route response errors
  if (isRouteErrorResponse(error)) {
    return (
      <div className={errorContainer}>
        <ErrorDisplay />
        {/* <h1>Error: {error.status}</h1>
        <p>{error.statusText}</p> */}
      </div>
    );
  }

  const genericError = error as RouteError;
  return (
    <div className={errorContainer}>
      {/* <h1>Oops! Something went wrong.</h1>
      <p>{genericError.message || 'An unknown error occurred.'}</p> */}
    </div>
  );
};

export default ErrorPage;

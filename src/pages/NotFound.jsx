// React Router hooks for navigation and getting current location
import { Link, useLocation } from "react-router-dom";

function NotFound() {
  // useLocation hook gives access to the current URL path
  const location = useLocation();

  return (
    <div className="container text-center mt-5">
      {/* Main error code */}
      <h1 className="display-4">404</h1>

      {/* Short description */}
      <h3>Page Not Found</h3>

      {/* Show the user the path they tried to access */}
      <p className="mt-3">
        The page <strong>{location.pathname}</strong> does not exist.
      </p>

      {/* Button to navigate back to the home page */}
      <Link to="/" className="btn btn-primary mt-3">
        Go Back to Home
      </Link>
    </div>
  );
}

// Export the NotFound page component
export default NotFound;

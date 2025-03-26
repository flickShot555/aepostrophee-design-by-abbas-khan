
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-lg px-6">
        <div className="inline-block p-4 bg-orange/10 rounded-full mb-6 animate-fade-in">
          <span className="text-6xl">404</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>Page Not Found</h1>
        <p className="text-gray text-lg mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <a 
          href="/" 
          className="btn-hover inline-flex items-center bg-orange text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <Home className="mr-2 h-5 w-5" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

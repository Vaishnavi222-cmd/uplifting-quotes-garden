import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-semibold text-primary">
              Positive Vibes
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive("/")
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500 hover:text-primary hover:border-b-2 hover:border-primary/50"
              }`}
            >
              Home
            </Link>
            <Link
              to="/quotes"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive("/quotes")
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500 hover:text-primary hover:border-b-2 hover:border-primary/50"
              }`}
            >
              Quotes
            </Link>
            <Link
              to="/guidance"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive("/guidance")
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500 hover:text-primary hover:border-b-2 hover:border-primary/50"
              }`}
            >
              Guidance
            </Link>
            <Link
              to="/gallery"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive("/gallery")
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500 hover:text-primary hover:border-b-2 hover:border-primary/50"
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive("/contact")
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500 hover:text-primary hover:border-b-2 hover:border-primary/50"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
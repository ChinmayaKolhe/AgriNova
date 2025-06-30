import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="py-4 px-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">AgriNova</span>
          </Link>
          <div className="flex space-x-4">
            <Link 
              to="/login" 
              className="text-gray-600 hover:text-gray-900"
            >
              Sign In
            </Link>
            <Link 
              to="/signup" 
              className="text-gray-600 hover:text-gray-900"
            >
              Create Account
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 px-6 border-t border-gray-200 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} AgriConnect. All rights reserved.
      </footer>
    </div>
  );
};

export default AuthLayout;
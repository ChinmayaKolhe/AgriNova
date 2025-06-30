import { 
  ShoppingCart, Package, MessageSquare, Heart, 
  User, Settings, LogOut, ChevronDown, ChevronUp 
} from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const BuyerSidebar = ({ darkMode, setDarkMode }) => {
  const [expandedMarketplace, setExpandedMarketplace] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className={`w-64 p-4 border-r transition-colors duration-300 flex flex-col h-full ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      {/* Logo */}
      <div className="flex items-center space-x-3 mb-8 p-2">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-lg">
          <ShoppingCart className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-bold">AgriBuyer</span>
      </div>

      {/* Navigation */}
      <div className="flex-1 space-y-1 overflow-y-auto">
        <NavLink 
          to="/buyer/dashboard"
          className={({ isActive }) => `w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
            isActive 
              ? darkMode ? 'bg-gray-700 text-white' : 'bg-blue-50 text-blue-700'
              : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Marketplace</span>
        </NavLink>

        <NavLink 
          to="/buyer/orders"
          className={({ isActive }) => `w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
            isActive 
              ? darkMode ? 'bg-gray-700 text-white' : 'bg-blue-50 text-blue-700'
              : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}
        >
          <Package className="w-5 h-5" />
          <span>My Orders</span>
        </NavLink>

        <NavLink 
          to="/buyer/messages"
          className={({ isActive }) => `w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
            isActive 
              ? darkMode ? 'bg-gray-700 text-white' : 'bg-blue-50 text-blue-700'
              : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}
        >
          <MessageSquare className="w-5 h-5" />
          <span>Messages</span>
        </NavLink>

        <NavLink 
          to="/buyer/favorites"
          className={({ isActive }) => `w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
            isActive 
              ? darkMode ? 'bg-gray-700 text-white' : 'bg-blue-50 text-blue-700'
              : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}
        >
          <Heart className="w-5 h-5" />
          <span>Favorites</span>
        </NavLink>

        <NavLink 
          to="/buyer/profile"
          className={({ isActive }) => `w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
            isActive 
              ? darkMode ? 'bg-gray-700 text-white' : 'bg-blue-50 text-blue-700'
              : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}
        >
          <User className="w-5 h-5" />
          <span>Profile</span>
        </NavLink>
      </div>

      {/* Settings and Logout */}
      <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
            darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}
        >
          <Settings className="w-5 h-5" />
          <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
        <button 
          onClick={handleLogout}
          className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
            darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default BuyerSidebar;
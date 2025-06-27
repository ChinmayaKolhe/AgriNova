import { 
  User, Leaf, BarChart2, Cloud, MessageSquare, 
  Calendar, Droplet, Thermometer, Sun, Clock,
  Settings, LogOut, ChevronDown, ChevronUp, Bell
} from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = ({ darkMode, setDarkMode }) => {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
    navigate('/login');
  };

  return (
    <div className={`w-64 p-4 border-r transition-colors duration-300 flex flex-col h-full ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      {/* Logo */}
      <div className="flex items-center space-x-3 mb-8 p-2">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg">
          <Leaf className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-bold">AgriConnect</span>
      </div>

      {/* Navigation */}
      <div className="flex-1 space-y-1 overflow-y-auto">
        <NavLink 
          to="/dashboard/home"
          className={({ isActive }) => `w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
            isActive 
              ? darkMode ? 'bg-gray-700 text-white' : 'bg-green-50 text-green-700'
              : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}
        >
          <BarChart2 className="w-5 h-5" />
          <span>Dashboard</span>
        </NavLink>

        <div>
          <button
            onClick={() => toggleMenu('predictions')}
            className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center space-x-3">
              <Thermometer className="w-5 h-5" />
              <span>Crop Predictions</span>
            </div>
            {expandedMenu === 'predictions' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          
          {expandedMenu === 'predictions' && (
            <div className="ml-8 mt-1 space-y-1">
              <NavLink 
                to="/dashboard/crop-recommendations"
                className={({ isActive }) => `block p-2 rounded-lg transition-colors ${
                  isActive 
                    ? darkMode ? 'bg-gray-700 text-white' : 'bg-green-50 text-green-700'
                    : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                Recommendations
              </NavLink>
              <NavLink 
                to="/dashboard/crop-planning"
                className={({ isActive }) => `block p-2 rounded-lg transition-colors ${
                  isActive 
                    ? darkMode ? 'bg-gray-700 text-white' : 'bg-green-50 text-green-700'
                    : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                Planting Calendar
              </NavLink>
            </div>
          )}
        </div>

        <NavLink 
          to="/dashboard/market-trends"
          className={({ isActive }) => `w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
            isActive 
              ? darkMode ? 'bg-gray-700 text-white' : 'bg-green-50 text-green-700'
              : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}
        >
          <Sun className="w-5 h-5" />
          <span>Market Trends</span>
        </NavLink>

        <NavLink 
          to="/dashboard/weather"
          className={({ isActive }) => `w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
            isActive 
              ? darkMode ? 'bg-gray-700 text-white' : 'bg-green-50 text-green-700'
              : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}
        >
          <Cloud className="w-5 h-5" />
          <span>Weather</span>
        </NavLink>

        <NavLink 
          to="/dashboard/ai-assistant"
          className={({ isActive }) => `w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
            isActive 
              ? darkMode ? 'bg-gray-700 text-white' : 'bg-green-50 text-green-700'
              : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}
        >
          <MessageSquare className="w-5 h-5" />
          <span>AI Assistant</span>
        </NavLink>

        <NavLink 
          to="/dashboard/irrigation"
          className={({ isActive }) => `w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
            isActive 
              ? darkMode ? 'bg-gray-700 text-white' : 'bg-green-50 text-green-700'
              : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}
        >
          <Droplet className="w-5 h-5" />
          <span>Irrigation</span>
        </NavLink>

        <NavLink 
          to="/dashboard/profile"
          className={({ isActive }) => `w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
            isActive 
              ? darkMode ? 'bg-gray-700 text-white' : 'bg-green-50 text-green-700'
              : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}
        >
          <User className="w-5 h-5" />
          <span>My Profile</span>
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

export default Sidebar;
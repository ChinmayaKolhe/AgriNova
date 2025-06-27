import { Bell } from 'lucide-react';

const Header = ({ darkMode }) => {
  return (
    <header className={`sticky top-0 z-10 p-4 border-b transition-colors duration-300 flex justify-between items-center ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <button className={`p-2 rounded-full relative ${
          darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
        }`}>
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <div className={`flex items-center space-x-2 p-2 rounded-lg ${
          darkMode ? 'bg-gray-700' : 'bg-gray-100'
        }`}>
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white">
            U
          </div>
          <span>User</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const DashboardLayout = ({ darkMode, setDarkMode }) => {
  return (
    <div className={`min-h-screen transition-colors duration-300 flex ${
      darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Sidebar */}
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <Header darkMode={darkMode} />
        
        {/* Page Content */}
        <main className="p-6">
          <Outlet context={{ darkMode }} />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
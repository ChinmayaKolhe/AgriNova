import { Outlet } from 'react-router-dom';
import BuyerSidebar from '../components/BuyerSidebar';
import BuyerNavbar from '../components/BuyerNavbar';

const BuyerLayout = ({ darkMode, setDarkMode }) => {
  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <BuyerSidebar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="flex-1 overflow-auto">
        <BuyerNavbar darkMode={darkMode} />
        <main className="p-6">
          <Outlet context={{ darkMode }} />
        </main>
      </div>
    </div>
  );
};

export default BuyerLayout;
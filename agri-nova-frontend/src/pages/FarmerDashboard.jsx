import { useState } from 'react';
import { 
  User, Leaf, BarChart2, Cloud, MessageSquare, 
  Calendar, Droplet, Thermometer, Sun, Clock,
  ChevronDown, ChevronUp, Bell, Settings, LogOut, X, Send
} from 'lucide-react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const FarmerDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I help you today?' }
  ]);
  const [messageInput, setMessageInput] = useState('');
  const navigate = useNavigate();

  // Dummy farmer profile data
  const farmerProfile = {
    name: "Rajesh Kumar",
    location: "Punjab, India",
    farmSize: "5 acres",
    crops: ["Wheat", "Rice", "Mustard"],
    phone: "+91 9876543210",
    joinedDate: "15 Jan 2020"
  };

  const sendMessage = () => {
    if (!messageInput.trim()) return;
    
    const newMessages = [...chatMessages, { sender: 'user', text: messageInput }];
    setChatMessages(newMessages);
    setMessageInput('');
    
    setTimeout(() => {
      setChatMessages([...newMessages, { 
        sender: 'bot', 
        text: "I recommend checking your soil moisture levels before irrigating. Would you like me to show you the latest soil data?"
      }]);
    }, 1000);
  };

  const handleLogout = () => {
    // Add logout logic here
    navigate('/login');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 flex ${
      darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Sidebar */}
      <div className={`w-64 p-4 border-r transition-colors duration-300 ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center space-x-3 mb-8 p-2">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold">Agrinova</span>
        </div>

        <div className="space-y-1">
          <Link 
            to="/dashboard"
            className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              location.pathname === '/dashboard' 
                ? darkMode ? 'bg-gray-700 text-white' : 'bg-green-50 text-green-700'
                : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
          >
            <BarChart2 className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>

          <Link 
            to="/dashboard/crop-predictions"
            className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              location.pathname === '/dashboard/crop-predictions' 
                ? darkMode ? 'bg-gray-700 text-white' : 'bg-green-50 text-green-700'
                : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
          >
            <Thermometer className="w-5 h-5" />
            <span>Crop Predictions</span>
          </Link>

          <Link 
            to="/dashboard/market-trends"
            className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              location.pathname === '/dashboard/market-trends' 
                ? darkMode ? 'bg-gray-700 text-white' : 'bg-green-50 text-green-700'
                : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
          >
            <Sun className="w-5 h-5" />
            <span>Market Trends</span>
          </Link>

          <Link 
            to="/dashboard/weather"
            className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              location.pathname === '/dashboard/weather' 
                ? darkMode ? 'bg-gray-700 text-white' : 'bg-green-50 text-green-700'
                : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
          >
            <Cloud className="w-5 h-5" />
            <span>Weather</span>
          </Link>

          <button 
            onClick={() => setChatbotOpen(true)}
            className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            <span>AI Assistant</span>
          </button>

          <Link 
            to="/dashboard/irrigation"
            className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              location.pathname === '/dashboard/irrigation' 
                ? darkMode ? 'bg-gray-700 text-white' : 'bg-green-50 text-green-700'
                : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
          >
            <Droplet className="w-5 h-5" />
            <span>Irrigation</span>
          </Link>

          <Link 
            to="/dashboard/profile"
            className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              location.pathname === '/dashboard/profile' 
                ? darkMode ? 'bg-gray-700 text-white' : 'bg-green-50 text-green-700'
                : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
          >
            <User className="w-5 h-5" />
            <span>My Profile</span>
          </Link>
        </div>

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

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className={`sticky top-0 z-10 p-4 border-b transition-colors duration-300 flex justify-between items-center ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <h1 className="text-2xl font-bold">Farmer Dashboard</h1>
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
                {farmerProfile.name.charAt(0)}
              </div>
              <span>{farmerProfile.name}</span>
            </div>
          </div>
        </header>

        {/* Nested Routes Content */}
        <Outlet />
      </div>

      {/* Chatbot Panel */}
      {chatbotOpen && (
        <div className={`fixed bottom-4 right-4 w-96 rounded-xl shadow-xl transition-colors duration-300 flex flex-col ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`} style={{ height: '500px' }}>
          {/* ... (same chatbot code as before) ... */}
        </div>
      )}
    </div>
  );
};

export default FarmerDashboard;
import { useState } from 'react';
import { 
  ArrowLeft, Mail, Lock, Eye, EyeOff, Moon, Sun, 
  Leaf, User, ShoppingCart, ChevronDown, ChevronUp 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('farmer'); // 'farmer' or 'buyer'
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    // Simulate login
    setTimeout(() => {
      setLoading(false);
      if (activeTab === 'farmer') {
        navigate('/dashboard');
      } else {
        navigate('/buyer/dashboard');
      }
    }, 1500);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-green-50 via-white to-blue-50'
    }`}>
      
      {/* Main Content */}
      <div className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className={`rounded-2xl p-6 shadow-xl transition-colors duration-300 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            {/* Login Type Tabs */}
            <div className="flex mb-6 border-b">
              <button
                onClick={() => setActiveTab('farmer')}
                className={`flex-1 py-3 font-medium flex items-center justify-center ${
                  activeTab === 'farmer'
                    ? darkMode
                      ? 'text-green-400 border-b-2 border-green-400'
                      : 'text-green-600 border-b-2 border-green-600'
                    : darkMode
                      ? 'text-gray-400 hover:text-gray-300'
                      : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Leaf className="w-5 h-5 mr-2" />
                Farmer Login
              </button>
              <button
                onClick={() => setActiveTab('buyer')}
                className={`flex-1 py-3 font-medium flex items-center justify-center ${
                  activeTab === 'buyer'
                    ? darkMode
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-blue-600 border-b-2 border-blue-600'
                    : darkMode
                      ? 'text-gray-400 hover:text-gray-300'
                      : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Buyer Login
              </button>
            </div>

            {/* Tab Content */}
            <div className="text-center mb-6">
              <h2 className={`text-2xl font-bold mb-2 transition-colors ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {activeTab === 'farmer' ? 'Farmer Portal' : 'Buyer Marketplace'}
              </h2>
              <p className={`transition-colors ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {activeTab === 'farmer' 
                  ? 'Access your farming dashboard and tools' 
                  : 'Connect with farmers and purchase produce'}
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className={`mb-4 p-3 rounded-lg text-sm ${
                darkMode ? 'bg-red-900/50 text-red-200' : 'bg-red-100 text-red-700'
              }`}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 transition-colors ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email Address
                </label>
                <div className="relative">
                  <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 ${
                      activeTab === 'farmer' ? 'focus:ring-green-500 focus:border-green-500' : 'focus:ring-blue-500 focus:border-blue-500'
                    } transition-colors ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className={`block text-sm font-medium mb-2 transition-colors ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Password
                </label>
                <div className="relative">
                  <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength="6"
                    className={`w-full pl-10 pr-12 py-3 rounded-lg border focus:ring-2 ${
                      activeTab === 'farmer' ? 'focus:ring-green-500 focus:border-green-500' : 'focus:ring-blue-500 focus:border-blue-500'
                    } transition-colors ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute inset-y-0 right-0 pr-3 flex items-center ${
                      darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <div className="mt-2 text-right">
                  <button
                    type="button"
                    onClick={() => navigate('/forgot-password')}
                    className={`text-sm ${
                      activeTab === 'farmer'
                        ? darkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-700'
                        : darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                    }`}
                  >
                    Forgot password?
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full ${
                    activeTab === 'farmer'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600'
                  } text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.01] transition-all focus:outline-none focus:ring-2 ${
                    activeTab === 'farmer' ? 'focus:ring-green-500' : 'focus:ring-blue-500'
                  } focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin inline" />
                      Logging in...
                    </>
                  ) : (
                    `Log in as ${activeTab === 'farmer' ? 'Farmer' : 'Buyer'}`
                  )}
                </button>
              </div>
            </form>

            <div className={`mt-6 text-center text-sm transition-colors ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Don't have an account?{' '}
              <button 
                onClick={() => navigate('/signup')}
                className={`font-medium hover:underline ${
                  activeTab === 'farmer'
                    ? darkMode ? 'text-green-400' : 'text-green-600'
                    : darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}
              >
                Sign up as {activeTab === 'farmer' ? 'Farmer' : 'Buyer'}
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${
                  darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
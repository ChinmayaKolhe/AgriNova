import React, { useState } from 'react';
import { ArrowLeft, Mail, Lock, Eye, EyeOff,Moon,Sun, Leaf } from 'lucide-react';
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
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Frontend validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    // Simulate login (replace with actual backend call later)
    console.log('Login data:', formData);
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard'); // Redirect after "successful" login
    }, 1500);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-green-50 via-white to-blue-50'
    }`}>
      
      {/* Main Content */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className={`rounded-2xl p-8 shadow-xl transition-colors duration-300 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            {/* Error Message */}
            {error && (
              <div className={`mb-4 p-3 rounded-lg text-sm ${
                darkMode ? 'bg-red-900/50 text-red-200' : 'bg-red-100 text-red-700'
              }`}>
                {error}
              </div>
            )}

            <div className="text-center mb-8">
              <h2 className={`text-3xl font-bold mb-2 transition-colors ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Welcome Back
              </h2>
              <p className={`transition-colors ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Log in to access your Agrinova account
              </p>
            </div>

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
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
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
                    className={`w-full pl-10 pr-12 py-3 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
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
                    className={`text-sm ${darkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-700'}`}
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
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.01] transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin inline" />
                      Logging in...
                    </>
                  ) : (
                    'Log In'
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
                className="text-green-600 font-medium hover:underline"
              >
                Sign up
              </button>
            </div>

            {/* Social Login Options */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className={`w-full border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className={`px-2 ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'}`}>
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className={`w-full inline-flex justify-center py-2 px-4 rounded-md border shadow-sm text-sm font-medium transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600' 
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.167 6.839 9.49.5.09.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.293 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                </button>

                <button
                  type="button"
                  className={`w-full inline-flex justify-center py-2 px-4 rounded-md border shadow-sm text-sm font-medium transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600' 
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
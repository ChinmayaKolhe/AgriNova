import React, { useState } from 'react';
import { ArrowLeft, Mail, Check, Leaf,Sun,Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Frontend validation
    if (!email) {
      setError('Please enter your email address');
      setLoading(false);
      return;
    }

    // Simulate API call (replace with actual implementation later)
    console.log('Password reset requested for:', email);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-green-50 via-white to-blue-50'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full backdrop-blur-md border-b z-50 transition-colors duration-300 ${
        darkMode 
          ? 'bg-gray-900/90 border-gray-700' 
          : 'bg-white/90 border-green-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => navigate(-1)}
              className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
            >
              <ArrowLeft className="w-5 h-5 mr-1" />
              Back
            </button>
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className={`text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent`}>
                Agrinova
              </span>
            </div>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-colors ${
                darkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className={`rounded-2xl p-8 shadow-xl transition-colors duration-300 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            {success ? (
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h2 className={`text-2xl font-bold mb-2 transition-colors ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Check Your Email
                </h2>
                <p className={`mb-6 transition-colors ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  We've sent a password reset link to <span className="font-medium">{email}</span>. Please check your inbox.
                </p>
                <button
                  onClick={() => navigate('/login')}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.01] transition-all"
                >
                  Return to Login
                </button>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h2 className={`text-3xl font-bold mb-2 transition-colors ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Reset Password
                  </h2>
                  <p className={`transition-colors ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Enter your email to receive a reset link
                  </p>
                </div>

                {error && (
                  <div className={`mb-4 p-3 rounded-lg text-sm ${
                    darkMode ? 'bg-red-900/50 text-red-200' : 'bg-red-100 text-red-700'
                  }`}>
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
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
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError('');
                        }}
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

                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.01] transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin inline" />
                          Sending link...
                        </>
                      ) : (
                        'Send Reset Link'
                      )}
                    </button>
                  </div>
                </form>

                <div className={`mt-6 text-center text-sm transition-colors ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Remember your password?{' '}
                  <button 
                    onClick={() => navigate('/login')}
                    className="text-green-600 font-medium hover:underline"
                  >
                    Log in
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
import React, { useState } from 'react';
import { ArrowLeft, Lock, Eye, EyeOff, Check, Leaf,Sun,Moon } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Extract token from URL (would be used in backend integration)
  const token = searchParams.get('token');
  const email = searchParams.get('email');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Frontend validation
    if (!newPassword || !confirmPassword) {
      setError('Please fill in both password fields');
      setLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords don't match");
      setLoading(false);
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters");
      setLoading(false);
      return;
    }

    // Simulate API call (replace with actual implementation)
    console.log('Password reset submitted for:', email, 'with token:', token);
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
                  Password Updated!
                </h2>
                <p className={`mb-6 transition-colors ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Your password has been successfully updated. You can now log in with your new password.
                </p>
                <button
                  onClick={() => navigate('/login')}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.01] transition-all"
                >
                  Continue to Login
                </button>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h2 className={`text-3xl font-bold mb-2 transition-colors ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Create New Password
                  </h2>
                  <p className={`transition-colors ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {email ? `For ${email}` : 'Enter your new password below'}
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
                  {/* New Password Field */}
                  <div>
                    <label htmlFor="newPassword" className={`block text-sm font-medium mb-2 transition-colors ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      New Password
                    </label>
                    <div className="relative">
                      <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        <Lock className="w-5 h-5" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        id="newPassword"
                        name="newPassword"
                        value={newPassword}
                        onChange={(e) => {
                          setNewPassword(e.target.value);
                          setError('');
                        }}
                        required
                        minLength="8"
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
                    <p className={`mt-1 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Must be at least 8 characters
                    </p>
                  </div>

                  {/* Confirm Password Field */}
                  <div>
                    <label htmlFor="confirmPassword" className={`block text-sm font-medium mb-2 transition-colors ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        <Lock className="w-5 h-5" />
                      </div>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                          setError('');
                        }}
                        required
                        minLength="8"
                        className={`w-full pl-10 pr-12 py-3 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                          darkMode
                            ? 'bg-gray-700 border-gray-600 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className={`absolute inset-y-0 right-0 pr-3 flex items-center ${
                          darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
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
                          Updating...
                        </>
                      ) : (
                        'Reset Password'
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
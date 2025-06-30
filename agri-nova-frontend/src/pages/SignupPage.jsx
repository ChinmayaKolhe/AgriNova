import React, { useState } from 'react';
import { ArrowLeft, User, Smartphone, Mail, Lock, Eye, EyeOff,Moon,Sun, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'farmer'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup data:', formData);
    navigate('/dashboard'); // Redirect after signup
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
            <div className="text-center mb-8">
              <h2 className={`text-3xl font-bold mb-2 transition-colors ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Create Your Account
              </h2>
              <p className={`transition-colors ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Join thousands of farmers using Agrinova
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User Type Selection */}
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  I am a:
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, userType: 'farmer'})}
                    className={`py-3 px-4 rounded-lg border transition-all ${
                      formData.userType === 'farmer'
                        ? 'border-green-500 bg-green-500/10 text-green-300'
                        : darkMode
                          ? 'border-gray-600 hover:border-gray-500'
                          : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    Farmer
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, userType: 'buyer'})}
                    className={`py-3 px-4 rounded-lg border transition-all ${
                      formData.userType === 'buyer'
                        ? 'border-green-500 bg-green-500/10 text-green-600'
                        : darkMode
                          ? 'border-gray-600 hover:border-gray-500'
                          : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    Buyer
                  </button>
                </div>
              </div>

              {/* Name Field */}
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 transition-colors ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Full Name
                </label>
                <div className="relative">
                  <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className={`block text-sm font-medium mb-2 transition-colors ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Phone Number
                </label>
                <div className="relative">
                  <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>

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
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className={`block text-sm font-medium mb-2 transition-colors ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Confirm Password
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
                    value={formData.confirmPassword}
                    onChange={handleChange}
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

              {/* Terms Checkbox */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className={`h-4 w-4 rounded border focus:ring-green-500 transition-colors ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-green-500'
                        : 'border-gray-300 text-green-600'
                    }`}
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="terms" className={`text-sm transition-colors ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    I agree to the <button type="button" className="text-green-600 hover:underline">Terms of Service</button> and <button type="button" className="text-green-600 hover:underline">Privacy Policy</button>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.01] transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Create Account
                </button>
              </div>
            </form>

            <div className={`mt-6 text-center text-sm transition-colors ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Already have an account?{' '}
              <button 
                onClick={() => navigate('/login')}
                className="text-green-600 font-medium hover:underline"
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
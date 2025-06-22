import React, { useState, useEffect } from 'react';
import { Leaf, TrendingUp, Smartphone, Brain, Users, ChevronRight, Play, Star, ArrowRight, Zap, Shield, Globe, Moon, Sun } from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({ farmers: 0, revenue: 0, accuracy: 0 });
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    // This will be used for routing between pages
    console.log('Navigating to:', page);
  };

  // Animated counter effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedNumbers({
        farmers: 50000,
        revenue: 300,
        accuracy: 94
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Crop Prediction",
      description: "ML-powered recommendations based on soil data, weather patterns, and historical yields",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Price Forecasting",
      description: "LSTM neural networks predict market prices 7-30 days ahead for optimal selling",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Direct Marketplace",
      description: "Connect directly with buyers, eliminating middlemen and maximizing profits",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Voice Advisory",
      description: "Offline voice bot in regional languages for non-tech-savvy farmers",
      color: "from-orange-500 to-red-600"
    }
  ];

  const testimonials = [
    {
      name: "Ramesh Kumar",
      location: "Punjab",
      text: "Agrinova helped me increase my wheat yield by 35% and sell at peak prices!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      location: "Maharashtra",
      text: "The voice advisory feature is amazing - I can get advice in my own language.",
      rating: 5
    },
    {
      name: "Suresh Patel",
      location: "Gujarat",
      text: "Direct marketplace saved me ₹50,000 by cutting out middlemen.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className={`text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent`}>
                Agrinova
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => handleNavigation('features')}
                className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'}`}
              >
                Features
              </button>
              <button 
                onClick={() => handleNavigation('marketplace')}
                className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'}`}
              >
                Marketplace
              </button>
              <button 
                onClick={() => handleNavigation('dashboard')}
                className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'}`}
              >
                Dashboard
              </button>
              <button 
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-colors ${
                  darkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button 
                onClick={() => handleNavigation('login')}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  darkMode 
                    ? 'bg-green-900/50 text-green-300 border border-green-700' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  <Zap className="w-4 h-4 mr-2" />
                  100% Free AI-Powered Agriculture Platform
                </div>
                <h1 className={`text-5xl lg:text-6xl font-bold leading-tight transition-colors ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Smart Farming,
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {' '}Maximum Profits
                  </span>
                </h1>
                <p className={`text-xl leading-relaxed transition-colors ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Agrinova uses machine learning to optimize crop selection, predict market trends, and connect farmers directly with buyers. Completely free platform - no hidden costs, no subscriptions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => handleNavigation('dashboard')}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center"
                >
                  Start Using Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button 
                  onClick={() => handleNavigation('demo')}
                  className={`border-2 px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center ${
                    darkMode 
                      ? 'border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900' 
                      : 'border-green-500 text-green-600 hover:bg-green-50'
                  }`}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className={`text-3xl font-bold transition-colors ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                    {animatedNumbers.farmers.toLocaleString()}+
                  </div>
                  <div className={`transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Active Farmers</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold transition-colors ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    ₹{animatedNumbers.revenue}Cr+
                  </div>
                  <div className={`transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold transition-colors ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                    {animatedNumbers.accuracy}%
                  </div>
                  <div className={`transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Prediction Accuracy</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className={`bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ${
                darkMode ? 'shadow-green-900/50' : ''
              }`}>
                <div className={`rounded-2xl p-6 space-y-4 transition-colors ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="flex items-center justify-between">
                    <h3 className={`font-bold transition-colors ${darkMode ? 'text-white' : 'text-gray-800'}`}>Today's Recommendations</h3>
                    <div className={`px-3 py-1 rounded-full text-sm ${
                      darkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-800'
                    }`}>AI Powered</div>
                  </div>
                  <div className="space-y-3">
                    <div className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                      darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-green-50'
                    }`}>
                      <span className={`font-medium transition-colors ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Wheat (Punjab)</span>
                      <span className={`font-bold transition-colors ${darkMode ? 'text-green-400' : 'text-green-600'}`}>₹2,450/quintal</span>
                    </div>
                    <div className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                      darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-green-50'
                    }`}>
                      <span className={`font-medium transition-colors ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Cotton (Gujarat)</span>
                      <span className={`font-bold transition-colors ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>₹5,200/quintal</span>
                    </div>
                    <div className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                      darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-green-50'
                    }`}>
                      <span className={`font-medium transition-colors ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Rice (West Bengal)</span>
                      <span className={`font-bold transition-colors ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>₹1,890/quintal</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-3 rounded-lg hover:shadow-md transition">
                    <div className="text-sm opacity-90">Next Week Prediction</div>
                    <div className="font-bold">Wheat prices expected to rise 8%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className={`text-4xl font-bold transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Powerful Features for Modern Farmers
            </h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Our AI-driven platform combines cutting-edge technology with practical agricultural insights - completely free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`group relative rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border hover:-translate-y-2 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' 
                    : 'bg-white border-gray-100'
                }`}
                onClick={() => handleNavigation(index === 0 ? 'predict' : index === 1 ? 'market-trends' : index === 2 ? 'marketplace' : 'voice-assistant')}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
                <p className={`mb-4 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature.description}</p>
                <div className={`flex items-center font-medium group-hover:translate-x-2 transition-transform ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className={`py-20 transition-colors duration-300 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800' 
          : 'bg-gradient-to-br from-green-50 to-blue-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className={`text-4xl font-bold transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              How Agrinova Works
            </h2>
            <p className={`text-xl transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Simple steps to transform your farming business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Data Input",
                description: "Upload soil reports, location data, and farming preferences through our app or SMS",
                icon: <Globe className="w-8 h-8" />,
                link: "get-started"
              },
              {
                step: "02", 
                title: "AI Analysis",
                description: "Our ML models analyze weather, market trends, and historical data to generate recommendations",
                icon: <Brain className="w-8 h-8" />,
                link: "predict"
              },
              {
                step: "03",
                title: "Smart Decisions",
                description: "Receive personalized crop plans, price forecasts, and direct buyer connections",
                icon: <TrendingUp className="w-8 h-8" />,
                link: "marketplace"
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div 
                  className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white'
                  }`}
                  onClick={() => handleNavigation(item.link)}
                >
                  <div className={`text-6xl font-bold mb-4 transition-colors ${
                    darkMode ? 'text-gray-600' : 'text-green-100'
                  }`}>{item.step}</div>
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center text-white mb-4">
                    {item.icon}
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 transition-colors ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>{item.title}</h3>
                  <p className={`transition-colors ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className={`w-8 h-8 ${darkMode ? 'text-gray-500' : 'text-green-400'}`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className={`text-4xl font-bold transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Success Stories
            </h2>
            <p className={`text-xl transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Real farmers, real results
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white shadow-2xl">
              <div className="text-center space-y-6">
                <div className="flex justify-center space-x-1">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current text-yellow-300" />
                  ))}
                </div>
                <blockquote className="text-2xl font-medium leading-relaxed">
                  "{testimonials[currentSlide].text}"
                </blockquote>
                <div>
                  <div className="font-bold text-xl">{testimonials[currentSlide].name}</div>
                  <div className="opacity-90">{testimonials[currentSlide].location}</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index 
                      ? darkMode 
                        ? 'bg-green-400' 
                        : 'bg-green-500' 
                      : darkMode 
                        ? 'bg-gray-500' 
                        : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Ready to Transform Your Farming?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of farmers who are already using Agrinova for free to maximize their profits and reduce risks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleNavigation('signup')}
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Start Using Free Today
              </button>
              <button 
                onClick={() => handleNavigation('demo')}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`bg-gray-900 text-white py-12 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Agrinova</span>
              </div>
              <p className="text-gray-400">
                Empowering farmers with AI-driven insights for smarter agricultural decisions.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-white">Product</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => handleNavigation('predict')}
                  className="text-gray-400 hover:text-green-400 transition-colors text-left"
                >
                  Crop Prediction
                </button><br></br>
                <button 
                  onClick={() => handleNavigation('market-trends')}
                  className="text-gray-400 hover:text-green-400 transition-colors text-left"
                >
                  Market Trends
                </button><br></br>
                <button 
                  onClick={() => handleNavigation('marketplace')}
                  className="text-gray-400 hover:text-green-400 transition-colors text-left"
                >
                  Marketplace
                </button><br></br>
                <button 
                  onClick={() => handleNavigation('voice-assistant')}
                  className="text-gray-400 hover:text-green-400 transition-colors text-left"
                >
                  Voice Assistant
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-white">Company</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => handleNavigation('about')}
                  className="text-gray-400 hover:text-green-400 transition-colors text-left"
                >
                  About Us
                </button><br></br>
                <button 
                  onClick={() => handleNavigation('blog')}
                  className="text-gray-400 hover:text-green-400 transition-colors text-left"
                >
                  Blog
                </button><br></br>
                <button 
                  onClick={() => handleNavigation('contact')}
                  className="text-gray-400 hover:text-green-400 transition-colors text-left"
                >
                  Contact
                </button><br></br>
                <button 
                  onClick={() => handleNavigation('careers')}
                  className="text-gray-400 hover:text-green-400 transition-colors text-left"
                >
                  Careers
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-white">Support</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => handleNavigation('help')}
                  className="text-gray-400 hover:text-green-400 transition-colors text-left"
                >
                  Help Center
                </button><br></br>
                <button 
                  onClick={() => handleNavigation('community')}
                  className="text-gray-400 hover:text-green-400 transition-colors text-left"
                >
                  Community
                </button><br></br>
                <button 
                  onClick={() => handleNavigation('faq')}
                  className="text-gray-400 hover:text-green-400 transition-colors text-left"
                >
                  FAQs
                </button><br></br>
                <button 
                  onClick={() => handleNavigation('feedback')}
                  className="text-gray-400 hover:text-green-400 transition-colors text-left"
                >
                  Feedback
                </button><br></br>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Agrinova. All rights reserved. Transforming agriculture through AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
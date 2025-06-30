import { 
  ChevronDown, ChevronUp, Thermometer, Sun, Cloud, 
  Droplet, BarChart2, Clock, CloudRain, Leaf
} from 'lucide-react';
import { useState } from 'react';

const DashboardHome = ({ darkMode }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  // Farmer profile data
  const farmerProfile = {
    name: "Rajesh Kumar",
    location: "Punjab, India",
    farmSize: "5 acres",
    crops: ["Wheat", "Rice", "Mustard"],
    phone: "+91 9876543210",
    joinedDate: "15 Jan 2020"
  };

  // Crop prediction data
  const cropPredictions = [
    { crop: "Wheat", probability: 78, suitable: true },
    { crop: "Rice", probability: 65, suitable: true },
    { crop: "Potato", probability: 72, suitable: true },
    { crop: "Mustard", probability: 71, suitable: true }
  ];

  // Market predictions
  const marketPredictions = [
    { crop: "Wheat", currentPrice: "₹2,150/quintal", predictedPrice: "₹2,320 (+8%)", timeFrame: "Next 2 weeks" },
    { crop: "Rice", currentPrice: "₹1,890/quintal", predictedPrice: "₹1,950 (+3%)", timeFrame: "Next week" },
    { crop: "Mustard", currentPrice: "₹5,400/quintal", predictedPrice: "₹5,600 (+4%)", timeFrame: "Next 10 days" }
  ];

  // Weather data
  const weatherData = {
    current: {
      temp: "28°C",
      condition: "Partly Cloudy",
      humidity: "65%",
      rainfall: "10% chance"
    },
    forecast: [
      { day: "Today", high: "30°C", low: "22°C", condition: "Partly Cloudy" },
      { day: "Tomorrow", high: "31°C", low: "23°C", condition: "Sunny" },
      { day: "Day 3", high: "29°C", low: "24°C", condition: "Light Rain" }
    ]
  };

  // Soil health data
  const soilHealth = {
    moisture: "Optimal",
    nitrogen: "Medium",
    phosphorus: "High",
    potassium: "Low",
    ph: "6.8 (Neutral)",
    lastUpdated: "2 days ago"
  };

  // Irrigation suggestions
  const irrigationSuggestions = [
    { field: "Field A (Wheat)", suggestion: "Irrigate tomorrow morning" },
    { field: "Field B (Rice)", suggestion: "Delay irrigation - sufficient moisture" }
  ];

  const toggleCard = (card) => {
    setExpandedCard(expandedCard === card ? null : card);
  };

  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Profile Card */}
      <div className={`rounded-xl p-6 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="flex items-center space-x-4 mb-4">
          <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white text-2xl">
            {farmerProfile.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-xl font-bold">{farmerProfile.name}</h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{farmerProfile.location}</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Farm Size:</span>
            <span className="font-medium">{farmerProfile.farmSize}</span>
          </div>
          <div className="flex justify-between">
            <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Main Crops:</span>
            <span className="font-medium">{farmerProfile.crops.join(', ')}</span>
          </div>
          <div className="flex justify-between">
            <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Contact:</span>
            <span className="font-medium">{farmerProfile.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Member Since:</span>
            <span className="font-medium">{farmerProfile.joinedDate}</span>
          </div>
        </div>
      </div>

      {/* Crop Prediction Card */}
      <div className={`rounded-xl p-6 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold flex items-center">
            <Thermometer className="w-5 h-5 mr-2 text-green-500" />
            Crop Recommendations
          </h2>
          <button 
            onClick={() => toggleCard('crop')}
            className={`p-1 rounded-full ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
          >
            {expandedCard === 'crop' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
        
        {expandedCard === 'crop' ? (
          <div className="space-y-4">
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Based on your soil data and weather patterns, here are the most suitable crops:
            </p>
            <div className="space-y-3">
              {cropPredictions.map((crop, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                  <span className="font-medium">{crop.crop}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          crop.suitable ? 'bg-green-500' : 'bg-yellow-500'
                        }`} 
                        style={{ width: `${crop.probability}%` }}
                      ></div>
                    </div>
                    <span className={`text-sm font-medium ${
                      crop.suitable ? 'text-green-500' : 'text-yellow-500'
                    }`}>
                      {crop.probability}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all">
              View Detailed Analysis
            </button>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {cropPredictions.filter(c => c.suitable).length} recommended crops
            </p>
            <div className="flex space-x-1">
              {cropPredictions
                .filter(c => c.suitable)
                .slice(0, 3)
                .map((crop, index) => (
                  <div key={index} className="h-2 w-2 rounded-full bg-green-500"></div>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Market Predictions Card */}
      <div className={`rounded-xl p-6 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold flex items-center">
            <Sun className="w-5 h-5 mr-2 text-yellow-500" />
            Market Trends
          </h2>
          <button 
            onClick={() => toggleCard('market')}
            className={`p-1 rounded-full ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
          >
            {expandedCard === 'market' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
        
        {expandedCard === 'market' ? (
          <div className="space-y-4">
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Price predictions for your crops based on market trends:
            </p>
            <div className="space-y-3">
              {marketPredictions.map((item, index) => (
                <div key={index} className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{item.crop}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{item.timeFrame}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">Current:</span>
                      <span className="ml-2 font-medium">{item.currentPrice}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-500 dark:text-gray-400 text-sm">Predicted:</span>
                      <span className={`ml-2 font-medium ${
                        item.predictedPrice.includes('+') ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {item.predictedPrice}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all">
              View All Market Data
            </button>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {marketPredictions.length} price predictions
            </p>
            <div className="flex items-center">
              <span className="text-green-500 font-medium mr-1">+8%</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">wheat</span>
            </div>
          </div>
        )}
      </div>

      {/* Weather Card */}
      <div className={`rounded-xl p-6 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold flex items-center">
            <Cloud className="w-5 h-5 mr-2 text-blue-500" />
            Weather Forecast
          </h2>
          <button 
            onClick={() => toggleCard('weather')}
            className={`p-1 rounded-full ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
          >
            {expandedCard === 'weather' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
        
        {expandedCard === 'weather' ? (
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 rounded-lg bg-blue-50 dark:bg-blue-900/30">
              <div>
                <div className="text-3xl font-bold">{weatherData.current.temp}</div>
                <div className="text-blue-600 dark:text-blue-300">{weatherData.current.condition}</div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2">
                  <Droplet className="w-4 h-4 text-blue-500" />
                  <span>Humidity: {weatherData.current.humidity}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CloudRain className="w-4 h-4 text-blue-500" />
                  <span>Rain: {weatherData.current.rainfall}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {weatherData.forecast.map((day, index) => (
                <div key={index} className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                  <div className="font-medium">{day.day}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{day.condition}</div>
                  <div className="text-sm">
                    <span className="font-medium">{day.high}</span> / <span>{day.low}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all">
              View Detailed Forecast
            </button>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <div>
              <span className="text-2xl font-bold mr-2">{weatherData.current.temp}</span>
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{weatherData.current.condition}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Droplet className="w-4 h-4 text-blue-500" />
              <span>{weatherData.current.humidity}</span>
            </div>
          </div>
        )}
      </div>

      {/* Soil Health Card */}
      <div className={`rounded-xl p-6 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold flex items-center">
            <Droplet className="w-5 h-5 mr-2 text-amber-500" />
            Soil Health
          </h2>
          <button 
            onClick={() => toggleCard('soil')}
            className={`p-1 rounded-full ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
          >
            {expandedCard === 'soil' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
        
        {expandedCard === 'soil' ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-500 dark:text-gray-400">Moisture</div>
                <div className="font-medium">{soilHealth.moisture}</div>
              </div>
              <div className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-500 dark:text-gray-400">Nitrogen</div>
                <div className="font-medium">{soilHealth.nitrogen}</div>
              </div>
              <div className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-500 dark:text-gray-400">Phosphorus</div>
                <div className="font-medium">{soilHealth.phosphorus}</div>
              </div>
              <div className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-500 dark:text-gray-400">Potassium</div>
                <div className="font-medium">{soilHealth.potassium}</div>
              </div>
            </div>
            <div className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-sm text-gray-500 dark:text-gray-400">pH Level</div>
              <div className="font-medium">{soilHealth.ph}</div>
            </div>
            <button className="w-full mt-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all">
              View Soil Analysis
            </button>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Last updated: {soilHealth.lastUpdated}
            </p>
            <div className="flex items-center">
              <span className="font-medium mr-1">{soilHealth.moisture}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">moisture</span>
            </div>
          </div>
        )}
      </div>

      {/* Irrigation Suggestions Card */}
      <div className={`rounded-xl p-6 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold flex items-center">
            <Droplet className="w-5 h-5 mr-2 text-blue-500" />
            Irrigation Plan
          </h2>
          <button 
            onClick={() => toggleCard('irrigation')}
            className={`p-1 rounded-full ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
          >
            {expandedCard === 'irrigation' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
        
        {expandedCard === 'irrigation' ? (
          <div className="space-y-4">
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              AI-powered irrigation suggestions based on soil and weather data:
            </p>
            <div className="space-y-3">
              {irrigationSuggestions.map((item, index) => (
                <div key={index} className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="font-medium">{item.field}</div>
                  <div className="flex items-center mt-1">
                    <Clock className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{item.suggestion}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all">
              View Irrigation Schedule
            </button>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {irrigationSuggestions.length} suggestions
            </p>
            <div className="flex items-center">
              <span className="text-blue-500 font-medium">Tomorrow</span>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default DashboardHome;
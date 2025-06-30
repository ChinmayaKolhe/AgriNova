import { useState } from 'react';
import { Leaf, Sun, Cloud, Droplet, Thermometer } from 'lucide-react';

const CropRecommendations = ({ darkMode }) => {
  const [selectedSeason, setSelectedSeason] = useState('Rabi');
  
  // Sample data - would come from API in real app
  const seasons = ['Rabi', 'Kharif', 'Zaid'];
  
  const recommendations = {
    Rabi: [
      { name: 'Wheat', suitability: 'High', profitPotential: '₹45,000/acre', icon: <Leaf className="w-5 h-5 text-amber-500" /> },
      { name: 'Mustard', suitability: 'High', profitPotential: '₹38,000/acre', icon: <Sun className="w-5 h-5 text-yellow-500" /> },
      { name: 'Potato', suitability: 'Medium', profitPotential: '₹52,000/acre', icon: <Thermometer className="w-5 h-5 text-green-500" /> },
    ],
    Kharif: [
      { name: 'Rice', suitability: 'High', profitPotential: '₹40,000/acre', icon: <Droplet className="w-5 h-5 text-blue-500" /> },
      { name: 'Maize', suitability: 'High', profitPotential: '₹35,000/acre', icon: <Sun className="w-5 h-5 text-yellow-500" /> },
      { name: 'Cotton', suitability: 'Medium', profitPotential: '₹48,000/acre', icon: <Cloud className="w-5 h-5 text-gray-500" /> },
    ],
    Zaid: [
      { name: 'Watermelon', suitability: 'High', profitPotential: '₹60,000/acre', icon: <Droplet className="w-5 h-5 text-blue-500" /> },
      { name: 'Cucumber', suitability: 'High', profitPotential: '₹55,000/acre', icon: <Thermometer className="w-5 h-5 text-green-500" /> },
      { name: 'Moong Dal', suitability: 'Medium', profitPotential: '₹32,000/acre', icon: <Leaf className="w-5 h-5 text-amber-500" /> },
    ]
  };

  return (
    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Leaf className="w-6 h-6 mr-2 text-green-500" />
        Seasonal Crop Recommendations
      </h2>
      
      {/* Season Selector */}
      <div className="flex space-x-2 mb-6">
        {seasons.map(season => (
          <button
            key={season}
            onClick={() => setSelectedSeason(season)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedSeason === season
                ? darkMode
                  ? 'bg-green-600 text-white'
                  : 'bg-green-500 text-white'
                : darkMode
                  ? 'bg-gray-700 text-gray-300'
                  : 'bg-gray-200 text-gray-700'
            }`}
          >
            {season}
          </button>
        ))}
      </div>
      
      {/* Recommendations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendations[selectedSeason].map((crop, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-lg border ${
              darkMode 
                ? 'border-gray-700 bg-gray-700' 
                : 'border-gray-200 bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-3 mb-3">
              {crop.icon}
              <h3 className="text-lg font-semibold">{crop.name}</h3>
            </div>
            <div className="flex items-center mb-2">
              <span className="mr-2">Suitability:</span>
              <span className={`px-2 py-1 rounded text-xs ${
                crop.suitability === 'High'
                  ? 'bg-green-100 text-green-800'
                  : crop.suitability === 'Medium'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
              }`}>
                {crop.suitability}
              </span>
            </div>
            <p className="mb-3">Profit Potential: {crop.profitPotential}</p>
            <button
              className={`w-full py-2 rounded ${
                darkMode
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-blue-500 hover:bg-blue-600'
              } text-white`}
            >
              View Cultivation Plan
            </button>
          </div>
        ))}
      </div>
      
      {/* Additional Resources */}
      <div className={`mt-8 p-4 rounded-lg ${
        darkMode ? 'bg-gray-700' : 'bg-gray-100'
      }`}>
        <h3 className="text-lg font-semibold mb-2">Why these recommendations?</h3>
        <p className="mb-3">
          Our recommendations are based on your soil health, local weather patterns, 
          and current market trends to maximize your profitability.
        </p>
        <button
          className={`px-4 py-2 rounded ${
            darkMode
              ? 'bg-indigo-600 hover:bg-indigo-700'
              : 'bg-indigo-500 hover:bg-indigo-600'
          } text-white`}
        >
          Learn More About Our Algorithm
        </button>
      </div>
    </div>
  );
};

export default CropRecommendations;
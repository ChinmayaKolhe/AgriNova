import { useState } from 'react';
import { Thermometer, Droplet, Sun, CloudRain, Leaf, BarChart2 } from 'lucide-react';

const CropPredictions = ({ darkMode }) => {
  const [selectedCrop, setSelectedCrop] = useState(null);
  
  // Sample crop data - would come from API in real app
  const crops = [
    { id: 1, name: 'Wheat', yieldPrediction: '8.2 tons/ha', risk: 'Low', priceTrend: '+8%' },
    { id: 2, name: 'Rice', yieldPrediction: '6.5 tons/ha', risk: 'Medium', priceTrend: '-2%' },
    { id: 3, name: 'Mustard', yieldPrediction: '3.1 tons/ha', risk: 'Low', priceTrend: '+5%' },
    { id: 4, name: 'Potato', yieldPrediction: '25 tons/ha', risk: 'High', priceTrend: '+3%' },
  ];

  const [soilData] = useState({
    moisture: 'Optimal',
    ph: 6.8,
    nutrients: {
      nitrogen: 'Medium',
      phosphorus: 'High',
      potassium: 'Medium'
    }
  });

  return (
    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Thermometer className="w-6 h-6 mr-2 text-green-500" />
        Crop Predictions & Analysis
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Crop Selection Panel */}
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <h3 className="text-lg font-semibold mb-4">Select Crop</h3>
          <div className="space-y-2">
            {crops.map(crop => (
              <div 
                key={crop.id}
                onClick={() => setSelectedCrop(crop)}
                className={`p-3 rounded cursor-pointer transition-colors ${
                  selectedCrop?.id === crop.id 
                    ? darkMode ? 'bg-gray-600' : 'bg-green-100' 
                    : darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{crop.name}</span>
                  <span className={`text-sm ${
                    crop.priceTrend.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {crop.priceTrend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prediction Details */}
        <div className="lg:col-span-2 space-y-6">
          {selectedCrop ? (
            <>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <h3 className="text-lg font-semibold mb-3">Yield Prediction for {selectedCrop.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                    <p className="text-sm text-gray-500">Predicted Yield</p>
                    <p className="text-xl font-bold">{selectedCrop.yieldPrediction}</p>
                  </div>
                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                    <p className="text-sm text-gray-500">Risk Level</p>
                    <p className={`text-xl font-bold ${
                      selectedCrop.risk === 'High' ? 'text-red-500' : 
                      selectedCrop.risk === 'Medium' ? 'text-yellow-500' : 'text-green-500'
                    }`}>
                      {selectedCrop.risk}
                    </p>
                  </div>
                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                    <p className="text-sm text-gray-500">Price Trend</p>
                    <p className={`text-xl font-bold ${
                      selectedCrop.priceTrend.startsWith('+') ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {selectedCrop.priceTrend}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <h3 className="text-lg font-semibold mb-3">Soil Compatibility</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Current Soil Conditions</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center">
                        <Droplet className="w-4 h-4 mr-2 text-blue-500" />
                        Moisture: {soilData.moisture}
                      </li>
                      <li>pH: {soilData.ph}</li>
                      <li>Nitrogen: {soilData.nutrients.nitrogen}</li>
                      <li>Phosphorus: {soilData.nutrients.phosphorus}</li>
                      <li>Potassium: {soilData.nutrients.potassium}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Recommended Adjustments</h4>
                    <ul className="space-y-1">
                      <li>Add 50kg/ha of NPK fertilizer</li>
                      <li>Maintain pH between 6.0-7.0</li>
                      <li>Irrigation every 5 days</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className={`p-8 text-center rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <Leaf className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p>Select a crop to view predictions and analysis</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CropPredictions;
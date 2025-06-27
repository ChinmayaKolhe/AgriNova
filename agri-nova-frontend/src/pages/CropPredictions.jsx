import { Thermometer, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const CropPredictions = ({ darkMode }) => {
  const [expanded, setExpanded] = useState(false);
  
  const cropPredictions = [
    { crop: "Wheat", probability: 78, suitable: true, details: "Wheat is highly suitable for your soil type and current season." },
    { crop: "Rice", probability: 65, suitable: true, details: "Rice requires more water but matches your farm's conditions." },
    { crop: "Cotton", probability: 42, suitable: false, details: "Cotton isn't recommended due to soil pH levels." },
    { crop: "Mustard", probability: 71, suitable: true, details: "Mustard is a good rotation crop for your wheat fields." }
  ];

  return (
    <div className="p-6">
      <div className={`rounded-xl p-6 mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className="text-2xl font-bold flex items-center mb-4">
          <Thermometer className="w-6 h-6 mr-2 text-green-500" />
          Crop Suitability Analysis
        </h2>
        
        <div className="space-y-4">
          {cropPredictions.map((crop, index) => (
            <div key={index} className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">{crop.crop}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {crop.suitable ? 'Recommended' : 'Not Recommended'}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mr-3">
                    <div 
                      className={`h-2.5 rounded-full ${crop.suitable ? 'bg-green-500' : 'bg-yellow-500'}`} 
                      style={{ width: `${crop.probability}%` }}
                    ></div>
                  </div>
                  <span className={`font-medium ${crop.suitable ? 'text-green-500' : 'text-yellow-500'}`}>
                    {crop.probability}%
                  </span>
                </div>
              </div>
              
              <div className="mt-3">
                <button 
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  className={`flex items-center text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                >
                  {expanded === index ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-1" />
                      Hide Details
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-1" />
                      Show Details
                    </>
                  )}
                </button>
                
                {expanded === index && (
                  <div className={`mt-2 p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <p>{crop.details}</p>
                    <button className="mt-2 bg-green-500 text-white py-1 px-3 rounded text-sm">
                      View Growth Plan
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className="text-2xl font-bold mb-4">Historical Crop Performance</h2>
        {/* Add charts or tables here */}
      </div>
    </div>
  );
};

export default CropPredictions;
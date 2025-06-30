import { Sun, ArrowUp, ArrowDown, BarChart2 } from 'lucide-react';
import { useState } from 'react';

const MarketTrends = ({ darkMode }) => {
  const [timeRange, setTimeRange] = useState('weekly');
  
  const marketData = {
    weekly: [
      { crop: "Wheat", current: "₹2,150", predicted: "₹2,320", change: "+8%" },
      { crop: "Rice", current: "₹1,890", predicted: "₹1,950", change: "+3%" }
    ],
    monthly: [
      { crop: "Wheat", current: "₹2,100", predicted: "₹2,400", change: "+14%" },
      { crop: "Rice", current: "₹1,850", predicted: "₹2,000", change: "+8%" }
    ]
  };

  return (
    <div className="p-6">
      <div className={`rounded-xl p-6 mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center">
            <Sun className="w-6 h-6 mr-2 text-yellow-500" />
            Market Trends
          </h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => setTimeRange('weekly')}
              className={`px-3 py-1 rounded-lg ${timeRange === 'weekly' ? 'bg-yellow-500 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
            >
              Weekly
            </button>
            <button 
              onClick={() => setTimeRange('monthly')}
              className={`px-3 py-1 rounded-lg ${timeRange === 'monthly' ? 'bg-yellow-500 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
            >
              Monthly
            </button>
          </div>
        </div>
        
        {/* Market data table */}
      </div>
      
      <div className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <BarChart2 className="mr-2" /> Market Analysis
        </h2>
        {/* Charts would go here */}
      </div>
    </div>
  );
};

export default MarketTrends;
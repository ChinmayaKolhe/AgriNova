import { Sun, ArrowUp, ArrowDown } from 'lucide-react';

const MarketTrends = ({ darkMode }) => {
  const marketData = [
    { crop: "Wheat", current: "₹2,150", predicted: "₹2,320", change: "+8%", timeFrame: "Next 2 weeks" },
    { crop: "Rice", current: "₹1,890", predicted: "₹1,950", change: "+3%", timeFrame: "Next week" },
    { crop: "Mustard", current: "₹5,400", predicted: "₹5,600", change: "+4%", timeFrame: "Next 10 days" },
    { crop: "Potato", current: "₹1,200", predicted: "₹1,100", change: "-8%", timeFrame: "Next week" }
  ];

  return (
    <div className="p-6">
      <div className={`rounded-xl p-6 mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className="text-2xl font-bold flex items-center mb-6">
          <Sun className="w-6 h-6 mr-2 text-yellow-500" />
          Commodity Price Trends
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <th className="text-left pb-3">Crop</th>
                <th className="text-left pb-3">Current Price</th>
                <th className="text-left pb-3">Predicted Price</th>
                <th className="text-left pb-3">Change</th>
                <th className="text-left pb-3">Time Frame</th>
              </tr>
            </thead>
            <tbody>
              {marketData.map((item, index) => (
                <tr key={index} className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <td className="py-3 font-medium">{item.crop}</td>
                  <td className="py-3">{item.current}/quintal</td>
                  <td className="py-3">{item.predicted}/quintal</td>
                  <td className={`py-3 flex items-center ${
                    item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {item.change.startsWith('+') ? (
                      <ArrowUp className="w-4 h-4 mr-1" />
                    ) : (
                      <ArrowDown className="w-4 h-4 mr-1" />
                    )}
                    {item.change}
                  </td>
                  <td className="py-3">{item.timeFrame}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className="text-2xl font-bold mb-4">Market Analysis</h2>
        {/* Add charts or additional market info here */}
      </div>
    </div>
  );
};

export default MarketTrends;
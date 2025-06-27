import { Droplet, Clock, Calendar } from 'lucide-react';

const IrrigationPage = ({ darkMode }) => {
  const irrigationSchedule = [
    { field: "Field A (Wheat)", lastIrrigated: "2 days ago", nextIrrigation: "Tomorrow", status: "Pending" },
    { field: "Field B (Rice)", lastIrrigated: "1 day ago", nextIrrigation: "3 days", status: "Scheduled" },
    { field: "Field C (Mustard)", lastIrrigated: "4 days ago", nextIrrigation: "Today", status: "Urgent" }
  ];

  const waterUsage = {
    current: "12,000 liters",
    monthly: "85,000 liters",
    prediction: "90,000 liters"
  };

  return (
    <div className="p-6">
      <div className={`rounded-xl p-6 mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className="text-2xl font-bold flex items-center mb-6">
          <Droplet className="w-6 h-6 mr-2 text-blue-500" />
          Irrigation Schedule
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {irrigationSchedule.map((item, index) => (
            <div key={index} className={`p-4 rounded-lg border ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            } ${
              item.status === 'Urgent' ? 'border-l-4 border-red-500' : 
              item.status === 'Pending' ? 'border-l-4 border-yellow-500' : 
              'border-l-4 border-green-500'
            }`}>
              <h3 className="font-bold text-lg mb-2">{item.field}</h3>
              <div className="flex items-center mb-1">
                <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                <span>Last: {item.lastIrrigated}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-gray-500" />
                <span>Next: {item.nextIrrigation}</span>
              </div>
              <div className="mt-3">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  item.status === 'Urgent' ? 'bg-red-100 text-red-800' :
                  item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors">
          View Complete Schedule
        </button>
      </div>
      
      <div className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className="text-2xl font-bold mb-4">Water Usage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
            <h3 className="font-bold mb-1">Current Usage</h3>
            <p className="text-2xl">{waterUsage.current}</p>
          </div>
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/30' : 'bg-green-50'}`}>
            <h3 className="font-bold mb-1">Monthly Usage</h3>
            <p className="text-2xl">{waterUsage.monthly}</p>
          </div>
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/30' : 'bg-purple-50'}`}>
            <h3 className="font-bold mb-1">Next Month Prediction</h3>
            <p className="text-2xl">{waterUsage.prediction}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IrrigationPage;
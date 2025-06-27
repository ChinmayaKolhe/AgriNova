import { Cloud, Droplet, Thermometer, Sun, CloudRain } from 'lucide-react';

const WeatherPage = ({ darkMode }) => {
  const weatherData = {
    current: {
      temp: "28°C",
      condition: "Partly Cloudy",
      humidity: "65%",
      rainfall: "10% chance",
      wind: "12 km/h",
      pressure: "1012 mb"
    },
    forecast: [
      { day: "Today", high: "30°C", low: "22°C", condition: "Partly Cloudy", rain: "10%" },
      { day: "Tomorrow", high: "31°C", low: "23°C", condition: "Sunny", rain: "0%" },
      { day: "Day 3", high: "29°C", low: "24°C", condition: "Light Rain", rain: "60%" },
      { day: "Day 4", high: "27°C", low: "23°C", condition: "Thunderstorms", rain: "80%" },
      { day: "Day 5", high: "28°C", low: "22°C", condition: "Cloudy", rain: "30%" }
    ]
  };

  return (
    <div className="p-6">
      <div className={`rounded-xl p-6 mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className="text-2xl font-bold flex items-center mb-6">
          <Cloud className="w-6 h-6 mr-2 text-blue-500" />
          Current Weather
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
            <div className="flex justify-between">
              <div>
                <div className="text-4xl font-bold">{weatherData.current.temp}</div>
                <div className="text-xl">{weatherData.current.condition}</div>
              </div>
              <div className="text-right space-y-2">
                <div className="flex items-center justify-end">
                  <Droplet className="w-5 h-5 mr-2 text-blue-500" />
                  <span>Humidity: {weatherData.current.humidity}</span>
                </div>
                <div className="flex items-center justify-end">
                  <CloudRain className="w-5 h-5 mr-2 text-blue-500" />
                  <span>Rain: {weatherData.current.rainfall}</span>
                </div>
                <div className="flex items-center justify-end">
                  <Thermometer className="w-5 h-5 mr-2 text-blue-500" />
                  <span>Pressure: {weatherData.current.pressure}</span>
                </div>
                <div className="flex items-center justify-end">
                  <Sun className="w-5 h-5 mr-2 text-blue-500" />
                  <span>Wind: {weatherData.current.wind}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-3">5-Day Forecast</h3>
            <div className="space-y-3">
              {weatherData.forecast.map((day, index) => (
                <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <span className="font-medium">{day.day}</span>
                  <span>{day.condition}</span>
                  <span>{day.high} / {day.low}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${parseInt(day.rain) > 50 ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                    {day.rain}% rain
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className="text-2xl font-bold mb-4">Weather Alerts</h2>
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-yellow-900/30' : 'bg-yellow-50'} border-l-4 border-yellow-500`}>
          <h3 className="font-bold text-lg mb-1">Heavy Rain Warning</h3>
          <p>Expect heavy rainfall in your area in the next 48 hours. Consider delaying irrigation.</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
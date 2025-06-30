import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Calendar as CalendarIcon, Droplet, Sun, CloudRain } from 'lucide-react';

const PlantingCalendar = ({ darkMode }) => {
  const [date, setDate] = useState(new Date());
  
  // Sample planting events - would come from API in real app
  const plantingEvents = [
    {
      id: 1,
      crop: 'Wheat',
      startDate: new Date(2023, 10, 15), // Nov 15
      endDate: new Date(2024, 3, 15),    // Apr 15
      color: 'bg-green-500'
    },
    {
      id: 2,
      crop: 'Rice',
      startDate: new Date(2023, 5, 1),   // Jun 1
      endDate: new Date(2023, 9, 30),    // Oct 30
      color: 'bg-blue-500'
    },
    {
      id: 3,
      crop: 'Mustard',
      startDate: new Date(2023, 10, 1),  // Nov 1
      endDate: new Date(2024, 2, 15),    // Mar 15
      color: 'bg-yellow-500'
    }
  ];

  // Custom tile content for calendar
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const eventsOnDay = plantingEvents.filter(event => 
        date >= event.startDate && date <= event.endDate
      );
      
      return (
        <div className="absolute bottom-1 left-0 right-0 flex justify-center">
          {eventsOnDay.map(event => (
            <div 
              key={event.id} 
              className={`w-2 h-2 rounded-full ${event.color} mx-0.5`}
              title={event.crop}
            />
          ))}
        </div>
      );
    }
  };

  // Get current season's events
  const getCurrentSeasonEvents = () => {
    const month = date.getMonth();
    let season;
    
    if (month >= 10 || month < 2) {
      season = 'Rabi';
    } else if (month >= 6 && month < 10) {
      season = 'Kharif';
    } else {
      season = 'Zaid';
    }
    
    return plantingEvents.filter(event => {
      const eventMonth = event.startDate.getMonth();
      return (
        (season === 'Rabi' && (eventMonth >= 10 || eventMonth < 2)) ||
        (season === 'Kharif' && eventMonth >= 6 && eventMonth < 10) ||
        (season === 'Zaid' && eventMonth >= 2 && eventMonth < 6)
      );
    });
  };

  return (
    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <CalendarIcon className="w-6 h-6 mr-2 text-green-500" />
        Planting Calendar
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Component */}
        <div className="lg:col-span-2">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <Calendar
              onChange={setDate}
              value={date}
              tileContent={tileContent}
              className={`border-0 ${darkMode ? 'bg-gray-700 text-white' : ''}`}
            />
          </div>
        </div>
        
        {/* Current Season's Planting Schedule */}
        <div>
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <h3 className="text-lg font-semibold mb-4">Current Season's Schedule</h3>
            <div className="space-y-3">
              {getCurrentSeasonEvents().length > 0 ? (
                getCurrentSeasonEvents().map(event => (
                  <div 
                    key={event.id} 
                    className={`p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}
                  >
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full ${event.color} mr-2`}></div>
                      <span className="font-medium">{event.crop}</span>
                    </div>
                    <div className="text-sm mt-1">
                      {event.startDate.toLocaleDateString()} - {event.endDate.toLocaleDateString()}
                    </div>
                  </div>
                ))
              ) : (
                <p>No planting activities scheduled for current season</p>
              )}
            </div>
          </div>
          
          {/* Add Custom Reminder */}
          <div className={`mt-4 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <h3 className="text-lg font-semibold mb-2">Add Custom Reminder</h3>
            <input
              type="text"
              placeholder="Activity name"
              className={`w-full p-2 mb-2 rounded border ${
                darkMode ? 'bg-gray-600 border-gray-500' : 'bg-white border-gray-300'
              }`}
            />
            <div className="grid grid-cols-2 gap-2 mb-2">
              <input
                type="date"
                className={`p-2 rounded border ${
                  darkMode ? 'bg-gray-600 border-gray-500' : 'bg-white border-gray-300'
                }`}
              />
              <input
                type="date"
                className={`p-2 rounded border ${
                  darkMode ? 'bg-gray-600 border-gray-500' : 'bg-white border-gray-300'
                }`}
              />
            </div>
            <button
              className={`w-full py-2 rounded ${
                darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'
              } text-white`}
            >
              Set Reminder
            </button>
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
        <h3 className="text-lg font-semibold mb-2">Calendar Legend</h3>
        <div className="flex flex-wrap gap-4">
          {plantingEvents.map(event => (
            <div key={event.id} className="flex items-center">
              <div className={`w-4 h-4 rounded-full ${event.color} mr-2`}></div>
              <span>{event.crop}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantingCalendar;
import { User, MapPin, Crop, Phone, Calendar, Edit } from 'lucide-react';
import { useState } from 'react';

const ProfilePage = ({ darkMode }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Rajesh Kumar",
    location: "Punjab, India",
    farmSize: "5 acres",
    crops: ["Wheat", "Rice", "Mustard"],
    phone: "+91 9876543210",
    joinedDate: "15 Jan 2020"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6">
      <div className={`rounded-xl p-6 mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center">
            <User className="w-6 h-6 mr-2 text-green-500" />
            My Profile
          </h2>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center text-green-600 hover:text-green-800"
          >
            <Edit className="w-4 h-4 mr-1" />
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4">
            <div className="h-24 w-24 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white text-3xl">
              {profile.name.charAt(0)}
            </div>
            <div className="flex-1">
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleInputChange}
                  className={`w-full p-2 mb-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                />
              ) : (
                <h3 className="text-xl font-bold">{profile.name}</h3>
              )}
              
              <div className="flex items-center mt-1">
                <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                {isEditing ? (
                  <input
                    type="text"
                    name="location"
                    value={profile.location}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  />
                ) : (
                  <span>{profile.location}</span>
                )}
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <Crop className="w-5 h-5 mr-3 text-gray-500" />
              <div>
                <div className="font-bold">Farm Size</div>
                {isEditing ? (
                  <input
                    type="text"
                    name="farmSize"
                    value={profile.farmSize}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  />
                ) : (
                  <div>{profile.farmSize}</div>
                )}
              </div>
            </div>
            
            <div className="flex items-center">
              <Crop className="w-5 h-5 mr-3 text-gray-500" />
              <div>
                <div className="font-bold">Main Crops</div>
                {isEditing ? (
                  <input
                    type="text"
                    name="crops"
                    value={profile.crops.join(', ')}
                    onChange={(e) => setProfile({...profile, crops: e.target.value.split(', ')})}
                    className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  />
                ) : (
                  <div>{profile.crops.join(', ')}</div>
                )}
              </div>
            </div>
            
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-gray-500" />
              <div>
                <div className="font-bold">Contact</div>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  />
                ) : (
                  <div>{profile.phone}</div>
                )}
              </div>
            </div>
            
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-3 text-gray-500" />
              <div>
                <div className="font-bold">Member Since</div>
                <div>{profile.joinedDate}</div>
              </div>
            </div>
          </div>
        </div>
        
        {isEditing && (
          <div className="mt-6 flex justify-end space-x-3">
            <button 
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button 
              onClick={() => {
                // Save logic would go here
                setIsEditing(false);
              }}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
      
      <div className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold mb-2">Change Password</h3>
            {/* Password change form */}
          </div>
          <div>
            <h3 className="font-bold mb-2">Notification Preferences</h3>
            {/* Notification settings */}
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default ProfilePage;
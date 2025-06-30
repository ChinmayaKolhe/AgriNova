import { useState } from 'react';
import { MessageSquare, Search, Send, ChevronDown } from 'lucide-react';
import ChatWindow from '../../components/ChatWindow';

const Messages = ({ darkMode }) => {
  const [activeChat, setActiveChat] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample conversations
  const conversations = [
    {
      id: 1,
      farmer: 'Rajesh Farms',
      product: 'Organic Wheat',
      lastMessage: 'The shipment will arrive tomorrow',
      unread: 2,
      timestamp: '10:30 AM'
    },
    {
      id: 2,
      farmer: 'Singh Agro',
      product: 'Basmati Rice',
      lastMessage: 'Your order has been processed',
      unread: 0,
      timestamp: 'Yesterday'
    },
    {
      id: 3,
      farmer: 'Gupta Produce',
      product: 'Fresh Tomatoes',
      lastMessage: 'Can we schedule delivery for Friday?',
      unread: 1,
      timestamp: '2 days ago'
    }
  ];

  const filteredConversations = conversations.filter(conv => 
    conv.farmer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-full">
      {/* Conversations List */}
      <div className={`w-full md:w-80 border-r ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
        <div className="p-4 border-b dark:border-gray-700">
          <h1 className="text-xl font-bold mb-4 flex items-center">
            <MessageSquare className="mr-2" /> Messages
          </h1>
          
          <div className="relative">
            <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search farmers or products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
              }`}
            />
          </div>
        </div>

        <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 180px)' }}>
          {filteredConversations.map(conv => (
            <div
              key={conv.id}
              onClick={() => setActiveChat(conv.id)}
              className={`p-4 border-b cursor-pointer transition-colors ${
                activeChat === conv.id
                  ? darkMode ? 'bg-gray-700' : 'bg-blue-50'
                  : darkMode ? 'hover:bg-gray-700 border-gray-700' : 'hover:bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex justify-between items-start">
                <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {conv.farmer}
                </h3>
                <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {conv.timestamp}
                </span>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {conv.product}
              </p>
              <div className="flex justify-between items-center mt-2">
                <p className={`text-sm truncate ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {conv.lastMessage}
                </p>
                {conv.unread > 0 && (
                  <span className="bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {conv.unread}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 hidden md:block">
        {activeChat ? (
          <ChatWindow 
            conversation={conversations.find(c => c.id === activeChat)} 
            darkMode={darkMode}
          />
        ) : (
          <div className={`h-full flex items-center justify-center ${
            darkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-50 text-gray-500'
          }`}>
            <div className="text-center p-6">
              <MessageSquare className="w-12 h-12 mx-auto mb-4" />
              <p>Select a conversation to start chatting</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
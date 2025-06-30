import { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Mic, ChevronLeft } from 'lucide-react';

const ChatWindow = ({ conversation, darkMode }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I have a question about your organic wheat.",
      sender: 'buyer',
      timestamp: new Date(Date.now() - 3600000)
    },
    {
      id: 2,
      text: "Hi there! What would you like to know?",
      sender: 'farmer',
      timestamp: new Date(Date.now() - 1800000)
    },
    {
      id: 3,
      text: "Is this the current season's harvest?",
      sender: 'buyer',
      timestamp: new Date(Date.now() - 1200000)
    },
    {
      id: 4,
      text: "Yes, harvested just last month. It's fresh and stored properly.",
      sender: 'farmer',
      timestamp: new Date(Date.now() - 600000)
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'buyer',
      timestamp: new Date()
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={`h-full flex flex-col ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Chat Header */}
      <div className={`p-4 border-b flex items-center ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'}`}>
        <button className="md:hidden mr-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div>
          <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {conversation.farmer}
          </h3>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {conversation.product}
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.sender === 'buyer' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-xs md:max-w-md rounded-lg p-3 ${
                message.sender === 'buyer'
                  ? darkMode 
                    ? 'bg-blue-700 text-white' 
                    : 'bg-blue-500 text-white'
                  : darkMode 
                    ? 'bg-gray-700 text-white' 
                    : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="whitespace-pre-wrap">{message.text}</p>
              <p className={`text-xs mt-1 text-right ${
                message.sender === 'buyer'
                  ? darkMode ? 'text-blue-200' : 'text-blue-100'
                  : darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className={`p-4 border-t ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
        <div className="flex items-center">
          <button className={`p-2 rounded-full mr-2 ${
            darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
          }`}>
            <Paperclip className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className={`flex-1 p-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
            }`}
          />
          <button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className={`ml-2 p-2 rounded-full ${
              newMessage.trim()
                ? darkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
                : darkMode 
                  ? 'bg-gray-700 text-gray-500' 
                  : 'bg-gray-200 text-gray-400'
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
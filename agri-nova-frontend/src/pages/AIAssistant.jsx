import { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, Send, User, Bot, Loader2, 
  ArrowUp, Mic, MicOff, X, Plus 
} from 'lucide-react';

const AIAssistant = ({ darkMode }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AgriNova AI Assistant. How can I help you with your farming needs today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [showHelpTopics, setShowHelpTopics] = useState(false);
  const messagesEndRef = useRef(null);

  // Sample farming help topics
  const helpTopics = [
    "Crop recommendations for my soil",
    "Current market prices for wheat",
    "How to treat common plant diseases",
    "Irrigation scheduling advice",
    "Weather forecast for my region",
    "Best practices for organic farming"
  ];

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        "Based on your soil report, I recommend planting wheat and mustard this season. Both crops show high suitability (78% and 85% respectively).",
        "Current market prices in your region: Wheat - ₹2,150/quintal, Rice - ₹1,890/quintal, Mustard - ₹5,400/quintal.",
        "For the yellowing leaves you're seeing, it might be nitrogen deficiency. Try applying urea fertilizer at 50kg per acre.",
        "Your irrigation schedule should be every 5 days given the current soil moisture and weather conditions.",
        "The weather forecast for Punjab shows partly cloudy skies with a 20% chance of rain over the next 3 days.",
        "For organic farming, consider crop rotation with legumes to naturally enrich your soil with nitrogen."
      ];
      
      const botMessage = {
        id: messages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // In a real app, you would integrate with a speech recognition API here
  };

  const handleQuickTopicSelect = (topic) => {
    setInputMessage(topic);
    setShowHelpTopics(false);
  };

  return (
    <div className={`flex flex-col h-full ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`p-4 border-b ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
        <h1 className="text-xl font-bold flex items-center">
          <MessageSquare className="w-5 h-5 mr-2 text-green-500" />
          AI Farming Assistant
        </h1>
      </div>
      
      {/* Chat Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg p-3 ${
                message.sender === 'user'
                  ? darkMode 
                    ? 'bg-green-700 text-white' 
                    : 'bg-green-500 text-white'
                  : darkMode 
                    ? 'bg-gray-700 text-white' 
                    : 'bg-white text-gray-800 border border-gray-200'
              }`}
            >
              <div className="flex items-center mb-1">
                {message.sender === 'user' ? (
                  <User className="w-4 h-4 mr-2" />
                ) : (
                  <Bot className="w-4 h-4 mr-2 text-green-500" />
                )}
                <span className="text-xs opacity-70">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="whitespace-pre-wrap">{message.text}</p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className={`rounded-lg p-3 ${
              darkMode ? 'bg-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <Loader2 className="w-5 h-5 animate-spin text-green-500" />
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Help Topics Panel */}
      {showHelpTopics && (
        <div className={`p-4 border-t ${
          darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
        }`}>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium">Common Farming Questions</h3>
            <button 
              onClick={() => setShowHelpTopics(false)}
              className={`p-1 rounded-full ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {helpTopics.map((topic, index) => (
              <button
                key={index}
                onClick={() => handleQuickTopicSelect(topic)}
                className={`text-xs p-2 rounded text-left ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Input Area */}
      <div className={`p-4 border-t ${
        darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
      }`}>
        <div className="flex items-center">
          <button 
            onClick={() => setShowHelpTopics(!showHelpTopics)}
            className={`p-2 rounded-full mr-2 ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
          >
            <Plus className="w-5 h-5" />
          </button>
          
          <div className="flex-1 relative">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about farming..."
              className={`w-full p-3 pr-12 rounded-lg resize-none ${
                darkMode 
                  ? 'bg-gray-700 text-white placeholder-gray-400' 
                  : 'bg-gray-100 text-gray-800 placeholder-gray-500'
              }`}
              rows="1"
              style={{ minHeight: '44px', maxHeight: '120px' }}
            />
            
            <button
              onClick={toggleRecording}
              className={`absolute right-12 top-1/2 transform -translate-y-1/2 p-1 rounded-full ${
                isRecording 
                  ? 'text-red-500' 
                  : darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}
            >
              {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>
          </div>
          
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            className={`ml-2 p-2 rounded-full ${
              inputMessage.trim()
                ? darkMode 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-green-500 hover:bg-green-600 text-white'
                : darkMode 
                  ? 'bg-gray-700 text-gray-500' 
                  : 'bg-gray-200 text-gray-400'
            }`}
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </button>
        </div>
        
        <div className={`text-xs mt-2 text-center ${
          darkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          Press Enter to send, Shift+Enter for new line
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
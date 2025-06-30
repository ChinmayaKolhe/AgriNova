import { MessageSquare } from 'lucide-react';

const AIAssistant = ({ darkMode }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <MessageSquare className="mr-2" /> AI Assistant
      </h1>
      {/* Chat interface would go here */}
    </div>
  );
};

export default AIAssistant;
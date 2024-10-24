import React, { useState } from 'react';
import { Send, Moon, Sun, Youtube } from 'lucide-react';
import { ChatMessage } from './components/ChatMessage';
import { YoutubeEmbed } from './components/YoutubeEmbed';
import { EmojiPicker } from './components/EmojiPicker';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [input, setInput] = useState('');
  const [videoId, setVideoId] = useState('dQw4w9WgXcQ');
  const [videoOpacity, setVideoOpacity] = useState(1);
  const [showVideo, setShowVideo] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { text: input, isUser: true }]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "This is a simulated response. Replace with actual Bedrock AWS integration.", 
        isUser: false 
      }]);
    }, 1000);
  };

  const handleEmojiSelect = (emoji: string) => {
    setInput(prev => prev + emoji);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto max-w-4xl p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold dark:text-white">AI Chat Interface</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setShowVideo(!showVideo)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <Youtube className="w-5 h-5 dark:text-white" />
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-white" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {showVideo && (
          <div className="mb-6 space-y-4">
            <YoutubeEmbed videoId={videoId} opacity={videoOpacity} />
            <div className="flex gap-4 items-center">
              <input
                type="text"
                value={videoId}
                onChange={(e) => setVideoId(e.target.value)}
                placeholder="YouTube Video ID"
                className="flex-1 p-2 rounded-lg border dark:bg-gray-800 dark:text-white dark:border-gray-600"
              />
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={videoOpacity}
                onChange={(e) => setVideoOpacity(parseFloat(e.target.value))}
                className="w-32"
              />
            </div>
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="h-[500px] overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <ChatMessage key={idx} message={msg.text} isUser={msg.isUser} />
            ))}
          </div>

          <div className="border-t dark:border-gray-700 p-4">
            <div className="flex gap-2 items-center">
              <EmojiPicker onEmojiSelect={handleEmojiSelect} />
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 p-2 rounded-lg border dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
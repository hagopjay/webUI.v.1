import React from 'react';
import { Smile } from 'lucide-react';

const EMOJIS = ['😊', '👍', '❤️', '🎉', '🤔', '😂', '🙌', '✨'];

interface EmojiPickerProps {
  onEmojiSelect: (emoji: string) => void;
}

export function EmojiPicker({ onEmojiSelect }: EmojiPickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
      >
        <Smile className="w-5 h-5" />
      </button>
      
      {isOpen && (
        <div className="absolute bottom-full mb-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 grid grid-cols-4 gap-2">
          {EMOJIS.map((emoji) => (
            <button
              key={emoji}
              onClick={() => {
                onEmojiSelect(emoji);
                setIsOpen(false);
              }}
              className="text-xl hover:bg-gray-100 dark:hover:bg-gray-700 p-1 rounded"
            >
              {emoji}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
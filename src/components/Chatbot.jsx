import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const preStoredReplies = {
    "hello": "Hi there! How can I help you with information about the Nikah ceremony?",
    "hi": "Hi there! How can I help you with information about the Nikah ceremony?",
    "when is the nikkah": "The Nikkah will be on 10th January 2025.",
    "when is nikkah": "The Nikkah will be on 10th January 2025.",
    "what is nikkah": "Nikah is a religious ceremony and contract that legally marries a Muslim couple under Islamic law",
    "where is the nikkah": "The Nikkah will be held at DreamArena,  Dosti, Behind Stella Petrol Pump, Stella Rd, near Opal Solitaire Bld, Vasai West, Mumbai, Maharashtra 401202",
    "where is nikkah": "The Nikkah will be held at DreamArena,  Dosti, Behind Stella Petrol Pump, Stella Rd, near Opal Solitaire Bld, Vasai West, Mumbai, Maharashtra 401202",
    "location of nikkah": "The Nikkah will be held at DreamArena,  Dosti, Behind Stella Petrol Pump, Stella Rd, near Opal Solitaire Bld, Vasai West, Mumbai, Maharashtra 401202",
    "location nikkah": "The Nikkah will be held at DreamArena,  Dosti, Behind Stella Petrol Pump, Stella Rd, near Opal Solitaire Bld, Vasai West, Mumbai, Maharashtra 401202",
    "location": "The Nikkah will be held at DreamArena,  Dosti, Behind Stella Petrol Pump, Stella Rd, near Opal Solitaire Bld, Vasai West, Mumbai, Maharashtra 401202",
    "what should i wear": "For the Nikkah ceremony, guests typically wear formal attire. Men often wear suits or traditional outfits, while women wear elegant dresses or traditional clothing like sarees or salwar kameez.",
    "time of nikkah": "The Nikkah ceremony is scheduled at 11:00 AM - 4:00 PM.",
    "time": "The Nikkah ceremony is scheduled at 11:00 AM - 4:00 PM.",
    "nikkah timing": "The Nikkah ceremony is scheduled at 11:00 AM - 4:00 PM.",
    "nikkah schedule": "The Nikkah ceremony is scheduled at 11:00 AM - 4:00 PM.",
    "nikkah date": "The Nikkah ceremony is scheduled at 11:00 AM - 4:00 PM.",
    "default": "I'm sorry, I don't have information about that. Please contact Raffat Regarding Any Other Queries."
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { text: input, user: true };
    const botMessage = { text: getBotReply(input), user: false };

    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  const getBotReply = (userInput) => {
    const lowercaseInput = userInput.toLowerCase();
    for (const [key, value] of Object.entries(preStoredReplies)) {
      if (lowercaseInput.includes(key.toLowerCase())) {
        return value;
      }
    }
    return preStoredReplies.default;
  };

  return (
    <div className="chatbot bg-white rounded-lg shadow-md p-4 max-w-md w-full">
      <div className="messages-container h-64 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user ? 'text-right' : 'text-left'} mb-2`}>
            <span className={`inline-block p-2 rounded-lg ${message.user ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about the Nikkah..."
          className="flex-grow border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded-r-lg hover:bg-yellow-600 transition-colors duration-300 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
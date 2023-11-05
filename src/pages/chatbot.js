import React, { useState } from 'react';
import { ReactComponent as UserIcon } from '../assets/icons/user-icon.svg'; // Assume you have an SVG icon for the user
import { ReactComponent as BotIcon } from '../assets/icons/bot-icon.svg'; // Assume you have an SVG icon for the bot

const Chatbot = () => {
    const [messages, setMessages] = useState([{ text: "Hello! How can I assist you today?", sender: 'bot' }]);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = () => {
        if (input.trim()) {
            // Here we're just updating the local state, but in the future,
            // this is where we would send the message to the backend.
            setMessages([...messages, { text: input, sender: 'user' }]);
            // Simulate receiving a response from the bot
            setTimeout(() => {
                // TODO: Replace this with actual backend response
                const botResponse = { text: "I'm a bot and I'm here to help!", sender: 'bot' };
                setMessages(messages => [...messages, botResponse]);
            }, 1000); // Simulate network delay
            setInput('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const Message = ({ text, sender }) => (
        <div className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className="flex items-center">
                {sender === 'bot' && <BotIcon className=" h-6 w-6 mr-2" />}
                <div className={`p-2 rounded-md ${sender === 'user' ? 'bg-blue-500' : 'bg-gray-700'}`}>
                    {text}
                </div>
                {sender === 'user' && <UserIcon className=" ush-6 w-6 ml-2" />}
            </div>
        </div>
    );

    return (
        <div className="flex" style={{ height: '90vh' }}>
            <div className="w-3/5 bg-gray-200">
                {/* ...iframe content */}
            </div>
            <div className="w-2/5 flex flex-col bg-gray-800 text-white">
                <div className="flex-grow overflow-auto p-4 space-y-2">
                    {messages.map((message, index) => (
                        <Message key={index} text={message.text} sender={message.sender} />
                    ))}
                </div>
                <div className="p-4 flex">
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                        className="flex-grow p-2 bg-gray-700 rounded-l-md focus:outline-none"
                        placeholder="Type your message here..."
                    />
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 hover:bg-blue-600 p-2 rounded-r-md"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;

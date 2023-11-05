import React, { useState } from 'react';
import { ReactComponent as UserIcon } from '../assets/icons/user-icon.svg';
import { ReactComponent as BotIcon } from '../assets/icons/bot-icon.svg';
import { ReactComponent as CollapseIcon } from "../assets/icons/collapse.svg";

const Chatbot = () => {
    const [messages, setMessages] = useState([{ text: "Hello! How can I assist you today?", sender: 'bot' }]);
    const [input, setInput] = useState('');
    const [isChatVisible, setIsChatVisible] = useState(true);

    const toggleChatVisibility = () => setIsChatVisible(!isChatVisible);

    const handleInputChange = (e) => setInput(e.target.value);

    const handleSubmit = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: 'user' }]);
            setTimeout(() => {
                const botResponse = { text: "I'm a bot and I'm here to help!", sender: 'bot' };
                setMessages(messages => [...messages, botResponse]);
            }, 1000);
            setInput('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSubmit();
    };

    const Message = ({ text, sender }) => (
        <div className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className="flex items-center">
                {sender === 'bot' && <BotIcon className="h-6 w-6 mr-2" />}
                <div className={`p-2 rounded-md ${sender === 'user' ? 'bg-blue-500' : 'bg-gray-700'}`}>{text}</div>
                {sender === 'user' && <UserIcon className="h-6 w-6 ml-2" />}
            </div>
        </div>
    );

    return (
        <div className="flex h-screen relative">
            <div className={`flex-grow ${isChatVisible ? 'lg:w-3/5' : 'w-full'} p-4 bg-gray-200`}>
                <h1 className="font-medium text-2xl text-blue-900 ml-32 text-start">Pie Graph of Approval or Rejection By Reason:</h1>
                <iframe
                    src="/sunburst.html"
                    title="Sunburst Chart"
                    style={{
                        transform: 'scale(0.85)',
                        transformOrigin: 'center',
                        width: '100%',
                        height: '120%',
                        border: 'none',
                        paddingTop: '0',
                        marginTop: '0',
                    }} />
            </div>

            {isChatVisible && (
                <div className="w-2/5 h-full flex flex-col bg-gray-800 text-white">
                    <div className="flex-grow overflow-auto p-4 space-y-2">
                        {messages.map((message, index) => <Message key={index} {...message} />)}
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
            )}

            <button onClick={toggleChatVisibility} className="absolute top-4 right-4 z-10 p-2 bg-gray-200 rounded-full focus:outline-none">
                <CollapseIcon className="w-6 h-6" />
            </button>
        </div>
    );
};

export default Chatbot;

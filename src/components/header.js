import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2_white_transparent.png';

export default function Header() {
    return (
        <nav className="bg-blue-900 p-4">
            <div className="flex items-center justify-between">
                <div className="flex-shrink-0">
                    <img src={logo} alt="Logo" width={50} />
                </div>
                <div className="flex">
                    <Link to="/" className="text-white text-xl hover:text-gray-300 py-1 mr-6">Home</Link>
                    <Link to="/questions" className="text-white text-xl hover:text-gray-300 py-1 mr-6">Questions</Link>
                    <Link to="/about" className="text-white text-xl hover:text-gray-300 py-1 mr-6">About</Link>
                    <Link to="/chatbot" className="text-white text-xl hover:text-gray-300 py-1 mr-6">ChatBot</Link>
                    <Link to="/login" className="rounded-lg px-6 py-1 text-black bg-white text-xl mr-6 hover:text-gray-800">Log In</Link>
                </div>
            </div>
        </nav>
    );
}

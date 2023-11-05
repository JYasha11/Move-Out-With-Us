import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2_white_transparent.png';

export default function Header() {
    return (
        <nav className="bg-blue-900 p-4 flex justify-between items-center">
            <div className="flex items-center">
                <Link to="/" className="flex-shrink-0">
                    <img src={logo} alt="Logo" width={50} className="mr-8" />
                </Link>
                <div className="flex">
                    <Link to="/" className="text-white text-lg hover:text-gray-300 py-2 px-3 transition-colors duration-200 ease-in-out">Home</Link>
                    <Link to="/questions" className="text-white text-lg hover:text-gray-300 py-2 px-3 transition-colors duration-200 ease-in-out">Questions</Link>
                    <Link to="/about" className="text-white text-lg hover:text-gray-300 py-2 px-3 transition-colors duration-200 ease-in-out">About</Link>
                    <Link to="/chatbot" className="text-white text-lg hover:text-gray-300 py-2 px-3 transition-colors duration-200 ease-in-out">ChatBot</Link>
                </div>
            </div>
            <Link to="/log-in" className="text-blue-900 bg-white rounded-full px-5 py-2 text-lg shadow hover:bg-gray-100 transition-colors duration-200 ease-in-out">
                Log In
            </Link>
        </nav>
    );
}

import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import Questions from './pages/questions';
import Reject from './pages/reject';
import About from './pages/about'
import Chatbot from './pages/chatbot'
import { FormProvider } from './api/formcontext'; // Make sure this import path is correct

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/reject" element={<Reject />} />
        <Route path="/about" element={<About />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
      <Footer />
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <FormProvider>
      <Routing />
    </FormProvider>
  </React.StrictMode>
  , document.getElementById('root')
);

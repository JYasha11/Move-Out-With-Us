import React from 'react';
import './index.css'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import Questions from './pages/questions'
import Reject from './pages/reject';

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/reject" element={<Reject />} />

      </Routes>
      <Footer />
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

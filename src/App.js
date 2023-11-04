import React from 'react';
import './App.css';
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className="bg-blue-900 min-h-screen flex items-center justify-between">
      <div className="pl-15">
        <h1 className="font-light text-white text-5xl text-center py-10 px-10">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Welcome to Fannie Mate')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .start();
            }}
          />
        </h1>
        <h2 className="font-extralight text-white text-3xl text-center px-20">
          Find Out If You Are You Eligible For Homeownership.
        </h2>
        <div className="flex justify-center items-center py-5">
          <div className="px-2">
            {/* Use an anchor tag or a Link component from react-router-dom if you are using routing */}
            <a href="/questions" className="button-secondary">Contact Us</a>
          </div>
        </div>
      </div>
      <figure>
        <img
          src={""} // Put your image path here
          alt="Descriptive text"
          width={700}
          height={1200}
        />
      </figure>
    </div>
  );
}

export default App;

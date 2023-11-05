import React from 'react';
import Typewriter from 'typewriter-effect';
import house from './assets/house-3.jpg';
import logo from './assets/logo_blue_transparent.png'

function App() {
  return (
    <div>
      <div className="flex min-h-screen">
        <div className="z-10 flex flex-col justify-center items-center w-3/5 bg-white p-10 text-center">
          <h1 className="font-light text-5xl text-blue-900">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Welcome to Move Out With Us')
                  .callFunction(() => {
                    console.log('String typed out!');
                  })
                  .start();
              }}
            />
          </h1>
          <h2 className="font-extralight text-3xl text-blue-900 mt-4">
            Find Out If You Are Eligible For Homeownership.
          </h2>
          <h3 className="max-w-xl font-extralight text-xl text-blue-900 mt-2">
            You may qualify for Fannie Mae's mortgage calculation and consulting services, available all on our website.
          </h3>
          <a href="/questions" className=" bg-blue-900 text-white px-4 py-3 my-6 text-2xl rounded-lg shadow-md hover:bg-blue-800 transition-colors">Get Started</a>
        </div>

        <div className="relative w-2/5">
          <img
            src={house}
            alt="House"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
        </div>
      </div>

      <div className="bg-blue-50 flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <img
            src={logo}
            alt="logo"
            className="max-w-xs md:max-w-sm lg:max-w-lg"
          />
          <p className="max-w-lg font-light text-2xl text-blue-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>

  );
}

export default App;

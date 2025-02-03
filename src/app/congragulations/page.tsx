'use client';

import React from 'react';
import Header from '../components/header';

const Congratulations = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-teal-500 to-blue-500 animate-gradient-x">
      {/* Header positioned at the top */}
      <Header />

      <div className="flex justify-center items-center flex-grow">
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full text-center transform transition-all duration-500 hover:scale-105">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Congratulations!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your request has been registered. Please wait while it is being processed or the product becomes available.
          </p>

          <div className="animate-pulse flex justify-center items-center">
            <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Congratulations;

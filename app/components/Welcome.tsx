'use client'

import React from 'react';
import Link from 'next/link';

const Welcome: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-indigo-600">Welcome to Todo App</h1>
        <p className="text-xl text-gray-600 mb-8">Get ready to manage your tasks efficiently!</p>
        <div className="flex justify-center space-x-4">
          <Link href="/login" className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-300">
            Log In
          </Link>
          <Link href="/signup" className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-300">
            Sign Up
          </Link>
        </div>
        <div className="mt-8 animate-bounce">
          <svg className="mx-auto h-10 w-10 text-indigo-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Welcome;


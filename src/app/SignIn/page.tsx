'use client'; 

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Check if user is already signed in (i.e., if token exists in localStorage)
    const token = localStorage.getItem('user_token');
    if (token) {
      
      router.push('/dashboard');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate sign-in logic (replace with actual API call)
    if (email === 'user@example.com' && password === 'password123') {
      // Successful sign-in, save a token or user ID to localStorage
      localStorage.setItem('user_token', 'some_unique_token'); // Store your token here

      // Redirect to dashboard or another page after successful sign-in
      router.push('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mt-2 border rounded-md"
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mt-2 border rounded-md"
            required
            placeholder="Enter your password"
          />
        </div>
   <Link href="/congragulations">
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Sign In
        </button>
        </Link>
     
      </form>
    </div>
  );
};

export default SignIn;

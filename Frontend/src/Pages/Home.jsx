import React from 'react';
import Header from '../Components/Header';

function Home() {
  return (

    <div>
      <Header/>
    <div className="min-h-screen bg-[#16325B] text-white">
    
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold mb-6">Welcome to NoteMaster</h2>
          <p className="text-xl mb-8">Your personal note-taking companion, wherever you go.</p>
          <button className="bg-white text-teal-500 font-bold py-3 px-6 rounded-md shadow-lg hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
           </div>

    
      <div id="features" className="py-16 bg-white text-teal-700">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-teal-200 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4">Easy Organization</h4>
              <p>Keep your notes organized with tags and categories.</p>
            </div>
            <div className="p-6 border border-teal-200 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4">Secure Storage</h4>
              <p>All your notes are securely stored and easily accessible.</p>
            </div>
            <div className="p-6 border border-teal-200 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4">Cross-Platform</h4>
              <p>Access your notes from any device, anytime.</p>
            </div>
          </div>
        </div>
        </div>

  
      <div className="py-6 bg-[#227B94] text-center">
        <p>&copy; 2024 NoteMaster. All rights reserved.</p>
      </div>
    </div>
    </div>
  );
}

export default Home;

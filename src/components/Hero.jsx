import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-green-600 via-green-500 to-green-400 text-white py-21">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Your Personal Plant Expert in Your Pocket
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-white">
              Identify plants instantly, get customized care guides, and manage 
              your garden with smart scheduling - all in one app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <a
                href="#contact"
                className="px-8 py-3 bg-green-800 text-white rounded-lg font-medium hover:bg-green-900 transition duration-300"
              >
                Download Now
              </a>
              <a href="#about" className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-green-600 transition duration-300">
                Learn More
              </a>
            </div>
          </div>
          
          {/* Right side mockup */}
          <div className="lg:w-1/2 relative">
            <div className="bg-white rounded-3xl shadow-2xl p-4 rotate-3 transform hover:rotate-0 transition-transform duration-500">
              <div className="bg-green-50 rounded-2xl overflow-hidden">
                <div className="bg-green-600 h-10 rounded-t-2xl flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="p-4 h-96 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 003 3h10a3 3 0 003-3V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828l-3.172-3.172a2 2 0 00-2.828 0L8 4.243v8l2 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-green-800 font-medium text-center">
                    Point your camera at any plant <br />for instant identification
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-200 rounded-full opacity-50"></div>
            <div className="absolute top-10 -right-6 w-16 h-16 bg-green-200 rounded-full opacity-70"></div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="flex justify-center mt-16">
          <a href="#about" className="animate-bounce">
            <ArrowDownCircle className="w-10 h-10 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
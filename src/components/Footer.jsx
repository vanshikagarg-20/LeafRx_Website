import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">LeafRx</h2>
            <p className="text-green-200">Your personal plant expert</p>
          </div>
          
          <div className="text-center mt-8 text-green-300 text-sm">
            <p>
              © {new Date().getFullYear()} LeafRx. All rights reserved. | 
              <a 
                href="mailto:leafrx.care@gmail.com" 
                className="text-green-100 hover:text-white ml-1 no-underline"
              >
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
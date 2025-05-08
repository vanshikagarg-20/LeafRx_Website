import React from 'react';
import Team from "./Teammembercard"
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-600 via-green-500 to-green-400 text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Download LeafRx Today
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Start your journey to healthier plants and a more beautiful garden. Available on iOS and Android.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
          {/* App Store button */}
          <a href="https://apps.apple.com/in/app/leafrx/id6744914144" className="bg-black text-white flex items-center justify-center px-8 py-3 rounded-lg hover:bg-gray-800 transition duration-300 w-64">
            <div className="mr-3">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-xl font-semibold leading-tight">App Store</div>
            </div>
          </a>
        </div>
        <Team/>
      </div>
    </section>
  );
};

export default Contact;
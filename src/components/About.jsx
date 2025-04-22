// import React from 'react';
 import Image from "../assets/leafrix 2-2.png";

import React from 'react';
import { Leaf, Zap, Sun, CloudRain } from 'lucide-react';

const About = () => {
  const benefitItems = [
    {
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: "Instant Plant Identification",
      description: "Point your camera at any plant and click photo to instantly identify the plant and its species."
    },
    {
      icon: <CloudRain className="h-8 w-8 text-green-500" />,
      title: "Smart Care Reminders",
      description: "Get personalized watering, fertilizing, and other cstegories care reminders based on your specific plants."
    },
    {
      icon: <Sun className="h-8 w-8 text-green-500" />,
      title: "Growth Tracking",
      description: "Day-Wise tracking of the plant."
    },
    {
      icon: <Zap className="h-8 w-8 text-green-500" />,
      title: "Plant Infomation",
      description: "Gives all the infomation related to plant and all its stages."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Instant Plant Detection & Smart Care Scheduling
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming home gardening with real-time plant recognition and intelligent care scheduling.
          </p>
        </div>

        {/* Full-width paragraph below */}
        {/* <div className="max-w-7xl mx-auto px-6 mb-16">
          <p className="text-lg leading-relaxed text-gray-600 text-center">
            LeafRx is here! We're excited to introduce LeafRx, a smart plant identification and care management app designed to transform the way you grow and care for your plants. This first release is packed with powerful features to help plant lovers identify species instantly and follow structured, stage-based care routines with ease.
          </p>
        </div> */}

        {/* Image and benefits grid */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-green-100 rounded-xl"></div>
              <img
                src={Image}
                alt="About LeafRx"
                className="relative z-10 w-full rounded-xl shadow-lg object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-100 rounded-full z-0"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">How LeafRx Helps You Grow</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefitItems.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center mb-3">
                    <div className="bg-green-100 p-2 rounded-lg mr-3">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  </div>
                  <p className="text-gray-600 pl-14">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
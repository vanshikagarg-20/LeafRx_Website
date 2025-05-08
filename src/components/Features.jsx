import React from "react";
import image from "../assets/ref.webp";
import scan from "../assets/leafrix 2.png"
import {
  Camera,
  CalendarClock,
  Leaf,
  Droplet,
  Sun,
  Thermometer,
  Search,
  Award,
  Clock,
} from "lucide-react";

const Features = () => {
  return (
    <div id = "features" className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-500 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Smart Plant Care at Your Fingertips
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              LeafRx brings precision and simplicity to plant care with advanced
              recognition technology, customized care plans, and intelligent
              scheduling.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#plant-recognition"
                className="px-8 py-3 bg-white text-green-600 rounded-lg font-medium hover:bg-gray-100 transition duration-300"
              >
                Explore Features
              </a>
              <a
                href="https://apps.apple.com/in/app/leafrx/id6744914144"
                className="px-8 py-3 bg-green-800 text-white rounded-lg font-medium hover:bg-green-900 transition duration-300"
              >
                Download Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Plant Recognition Section */}
      <section id="plant-recognition" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-green-100 rounded-3xl p-6 relative">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src={scan}
                    alt="Plant recognition interface"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-4 rounded-full">
                  <Camera size={32} />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Instant Plant Recognition
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <Search className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Advanced AI Identification
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Our cutting-edge AI can identify thousands of plant
                      species with 98% accuracy from a single photo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Detailed Plant Information
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Get comprehensive details about your plant including
                      scientific name, common varieties, native regions, and
                      growth habits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plant Care Section */}
      <section id="plant-care" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Personalized Plant Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              LeafRx creates tailored care plans for each of your plants based
              on species, environmental conditions, and growth stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <Droplet className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Water Requirements
              </h3>
              <p className="text-gray-600">
                Precise watering schedules based on plant type, pot size, and
                local humidity levels.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-yellow-100 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <Sun className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Light Conditions
              </h3>
              <p className="text-gray-600">
                Guidance on optimal light exposure with seasonal adjustments for
                indoor and outdoor plants.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fertilization
              </h3>
              <p className="text-gray-600">
                Custom fertilization plans with recommended nutrients based on
                growth stage and season.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-red-100 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <Thermometer className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Temperature
              </h3>
              <p className="text-gray-600">
                Temperature monitoring and alerts to keep your plants in their
                ideal climate range.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Expert Care Guidance
                </h3>
                <p className="text-gray-600 mb-6">
                  Beyond basic care instructions, LeafRx provides expert tips
                  and troubleshooting advice for common plant issues.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="bg-green-100 p-1 rounded-full mt-1">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span>Growth stage monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-green-100 p-1 rounded-full mt-1">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span>Pruning and propagation guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-green-100 p-1 rounded-full mt-1">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span>Pest treatment recommendations</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-600">
                <img
                  src={image}
                  alt="Plant care expert guidance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling Section */}
      <section id="scheduling" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Intelligent Day-Wise Scheduling
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Never forget to care for your plants again. Our smart scheduling
                system creates personalized reminders based on your plants'
                specific needs.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-lg mt-1">
                    <CalendarClock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Smart Calendar
                    </h3>
                    <p className="text-gray-600 mt-2">
                      View all your plant care tasks in a unified calendar with
                      daily and weekly views.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-lg mt-1">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Customizable Reminders
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Gives reminders for todays task of your plants through
                      notifications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-lg mt-1">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Task Completion
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Mark tasks as complete and track your plant care history
                      over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Trusted by Plant Lovers Everywhere
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">
              Join thousands of plant enthusiasts who rely on LeafRx for healthier, happier plants.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">1.2M+</div>
              <p className="text-gray-300">Active Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">25K+</div>
              <p className="text-gray-300">Plant Species</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
              <p className="text-gray-300">Recognition Accuracy</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">4.8/5</div>
              <p className="text-gray-300">App Store Rating</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Features;

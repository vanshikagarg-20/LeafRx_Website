
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-green-600 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white flex items-center">
          LeafRx
        </a>

        <div className="hidden md:flex space-x-8 text-white">
          <a href="#about" className="hover:bg-white px-3 py-2 rounded-full transition-colors duration-300 hover:text-green-600 font-medium">About</a>
          <a href="#features" className="hover:bg-white px-3 py-2 rounded-full transition-colors duration-300 hover:text-green-600 font-medium">Features</a>
          <a href="#contact" className="hover:bg-white px-3 py-2 rounded-full transition-colors duration-300 hover:text-green-600 font-medium">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={handleToggle}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-green-500">
          <a href="#about" className="block text-white hover:bg-green-400 px-3 py-2 rounded-md">About</a>
          <a href="#features" className="block text-white hover:bg-green-400 px-3 py-2 rounded-md">Features</a>
          <a href="#contact" className="block text-white hover:bg-green-400 px-3 py-2 rounded-md">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
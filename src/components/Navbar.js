import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Importing icons for the hamburger menu
import UserMenu from './UserMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add scroll event listener
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? 'bg-black bg-opacity-90 shadow-lg' : 'bg-gradient-to-b from-black to-transparent'}
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
                CarParts
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="#categories">Categories</NavLink>
                <NavLink to="#about">About</NavLink>
                <NavLink to="#contact">Contact</NavLink>
              </div>
            </div>
            <div className="flex items-center">
              <UserMenu />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white focus:outline-none ml-4"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Side Menu for small devices */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-75 z-40 transition-transform transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="fixed top-0 left-0 w-64 bg-blue/80 h-full shadow-lg z-50 pt-20 p-6">
          <nav className="flex flex-col space-y-4">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="#categories" onClick={() => setIsMenuOpen(false)}>Categories</NavLink>
            <NavLink to="#about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink to="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ to, children, onClick }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
  >
    {children}
  </Link>
);

export default Navbar;

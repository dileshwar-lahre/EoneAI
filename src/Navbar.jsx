import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav
        className="bg-black text-white p-4 fixed top-0 left-0 w-full z-30 border-b border-white/20 transition-shadow duration-300 hover:shadow-[0_2px_15px_rgba(255,255,255,0.4)]"
        style={{ boxShadow: '0 1px 10px rgba(255, 255, 255, 0.2)' }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl md:text-3xl font-bold">EoneAI</Link>

          {/* Animated Menu Icon */}
          <motion.div
            className="md:hidden"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            whileHover={{ rotate: 90 }}
          >
            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-lg">
            <li><Link to="/" className="hover:text-gray-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-400 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              className="md:hidden px-4 py-4 space-y-4 bg-black rounded-b-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <li><Link to="/" onClick={toggleMenu} className="block text-lg capitalize">Home</Link></li>
              <li><Link to="/about" onClick={toggleMenu} className="block text-lg capitalize">About</Link></li>
              <li><Link to="/contact" onClick={toggleMenu} className="block text-lg capitalize">Contact</Link></li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for content below navbar */}
      <div className="pt-10" />
    </>
  );
};

export default Navbar;
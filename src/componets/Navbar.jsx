import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CiDark, CiLight } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";
import './Navbar.css'

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark-theme', !isDark);
  };

  useEffect(() => {
    document.body.classList.remove('dark-theme');
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="w-full bg-black text-white px-4 py-3 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="logo text-xl font-bold">MyPortfolio</div>

        {/* Desktop Nav Links */}
        <div className="nav-links hidden md:flex gap-6">
          <NavLink to="/" onClick={closeMenu} className="nav-link hover:text-gray-400">Home</NavLink>
          <NavLink to="/about" onClick={closeMenu} className="nav-link hover:text-gray-400">About</NavLink>
          <NavLink to="/skill" onClick={closeMenu} className="nav-link hover:text-gray-400">Skill</NavLink>
          <NavLink to="/projects" onClick={closeMenu} className="nav-link hover:text-gray-400">Projects</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className="nav-link hover:text-gray-400">Contact</NavLink>
        </div>

        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="text-2xl ml-4 hidden md:block">
          {isDark ? <CiLight /> : <CiDark />}
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleTheme} className="text-2xl">
            {isDark ? <CiLight /> : <CiDark />}
          </button>
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Links */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start gap-4 px-6 py-4 bg-[#121212]">
          <NavLink to="/" onClick={closeMenu} className="hover:text-gray-400">Home</NavLink>
          <NavLink to="/about" onClick={closeMenu} className="hover:text-gray-400">About</NavLink>
          <NavLink to="/skill" onClick={closeMenu} className="hover:text-gray-400">Skill</NavLink>
          <NavLink to="/projects" onClick={closeMenu} className="hover:text-gray-400">Projects</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className="hover:text-gray-400">Contact</NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;

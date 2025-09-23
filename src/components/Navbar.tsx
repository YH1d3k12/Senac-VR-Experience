import React from 'react';
import { NavbarProps } from '../types';

const Navbar: React.FC<NavbarProps> = ({ onLogoClick }) => {
  return (
    <nav className="navbar-glass fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center space-x-3 cursor-pointer"
          onClick={onLogoClick}
        >
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-xl">S</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">SENAC</h1>
            <p className="text-xs text-cyan-400">Experiência Virtual</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-cyan-400 transition-colors">
            Início
          </a>
          <a href="#ambientes" className="text-white hover:text-cyan-400 transition-colors">
            Ambientes
          </a>
          <a href="#sobre" className="text-white hover:text-cyan-400 transition-colors">
            Sobre
          </a>
          <a href="#contato" className="text-white hover:text-cyan-400 transition-colors">
            Contato
          </a>
        </div>
        
        <div className="md:hidden">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


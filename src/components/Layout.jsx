import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { socials } from '../socials';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();


  const isActive = (path) => location.pathname === path ? "decoration-blueprint-accent text-blueprint-text" : "decoration-blueprint-muted";

  return (
    <div className="min-h-screen flex flex-col max-w-7xl mx-auto border-x-0 md:border-x border-blueprint-grid">
      <header className="sticky top-0 z-50 bg-blueprint-bg/80 backdrop-blur-md border-b border-blueprint-grid px-4 md:px-6 py-4 flex justify-between items-center transition-colors duration-300">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="font-display font-bold text-2xl tracking-tighter text-blueprint-text group-hover:text-blueprint-accent transition-colors">
            <span className="text-blueprint-accent mr-0.5">&gt;</span>
            MustRid
            <span className="text-blueprint-accent animate-pulse">_</span>
          </div>
        </Link>
        
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 font-mono text-xs items-center">
            {[
              { path: '/', label: '/home' },
              { path: '/about', label: '/about' },
              { path: '/skills', label: '/skills' },
              { path: '/projects', label: '/projects' },
              { path: '/contact', label: '/contact' },
            ].map(({ path, label }) => {
              const isCurrent = location.pathname === path;
              return (
                <Link 
                  key={path}
                  to={path} 
                  className={`transition-all duration-300 ${
                    isCurrent 
                      ? "text-blueprint-accent font-bold scale-105" 
                      : "text-blueprint-muted hover:text-blueprint-text hover:underline underline-offset-4"
                  }`}
                >
                  {isCurrent ? label : label}
                </Link>
              );
            })}
            <div className="w-px h-4 bg-blueprint-grid mx-2"></div>
            <ThemeToggle />
          </nav>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-blueprint-text">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[65px] left-0 right-0 h-auto z-40 bg-blueprint-bg border-b border-blueprint-grid p-6 animate-in slide-in-from-top-2 shadow-2xl">
          <nav className="flex flex-col gap-6 font-mono text-lg">
            {[
              { path: '/', label: '/home' },
              { path: '/about', label: '/about' },
              { path: '/skills', label: '/skills' },
              { path: '/projects', label: '/projects' },
              { path: '/contact', label: '/contact' },
            ].map(({ path, label }) => {
               const isCurrent = location.pathname === path;
               return (
                <Link 
                    key={path}
                    onClick={() => setIsMenuOpen(false)} 
                    to={path} 
                    className={`border-b border-blueprint-grid pb-2 transition-all ${
                        isCurrent 
                        ? "text-blueprint-accent font-bold pl-2" 
                        : "text-blueprint-muted"
                    }`}
                >
                    {isCurrent ? label : label}
                </Link>
               );
            })}
          </nav>
        </div>
      )}

      <main className="flex-grow bg-blueprint-bg transition-colors duration-300">
        {children}
      </main>

      <footer className="mt-20 pb-12 bg-blueprint-bg transition-colors duration-300">
        <div className="border-t border-blueprint-grid w-full mb-12" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center">
            
            {/*Quick links */}
            <div className="flex flex-col items-center">
              <h3 className="text-green-500 font-mono mb-6 text-sm">Quick links</h3>
              <nav className="flex flex-col gap-4 text-blueprint-text font-display font-bold text-sm tracking-wider items-center">
                <Link to="/" className="hover:text-blueprint-accent transition-colors">HOME</Link>
                <Link to="/about" className="hover:text-blueprint-accent transition-colors">ABOUT</Link>
                <Link to="/skills" className="hover:text-blueprint-accent transition-colors">SKILLS</Link>
                <Link to="/projects" className="hover:text-blueprint-accent transition-colors">WORKS</Link>
                <Link to="/contact" className="hover:text-blueprint-accent transition-colors">CONTACT</Link>
              </nav>
            </div>

            {/* Dev Link */}
            <div className="flex flex-col items-center">
               <h3 className="text-green-500 font-mono mb-6 text-sm">Dev Link</h3>
               <nav className="flex flex-col gap-4 text-blueprint-text font-display font-bold text-sm tracking-wider items-center">
                 <a href={socials[2].url} className="hover:text-blueprint-accent transition-colors">GITHUB</a>
               </nav>
            </div>

            {/* Social Link */}
            <div className="flex flex-col items-center">
               <h3 className="text-green-500 font-mono mb-6 text-sm">Social Link</h3>
               <nav className="flex flex-col gap-4 text-blueprint-text font-display font-bold text-sm tracking-wider items-center">
                 <a href={socials[0].url} className="hover:text-blueprint-accent transition-colors">TWITTER (X)</a>
                 <a href={socials[1].url} className="hover:text-blueprint-accent transition-colors">LINKEDIN</a>
               </nav>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-blueprint-grid w-full">
             <p className="text-blueprint-muted font-mono text-sm">© {new Date().getFullYear()} Mustapha Ridwan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

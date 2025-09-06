import React from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  onTitleClick: () => void;
  showGetStarted?: boolean;
  onGetStarted?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onTitleClick, showGetStarted = false, onGetStarted }) => {
  return (
     <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-20 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
             <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400 cursor-pointer" onClick={onTitleClick}>
              AI Resume Screener
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {showGetStarted && onGetStarted && (
               <button
                  onClick={onGetStarted}
                  className="hidden sm:block px-4 py-2 bg-indigo-600 text-white font-semibold text-sm rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-900 transition-colors duration-200"
                >
                  Get Started
                </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

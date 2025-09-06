import React, { useState } from 'react';
import LandingPage from './components/landing/LandingPage';
import ScreenerTool from './components/ScreenerTool';
import Header from './components/Header';
import { useTheme } from './hooks/useTheme';

const App: React.FC = () => {
  // Initialize the theme hook
  useTheme();
  
  const [showScreener, setShowScreener] = useState(false);

  const handleGetStarted = () => {
    setShowScreener(true);
  };
  
  const handleGoHome = () => {
    setShowScreener(false);
  }

  return (
    <div className="text-slate-800 dark:text-slate-200">
       <Header 
        onTitleClick={handleGoHome}
        showGetStarted={!showScreener}
        onGetStarted={handleGetStarted}
      />
      {showScreener ? (
        <ScreenerTool />
      ) : (
        <LandingPage onGetStarted={handleGetStarted} />
      )}
    </div>
  );
};

export default App;
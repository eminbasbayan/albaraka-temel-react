import { createContext, useState } from 'react';

export const ThemeContext = createContext();

import React from 'react';

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');

  function handleThemeMode() {
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        handleThemeMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

import React, { useState, type FC, type ReactNode } from 'react';
import themeContext, { initialState } from '../../contexts/theme';

interface Props {
  children: ReactNode;
}

const ThemeProvider: FC<Props> = ({ children }) => {
  const [{ theme, config }, setTheme] = useState(initialState);

  const context = {
    theme,
    config,
    setTheme
  };

  return (
    <themeContext.Provider value={context}>{children}</themeContext.Provider>
  );
};

export default ThemeProvider;

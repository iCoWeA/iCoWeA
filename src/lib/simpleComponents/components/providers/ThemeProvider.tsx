import React, { type ReactNode, type FC, useState, useMemo } from 'react';
import themeContext, { initialState } from '../../contexts/theme';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  /* --- Set states --- */
  const [{ theme }, setTheme] = useState(initialState);

  /* --- Set context --- */
  const context = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  );

  return <themeContext.Provider value={context}>{children}</themeContext.Provider>;
};

export default ThemeProvider;

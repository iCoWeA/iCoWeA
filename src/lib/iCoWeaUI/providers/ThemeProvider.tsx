import React, { type ReactNode, type FC, useState, useMemo } from 'react';

import themeContext from '../contexts/theme';

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Themes>('light');

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

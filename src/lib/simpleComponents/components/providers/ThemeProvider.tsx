import React, { useState, type FC, type ReactNode, useMemo } from 'react';
import themeContext, { initialState } from '../../contexts/theme';

interface Props {
  children: ReactNode;
}

const ThemeProvider: FC<Props> = ({ children }) => {
  const [{ theme }, setTheme] = useState(initialState);

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

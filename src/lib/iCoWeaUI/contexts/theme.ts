import { type Dispatch, type SetStateAction, createContext } from 'react';

type ThemeContext = {
  theme: Themes;
  setTheme: Dispatch<SetStateAction<ThemeContext>>;
};

export const themeInitialState: ThemeContext = {
  theme: 'light',
  setTheme: () => {}
};

const themeContext = createContext<ThemeContext>(themeInitialState);

export default themeContext;

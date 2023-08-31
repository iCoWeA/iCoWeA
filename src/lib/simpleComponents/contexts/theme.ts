import { type Dispatch, type SetStateAction, createContext } from 'react';

export interface ThemeContext {
  theme: string;
  setTheme: Dispatch<SetStateAction<ThemeContext>>;
}

export const initialState: ThemeContext = {
  theme: 'default',
  setTheme: () => {}
};

const themeContext = createContext<ThemeContext>(initialState);

export default themeContext;

import { createContext } from 'react';

export interface MenuContext {
  onMount: () => void;
  onClose: () => void;
}

export const initialState: MenuContext = {
  onMount: () => {},
  onClose: () => {}
};

const menuContext = createContext<MenuContext>(initialState);

export default menuContext;

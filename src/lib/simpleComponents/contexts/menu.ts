import { createContext } from 'react';

export interface MenuContext {
  onMount: (element: HTMLLIElement | null) => void;
  onUnmount: (element: HTMLLIElement | null) => void;
  onClose: () => void;
}

export const initialState: MenuContext = {
  onMount: () => {},
  onUnmount: () => {},
  onClose: () => {}
};

const menuContext = createContext<MenuContext>(initialState);

export default menuContext;

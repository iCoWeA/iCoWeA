import { createContext } from 'react';

export interface SelectContext {
  onClose: (value: string) => void;
}

export const initialState: SelectContext = {
  onClose: (_) => {}
};

const selectContext = createContext<SelectContext>(initialState);

export default selectContext;

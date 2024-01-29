import { createContext } from 'react';

type Element = {
  styles?: string;
  defaultProps?: Record<string, string>;
};

export type Config = Record<string, Record<string, Element>>;

const configContext = createContext<Config>({});

export default configContext;

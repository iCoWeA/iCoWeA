import { useContext } from 'react';

import themeContext from '../contexts/theme';

const useTheme = (): Themes => useContext(themeContext).theme;

export default useTheme;

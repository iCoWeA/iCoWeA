import React, { type FC, useContext } from 'react';

import ToggleButton, {
  type ToggleButtonProps
} from '../../lib/iCoWeABaseUI/components/inputs/ToggleButton/ToggleButton';
import themeContext from '../../lib/iCoWeAUI/contexts/theme';
import useTheme from '../../lib/iCoWeAUI/hooks/useTheme';
import DarkIcon from '../Icons/DarkIcon';
import LightIcon from '../Icons/LightIcon';

const ThemeButton: FC<ToggleButtonProps> = (props) => {
  const setTheme = useContext(themeContext).setTheme;

  const checked = useTheme() === 'dark';

  return (
    <ToggleButton
      onClick={() => {
        localStorage.setItem('theme', checked ? 'light' : 'dark');

        setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
      }}
      checked={checked}
      variant="soft"
      color="neutral"
      radius="circular"
      {...props}
    >
      {checked ? <LightIcon /> : <DarkIcon />}
    </ToggleButton>
  );
};

export default ThemeButton;

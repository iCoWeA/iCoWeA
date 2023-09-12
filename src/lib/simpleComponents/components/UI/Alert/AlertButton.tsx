import React, { forwardRef, useContext } from 'react';
import alertButtonConfig from '../../../configs/alertButtonConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';
import Button, { type ButtonProps } from '../Button/Button';
import Icon, { type IconProps } from '../Icon/Icon';

export interface AlertButtonProps extends ButtonProps {
  variant?: ButtonVariants;
  color?: Colors;
  iconProps?: IconProps;
}

const AlertButton = forwardRef<HTMLButtonElement, AlertButtonProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = alertButtonConfig.styles;
  const { variant, color, iconProps, className, ...restProps } = {
    ...alertButtonConfig.defaultProps,
    ...props
  };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.variants[variant][theme][color], className);

  return (
    <Button
      variant="text"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <Icon {...iconProps}>
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </Icon>
    </Button>
  );
});

AlertButton.displayName = 'AlertButton';

export default AlertButton;

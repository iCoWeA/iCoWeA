import React, { type ButtonHTMLAttributes, forwardRef, useContext, type MouseEvent } from 'react';
import alertConfig, { type AlertVariants } from '../../../configs/alertConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

interface AlertButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClose: () => void;
  variant: AlertVariants;
  color: Colors;
}

const AlertButton = forwardRef<HTMLButtonElement, AlertButtonProps>(({ onClose, variant, color, onClick, className, ...restProps }, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = alertConfig.styles.button;

  /* --- Set props --- */
  const clickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    onClose();

    if (onClick !== undefined) {
      onClick(event);
    }
  };

  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme][color], className);

  return (
    <button
      onClick={clickHandler}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

AlertButton.displayName = 'AlertButton';

export default AlertButton;

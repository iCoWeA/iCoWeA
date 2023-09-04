import React, { useContext, cloneElement, type ReactElement, type FC } from 'react';
import buttonGroupConfig from '../../../configs/buttonGroupConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

interface ButtonGroupButtonProps {
  isFirst: boolean;
  isLast: boolean;
  variant: ButtonVariants;
  color: Colors;
  size: Sizes;
  elevated: boolean;
  type: 'submit' | 'reset' | 'button';
  className: string;
  children: ReactElement;
}

const ButtonGroupButton: FC<ButtonGroupButtonProps> = ({ isFirst, isLast, variant, color, size, elevated, type, className, children }) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = buttonGroupConfig.styles.button;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme][color],
    styles.sizes[size][variant],
    elevated && styles.elevated[theme],
    isFirst && styles.first,
    isLast && styles.last[variant],
    className
  );

  return <>{cloneElement(children, { className: mergedClassName, type })}</>;
};

ButtonGroupButton.displayName = 'ButtonGroupButton';

export default ButtonGroupButton;

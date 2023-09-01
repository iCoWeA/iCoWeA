import React, { useContext, cloneElement, type ReactElement, type FC } from 'react';
import buttonGroupConfig, { type ButtonGroupVariants } from '../../../configs/buttonGroupConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

interface ButtonGroupButtonProps {
  element: ReactElement;
  isFirst: boolean;
  isLast: boolean;
  variant: ButtonGroupVariants;
  color: Colors;
  size: Sizes;
  elevated: boolean;
  type: 'submit' | 'reset' | 'button';
  className: string;
}

const ButtonGroupButton: FC<ButtonGroupButtonProps> = ({ element, isFirst, isLast, variant, color, size, elevated, type, className }) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = buttonGroupConfig.styles.button;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme][color],
    styles.sizes[size],
    elevated && styles.elevated[theme],
    isFirst && styles.first,
    isLast && styles.last[variant],
    className
  );

  return <>{cloneElement(element, { className: mergedClassName, type })}</>;
};

ButtonGroupButton.displayName = 'ButtonGroupButton';

export default ButtonGroupButton;

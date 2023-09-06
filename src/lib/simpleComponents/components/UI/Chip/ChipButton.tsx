import React, { type ButtonHTMLAttributes, forwardRef, useContext } from 'react';
import chipConfig, { type ChipVariants } from '../../../configs/chipConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

interface ChipButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClose: () => void;
  variant: ChipVariants;
  color: Colors;
}

const ChipButton = forwardRef<HTMLButtonElement, ChipButtonProps>(({ onClose, variant, color, className, ...restProps }, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = chipConfig.styles.button;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme][color], className);

  return (
    <button
      onClick={onClose}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

ChipButton.displayName = 'ChipButton';

export default ChipButton;

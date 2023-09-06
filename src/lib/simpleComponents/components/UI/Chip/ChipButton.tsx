import React, { type ButtonHTMLAttributes, forwardRef, useContext, type MouseEvent } from 'react';
import chipConfig, { type ChipVariants } from '../../../configs/chipConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

interface ChipButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClose: () => void;
  variant: ChipVariants;
  color: Colors;
}

const ChipButton = forwardRef<HTMLButtonElement, ChipButtonProps>(({ onClose, variant, color, onClick, className, ...restProps }, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = chipConfig.styles.button;

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

ChipButton.displayName = 'ChipButton';

export default ChipButton;

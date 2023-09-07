import React, { type BaseHTMLAttributes, type MutableRefObject, forwardRef, useContext } from 'react';
import selectConfig from '../../../configs/selectConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

interface SelectContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  focused: boolean;
  variant: InputVariants;
  selectRef: MutableRefObject<HTMLInputElement | null>;
  disabled: boolean;
}

const SelectContainer = forwardRef<HTMLDivElement, SelectContainerProps>(({ focused, variant, selectRef, disabled, className, ...restProps }, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = selectConfig.styles.container;
  const shift = focused || (typeof selectRef.current?.value === 'string' && selectRef.current?.value !== '');

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    focused && styles.focus,
    shift && styles.shift,
    variant === 'filled' && styles.colors[theme],
    disabled && styles.disabled,
    disabled && styles.disabledColors[theme],
    className
  );

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

SelectContainer.displayName = 'SelectContainer';

export default SelectContainer;

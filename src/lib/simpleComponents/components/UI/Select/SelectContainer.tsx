import React, { type BaseHTMLAttributes, type MutableRefObject, forwardRef, useContext } from 'react';
import selectConfig from '../../../configs/selectConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

interface SelectContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant: InputVariants;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  disabled: boolean;
}

const SelectContainer = forwardRef<HTMLDivElement, SelectContainerProps>(({ variant, inputRef, disabled, className, ...restProps }, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = selectConfig.styles.container;
  const shift = typeof inputRef.current?.value === 'string' && inputRef.current?.value !== '';

  /* --- Set props --- */
  const clickHandler = (): void => {
    inputRef.current?.focus();
  };

  const mergedClassName = mergeClasses(
    styles.base,
    shift && styles.shift,
    variant === 'filled' && styles.colors[theme],
    disabled && styles.disabled,
    disabled && styles.disabledColors[theme],
    className
  );

  return (
    <div
      onClick={clickHandler}
      tabIndex={1}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

SelectContainer.displayName = 'SelectContainer';

export default SelectContainer;

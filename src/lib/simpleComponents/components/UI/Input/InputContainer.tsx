import React, { type BaseHTMLAttributes, type MutableRefObject, forwardRef, useContext, type MouseEvent } from 'react';
import inputConfig from '../../../configs/inputConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

interface InputContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant: InputVariants;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  disabled: boolean;
}

const InputContainer = forwardRef<HTMLDivElement, InputContainerProps>(({ variant, inputRef, onClick, disabled, className, ...restProps }, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = inputConfig.styles.container;
  const shift = typeof inputRef.current?.value === 'string' && inputRef.current?.value !== '';

  /* --- Set props --- */
  const clickHandler = (event: MouseEvent<HTMLDivElement>): void => {
    inputRef.current?.focus();

    if (onClick !== undefined) {
      onClick(event);
    }
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

InputContainer.displayName = 'InputContainer';

export default InputContainer;

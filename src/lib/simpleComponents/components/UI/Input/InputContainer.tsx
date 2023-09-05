import React, { type BaseHTMLAttributes, forwardRef, type MutableRefObject, type MouseEvent, useContext } from 'react';
import themeContext from '../../../contexts/theme';
import inputConfig from '../../../configs/inputConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface InputContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant: InputVariants;
  inputRef: MutableRefObject<HTMLInputElement | null>;
}

const InputContainer = forwardRef<HTMLDivElement, InputContainerProps>(({ variant, inputRef, onClick, className, ...restProps }, ref) => {
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

  const mergedClassName = mergeClasses(styles.base, shift && styles.shift, styles.variants[variant], variant === 'filled' && styles.colors[theme], className);

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

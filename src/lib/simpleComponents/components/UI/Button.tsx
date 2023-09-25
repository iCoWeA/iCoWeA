import React, { type ButtonHTMLAttributes, type ReactNode, forwardRef, useContext, useRef, useImperativeHandle, useCallback } from 'react';
import buttonConfig from '../../configs/buttonConfig';
import themeContext from '../../contexts/theme';
import useAddEventListener from '../../hooks/useAddEventListener';
import { mergeClasses } from '../../utils/utils';

/* ARIA
 *
 * Set aria-pressed as toggle button
 *
 */

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Sizes;
  shape?: Shapes;
  variant?: Variants;
  color?: Colors;
  elevated?: boolean;
  fullwidth?: boolean;
  startDecoration?: ReactNode;
  endDecoration?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = buttonConfig.styles;
  const { size, shape, variant, color, elevated, fullwidth, startDecoration, endDecoration, className, children, ...restProps } = {
    ...buttonConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const buttonRef = useRef<HTMLButtonElement>(null);

  /* --- Set imperative ref --- */
  useImperativeHandle<HTMLButtonElement | null, HTMLButtonElement | null>(ref, () => buttonRef.current, []);

  /* --- Set click event --- */
  const clickHandler = useCallback(() => {
    buttonRef.current?.blur();
  }, []);

  useAddEventListener(buttonRef, 'click', clickHandler);

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.stateLayer,
    styles.sizes[size],
    styles.shapes[shape],
    styles.variants[variant][theme][color],
    styles.stateLayerVariants[variant === 'plain' || variant === 'solid' ? 'plain' : 'solid'][theme][color],
    elevated && styles.elevated,
    fullwidth && styles.fullwidth,
    className
  );

  return (
    <button
      className={mergedClassName}
      ref={buttonRef}
      {...restProps}
    >
      {startDecoration}
      {children}
      {endDecoration}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;

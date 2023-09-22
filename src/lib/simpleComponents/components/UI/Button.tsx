import React, {
  type ButtonHTMLAttributes,
  type ReactNode,
  type BaseHTMLAttributes,
  forwardRef,
  useContext,
  useRef,
  useImperativeHandle,
  useEffect
} from 'react';
import buttonConfig from '../../configs/buttonConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

/* ARIA
 *
 * Set aria-pressed as toggle button
 *
 */

export type ButtonVariants = 'plain' | 'text' | 'outlined' | 'filled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  size?: Sizes;
  color?: Colors;
  elevated?: boolean;
  fullwidth?: boolean;
  startDecoration?: ReactNode;
  endDecoration?: ReactNode;
  stateLayerProps?: BaseHTMLAttributes<HTMLSpanElement>;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = buttonConfig.styles;
  const { variant, size, color, elevated, fullwidth, startDecoration, endDecoration, stateLayerProps, className, children, ...restProps } = {
    ...buttonConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const buttonRef = useRef<HTMLButtonElement>(null);

  /* --- Set imperative ref --- */
  useImperativeHandle<HTMLButtonElement | null, HTMLButtonElement | null>(ref, () => buttonRef.current, []);

  /* --- Set click event --- */
  useEffect(() => {
    const clickHandler = (): void => {
      buttonRef.current?.blur();
    };

    buttonRef.current?.addEventListener('click', clickHandler);

    return () => {
      buttonRef.current?.removeEventListener('click', clickHandler);
    };
  }, []);

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme][color],
    styles.sizes[size],
    variant === 'outlined' && styles.outlineSizes[size],
    elevated && styles.elevated,
    fullwidth && styles.fullwidth,
    className
  );

  return (
    <button
      className={mergedClassName}
      type="button"
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

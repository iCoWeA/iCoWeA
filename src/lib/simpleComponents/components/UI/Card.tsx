import React, { type BaseHTMLAttributes, forwardRef, useContext, useRef, useImperativeHandle, useCallback } from 'react';
import cardConfig from '../../configs/cardConfig';
import themeContext from '../../contexts/theme';
import useAddEventListener from '../../hooks/useAddEventListener';
import { mergeClasses } from '../../utils/propsHelper';

/* ARIA
 *
 * Set aria-pressed as toggle button
 *
 */

export type CardVariants = 'plain' | 'filled' | 'outlined';

export interface CardProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: CardVariants;
  elevated?: boolean;
  clickable?: boolean;
  grabed?: boolean;
  disabled?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = cardConfig.styles;
  const { variant, elevated, clickable, grabed, disabled, className, ...restProps } = { ...cardConfig.defaultProps, ...props };

  /* --- Set refs --- */
  const cardRef = useRef<HTMLDivElement>(null);

  /* --- Set imperative ref --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => cardRef.current, []);

  /* --- Set click props --- */
  const clickableProps: BaseHTMLAttributes<HTMLDivElement> = {};

  const clickHandler = useCallback(() => {
    cardRef.current?.blur();
  }, []);

  useAddEventListener(cardRef, 'click', clickable ? clickHandler : null);

  if (clickable) {
    clickableProps.role = 'button';
    clickableProps['aria-disabled'] = disabled;
    clickableProps.tabIndex = 0;
  }

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme],
    elevated && styles.elevated,
    clickable && styles.clickable[theme],
    grabed && styles.grabed[theme],
    disabled && styles.disabled[theme],
    className
  );

  return (
    <div
      {...clickableProps}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Card.displayName = 'Card';

export default Card;

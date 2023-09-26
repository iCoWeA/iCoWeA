import React, { forwardRef, useContext, useRef, useImperativeHandle, type BaseHTMLAttributes, useCallback } from 'react';
import cardConfig from '../../configs/cardConfig';
import themeContext from '../../contexts/theme';
import useAddEventListener from '../../hooks/useAddEventListener';
import { mergeClasses } from '../../utils/utils';
import Box, { type BoxProps } from './Box';

/* ARIA
 *
 * Set aria-pressed as toggle button
 *
 */

export interface CardProps extends BoxProps {
  size?: Sizes;
  variant?: Variants;
  color?: Colors;
  clickable?: boolean;
  grabed?: boolean;
  disabled?: boolean;
  outlined?: TextVariants;
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = cardConfig.styles;
  const { size, variant, color, clickable, grabed, disabled, outlined, className, ...restProps } = { ...cardConfig.defaultProps, ...props };

  /* --- Set refs --- */
  const cardRef = useRef<HTMLDivElement>(null);

  /* --- Set imperative ref --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => cardRef.current, []);

  /* --- Set click event --- */
  const clickableProps: BaseHTMLAttributes<HTMLDivElement> = {};

  const clickHandler = useCallback(() => {
    cardRef.current?.blur();
  }, []);

  useAddEventListener(cardRef, 'click', clickable ? clickHandler : null);

  if (clickable) {
    clickableProps.role = 'button';

    if (!disabled) {
      clickableProps.tabIndex = 0;
    } else {
      clickableProps['aria-disabled'] = true;
    }
  }

  /* --- Set classes --- */
  const mergedClassName = mergeClasses(
    styles.base,
    size !== undefined && styles.sizes[size],
    (clickable || grabed) && styles.stateLayer,
    clickable && !grabed && styles.focusVisible[variant === 'plain' ? 'plain' : 'solid'][theme][color],
    clickable && !grabed && styles.stateLayerVariants[variant === 'plain' || variant === 'solid' ? 'plain' : 'solid'][theme][color],
    grabed && styles.stateLayerGrabedVariants[variant === 'plain' || variant === 'solid' ? 'plain' : 'solid'][theme][color],
    disabled && styles.disabled[variant === 'plain' || variant === 'text' ? 'plain' : 'solid'][theme],
    disabled && outlined !== undefined && styles.disabledOutline[theme],
    className
  );

  return (
    <Box
      {...clickableProps}
      variant={variant}
      color={color}
      outlined={outlined}
      className={mergedClassName}
      ref={cardRef}
      {...restProps}
    />
  );
});

Card.displayName = 'Card';

export default Card;

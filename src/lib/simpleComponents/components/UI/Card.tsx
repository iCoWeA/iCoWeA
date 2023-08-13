import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import { type CardVariants, type CardColors } from '../../configs/cardConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface CardProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: CardVariants;
  color?: CardColors;
  elevated?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant, color, elevated, className, ...restProps }, ref) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.card;

    variant = variant ?? defaultProps.variant;
    color = color ?? defaultProps.color;
    elevated = elevated ?? defaultProps.elevated;

    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        styles.variants[variant][theme][color],
        elevated && styles.elevated[theme],
        className
      )
    );

    return (
      <div
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

Card.displayName = 'Card';

export default Card;

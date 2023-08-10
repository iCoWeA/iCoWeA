import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import { type CardColors } from '../../configs/cardConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface CardDefaultProps {
  color?: CardColors;
}

export interface CardProps
  extends CardDefaultProps,
  BaseHTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ color, className, ...restProps }, ref) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.card;

    color = color ?? defaultProps.color;

    const mergedClassName = twMerge(
      mergeClasses(styles.base, styles.colors[theme][color], className)
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

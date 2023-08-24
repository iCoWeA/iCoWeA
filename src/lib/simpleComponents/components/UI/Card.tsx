import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import { type CardVariants } from '../../configs/cardConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeProps } from '../../utils/propsHelper';

export interface CardProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: CardVariants;
  color?: Colors;
  elevated?: boolean;
  className?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.card;
  const { variant, color, elevated, className, ...restProps } = mergeProps(defaultProps, props);

  /* Set props */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme][color], elevated && styles.elevated[theme], className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Card.displayName = 'Card';

export default Card;

import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import { type CardProps } from '../../configs/cardConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

const Card = forwardRef<HTMLDivElement, CardProps & BaseHTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.card;
  const { variant, color, elevated, className, ...restProps } = setDefaultProps(defaultProps, props);

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

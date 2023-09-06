import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import cardConfig from '../../../configs/cardConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

export interface CardProps extends BaseHTMLAttributes<HTMLDivElement> {
  color?: Colors;
  elevated?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = cardConfig.styles;
  const { color, elevated, className, ...restProps } = { ...cardConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.colors[theme][color], elevated && styles.elevated[theme], className);

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

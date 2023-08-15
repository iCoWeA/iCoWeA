import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import { type CardFooterProps } from '../../configs/cardFooterConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps & BaseHTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { config } = useContext(themeContext);
  const { defaultProps, styles } = config.cardFooter;
  const { columns, fullwidht, className, ...restProps } = setDefaultProps(defaultProps, props);

  /* Set props */
  const mergedClassName = mergeClasses(styles.base, columns && styles.columns, fullwidht && styles.fullwidth, className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

CardFooter.displayName = 'CardFooter';

export default CardFooter;

import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import { type CardHeaderProps } from '../../configs/cardHeaderConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps & BaseHTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { config } = useContext(themeContext);
  const { defaultProps, styles } = config.cardHeader;
  const { columns, fullwidht, className, ...restProps } = setDefaultProps(props, defaultProps);

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

CardHeader.displayName = 'CardHeader';

export default CardHeader;

import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

export interface CardBodyProps extends BaseHTMLAttributes<HTMLDivElement> {
  columns?: boolean;
  fullwidht?: boolean;
  className?: string;
}

const CardBody = forwardRef<HTMLDivElement, CardBodyProps>((props, ref) => {
  const { config } = useContext(themeContext);
  const { defaultProps, styles } = config.cardBody;
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

CardBody.displayName = 'CardBody';

export default CardBody;

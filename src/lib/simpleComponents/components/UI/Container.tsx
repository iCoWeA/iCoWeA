import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import { type ContainerProps } from '../../configs/containerConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

const Container = forwardRef<HTMLDivElement, ContainerProps & BaseHTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { config } = useContext(themeContext);
  const { defaultProps, styles } = config.container;
  const { variant, className, ...restProps } = setDefaultProps(defaultProps, props);

  /* Set props */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant], className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Container.displayName = 'Container';

export default Container;

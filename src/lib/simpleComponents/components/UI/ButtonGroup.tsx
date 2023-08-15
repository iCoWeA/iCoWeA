import React, { forwardRef, useContext, type BaseHTMLAttributes, type ReactNode, cloneElement } from 'react';
import { type ButtonGroupProps } from '../../configs/buttonGroupConfig';
import themeContext from '../../contexts/theme';
import { isLast, mergeClasses, setDefaultProps } from '../../utils/propsHelper';

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps & BaseHTMLAttributes<HTMLDivElement>>((rootProps, rootRef) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.buttonGroup;
  const {
    variant,
    size,
    color,
    elevated,
    fullwidth,
    className: rootClassName,
    children: rootChildren,
    ...restRootProps
  } = setDefaultProps(rootProps, defaultProps);

  /* Set root props */
  const rootStyles = styles.root;
  const mergedRootClassName = mergeClasses(rootStyles.base, fullwidth && rootStyles.fullwidth, rootClassName);

  /* Set buttons props */
  const buttonNodes: ReactNode[] = [];
  const childrenNodes = Array.isArray(rootChildren) ? [...rootChildren] : [rootChildren];

  for (let i = 0; i < childrenNodes.length; i++) {
    const buttonStyles = styles.button;
    const mergedButtonClassName = mergeClasses(
      buttonStyles.base,
      buttonStyles.variants[variant][theme][color],
      buttonStyles.sizes[size],
      elevated && buttonStyles.elevated[theme],
      i === 0 && buttonStyles.first,
      isLast(childrenNodes, i) && buttonStyles.last[variant]
    );

    buttonNodes[i] = cloneElement(childrenNodes[i], {
      className: mergedButtonClassName,
      key: i
    });
  }

  return (
    <div
      className={mergedRootClassName}
      ref={rootRef}
      {...restRootProps}
    >
      {buttonNodes}
    </div>
  );
});

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;

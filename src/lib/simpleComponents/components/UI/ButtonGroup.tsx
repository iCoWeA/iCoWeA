import React, { forwardRef, useContext, type BaseHTMLAttributes, type ReactNode, type ButtonHTMLAttributes } from 'react';
import { type ButtonGroupVariants } from '../../configs/buttonGroupConfig';
import themeContext from '../../contexts/theme';
import { isLast, mergeClasses, mergeProps } from '../../utils/propsHelper';

export interface ButtonGroupProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: ButtonGroupVariants;
  size?: Sizes;
  color?: Colors;
  elevated?: boolean;
  fullwidth?: boolean;
  type?: 'submit' | 'reset' | 'button';
  buttonProps?: Record<number, ButtonHTMLAttributes<HTMLButtonElement>>;
  className?: string;
  children?: ReactNode;
}

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>((rootProps, rootRef) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.buttonGroup;
  const {
    variant,
    size,
    color,
    elevated,
    fullwidth,
    type,
    buttonProps,
    className: rootClassName,
    children: rootChildren,
    ...restRootProps
  } = mergeProps(defaultProps, rootProps);

  /* Set root props */
  const rootStyles = styles.root;
  const mergedRootClassName = mergeClasses(rootStyles.base, fullwidth && rootStyles.fullwidth, rootClassName);

  /* Set buttons props */
  const buttonNodes: ReactNode[] = [];
  const childrenNodes = Array.isArray(rootChildren) ? [...rootChildren] : [rootChildren];

  for (let i = 0; i < childrenNodes.length; i++) {
    const buttonStyles = styles.button;
    const {
      className: buttonClassName,
      children: buttonChildren = childrenNodes[i].props.children,
      type: buttonType = type,
      ...restButtonProps
    } = buttonProps[i] ?? {};

    const mergedButtonClassName = mergeClasses(
      buttonStyles.base,
      buttonStyles.variants[variant][theme][color],
      buttonStyles.sizes[size],
      elevated && buttonStyles.elevated[theme],
      i === 0 && buttonStyles.first,
      isLast(childrenNodes, i) && buttonStyles.last[variant],
      buttonClassName
    );

    buttonNodes[i] = (
      <button
        key={i}
        className={mergedButtonClassName}
        type={buttonType}
        {...restButtonProps}
      >
        {buttonChildren}
      </button>
    );
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

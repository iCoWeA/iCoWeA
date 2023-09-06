import React, { type BaseHTMLAttributes, type ReactElement, forwardRef, type ReactNode } from 'react';
import buttonGroupConfig from '../../../configs/buttonGroupConfig';
import { mergeClasses, isLast } from '../../../utils/propsHelper';
import ButtonGroupButton from './ButtonGroupButton';

export interface ButtonGroupProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: ButtonVariants;
  size?: Sizes;
  color?: Colors;
  elevated?: boolean;
  fullwidth?: boolean;
  children: ReactElement | ReactElement[];
}

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = buttonGroupConfig.styles.container;
  const { variant, size, color, elevated, fullwidth, type, className, children, ...restProps } = { ...buttonGroupConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, fullwidth && styles.fullwidth, className);

  /* --- Set buttons props --- */
  const childrenNode: ReactElement[] = Array.isArray(children) ? children : [children];
  const buttonNodes: ReactNode[] = [];

  for (let i = 0; i < childrenNode.length; i++) {
    buttonNodes[i] = (
      <ButtonGroupButton
        key={i}
        isFirst={i === 0}
        isLast={isLast(childrenNode, i)}
        variant={variant}
        size={size}
        color={color}
        elevated={elevated}
        type={childrenNode[i].props.type ?? type}
        className={childrenNode[i].props.className}
      >
        {childrenNode[i]}
      </ButtonGroupButton>
    );
  }

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {buttonNodes}
    </div>
  );
});

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;

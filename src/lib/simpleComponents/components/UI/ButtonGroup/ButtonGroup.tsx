import React, { forwardRef, type BaseHTMLAttributes, type ReactElement, type ReactNode } from 'react';
import buttonGroupConfig, { type ButtonGroupVariants } from '../../../configs/buttonGroupConfig';
import ButtonGroupButton from './ButtonGroupButton';
import { isLast, mergeClasses } from '../../../utils/propsHelper';

export interface ButtonGroupProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: ButtonGroupVariants;
  size?: Sizes;
  color?: Colors;
  elevated?: boolean;
  fullwidth?: boolean;
  type?: 'submit' | 'reset' | 'button';
  children?: ReactElement[];
}

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = buttonGroupConfig.styles.container;
  const { variant, size, color, elevated, fullwidth, type, className, children, ...restProps } = { ...buttonGroupConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, fullwidth && styles.fullwidth, className);

  /* --- Set buttons props --- */
  const buttonNodes: ReactNode[] = [];

  for (let i = 0; i < children.length; i++) {
    buttonNodes[i] = (
      <ButtonGroupButton
        element={children[i]}
        key={i}
        isFirst={i === 0}
        isLast={isLast(children, i)}
        variant={variant}
        size={size}
        color={color}
        elevated={elevated}
        type={children[i].props.type ?? type}
        className={children[i].props.clasName}
      />
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

import React, { type ReactElement, forwardRef, cloneElement, Fragment } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses, isLast } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import { type ToggleButtonProps } from '../ToggleButton/ToggleButton';
import ToggleButtonGroupButton from './ToggleButtonGroupButton';
import toggleButtonGroupConfig from './toggleButtonGroupConfig';

export type ToggleButtonGroupDefaultProps = {
  vertical?: boolean;
  uncheckedVariant?: Variants;
  variant?: Variants;
  uncheckedColor?: Colors;
  color?: Colors;
  size?: Sizes;
  inner?: boolean;
  icon?: boolean;
  bordered?: boolean;
  block?: boolean;
  shadow?: boolean;
  noRipple?: boolean;
};

export type ToggleButtonGroupProps = FlexProps &
ToggleButtonGroupDefaultProps & {
  children?: ReactElement<ToggleButtonProps> | Array<ReactElement<ToggleButtonProps>>;
};

const ToggleButtonGroup = forwardRef<HTMLDivElement, ToggleButtonGroupProps>((props, ref) => {
  const {
    vertical,
    uncheckedVariant,
    variant,
    uncheckedColor,
    color,
    size,
    inner,
    icon,
    bordered,
    block,
    shadow,
    noRipple,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('toggleButtonGroup', toggleButtonGroupConfig.defaultProps, props);

  /* --- Set classes --- */
  const styles = toggleButtonGroupConfig.styles.root;

  const mergedClassName = mergeClasses(
    styles.base,
    block && styles.block,
    defaultClassName,
    className
  );

  /* --- Set buttons --- */
  let buttonNodes;

  if (children && !Array.isArray(children)) {
    buttonNodes = cloneElement(children, {
      uncheckedVariant,
      variant,
      uncheckedColor,
      color,
      size,
      inner,
      icon,
      bordered,
      block,
      shadow,
      noRipple
    });
  }

  if (children && Array.isArray(children)) {
    buttonNodes = [];

    for (let i = 0; i < children.length; i++) {
      buttonNodes[i] = (
        <Fragment key={i}>
          <ToggleButtonGroupButton
            position={i === 0 ? 'left' : isLast(children, i) ? 'right' : 'middle'}
            vertical={vertical}
            uncheckedVariant={uncheckedVariant}
            variant={variant}
            uncheckedColor={uncheckedColor}
            color={color}
            size={size}
            inner={inner}
            icon={icon}
            bordered={bordered}
            block={block}
            shadow={shadow}
            noRipple={noRipple}
            element={children[i]}
          />
        </Fragment>
      );
    }
  }

  return (
    <Flex
      direction={vertical ? 'col' : 'row'}
      justify="start"
      align="stretch"
      wrap="nowrap"
      gap="none"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {buttonNodes}
    </Flex>
  );
});

ToggleButtonGroup.displayName = 'ToggleButtonGroup';

export default ToggleButtonGroup;

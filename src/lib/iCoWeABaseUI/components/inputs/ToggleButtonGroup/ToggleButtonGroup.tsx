import React, { type ReactElement, forwardRef, cloneElement, Fragment } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import { isLast } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import buttonGroupConfig from '../ButtonGroup/buttonGroupConfig';
import { type ToggleButtonProps } from '../ToggleButton/ToggleButton';
import ToggleButtonGroupButton from './ToggleButtonGroupButton';
import toggleButtonGroupConfig from './toggleButtonGroupConfig';

export type ToggleButtonGroupDefaultProps = {
  vertical?: boolean;
  variant?: Variants;
  color?: Colors;
  size?: Sizes;
  icon?: boolean;
  border?: boolean;
  block?: boolean;
  shadow?: boolean;
  noRipple?: boolean;
};

export type ToggleButtonGroupProps = FlexProps &
ToggleButtonGroupDefaultProps & {
  checkedVariant?: Variants;
  checkedColor?: Colors;
  children?: ReactElement<ToggleButtonProps> | Array<ReactElement<ToggleButtonProps>>;
};

const ToggleButtonGroup = forwardRef<HTMLDivElement, ToggleButtonGroupProps>((props, ref) => {
  const {
    vertical,
    variant,
    color,
    size,
    icon,
    border,
    block,
    shadow,
    noRipple,
    checkedVariant,
    checkedColor,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('toggleButtonGroup', toggleButtonGroupConfig.defaultProps, props);

  /* --- Set classes --- */
  const styles = buttonGroupConfig.styles.root;

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
      variant,
      color,
      size,
      icon,
      border,
      block,
      shadow,
      noRipple,
      checkedVariant,
      checkedColor
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
            variant={variant}
            color={color}
            size={size}
            icon={icon}
            border={border}
            block={block}
            shadow={shadow}
            noRipple={noRipple}
            checkedVariant={checkedVariant}
            checkedColor={checkedColor}
            element={children[i]}
          />
        </Fragment>
      );
    }
  }

  return (
    <Flex
      direction={vertical ? 'col' : 'row'}
      wrap="nowrap"
      justify="start"
      align="stretch"
      gap="none"
      grow={false}
      block={block}
      role="group"
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

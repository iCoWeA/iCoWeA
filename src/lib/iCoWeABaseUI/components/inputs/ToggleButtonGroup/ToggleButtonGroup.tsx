import React, { type ReactElement, forwardRef, useMemo, cloneElement, Fragment } from 'react';

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
  size?: Sizes;
  block?: boolean;
  icon?: boolean;
  variant?: Variants;
  color?: DefaultColors;
  border?: boolean;
  radius?: Radiuses;
  noRipple?: boolean;
};

export type ToggleButtonGroupProps = FlexProps &
ToggleButtonGroupDefaultProps & {
  checkedVariant?: Variants;
  checkedColor?: DefaultColors;
  children?: ReactElement<ToggleButtonProps> | Array<ReactElement<ToggleButtonProps>>;
};

const ToggleButtonGroup = forwardRef<HTMLDivElement, ToggleButtonGroupProps>((props, ref) => {
  const {
    vertical,
    size,
    block,
    icon,
    variant,
    color,
    border,
    radius,
    noRipple,
    checkedVariant,
    checkedColor,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('toggleButtonGroup', toggleButtonGroupConfig.defaultProps, props);

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = buttonGroupConfig.styles.root;

    return mergeClasses(styles.base, block && styles.block, defaultClassName, className);
  }, [block, defaultClassName, className]);

  /* --- Set buttons --- */
  let buttonNodes;

  if (children && !Array.isArray(children)) {
    buttonNodes = cloneElement(children, {
      size,
      block,
      icon,
      variant,
      color,
      border,
      radius,
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
            placement={i === 0 ? 'left' : isLast(children, i) ? 'right' : 'middle'}
            vertical={vertical}
            size={size}
            block={block}
            icon={icon}
            variant={variant}
            color={color}
            border={border}
            radius={radius}
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
      block={block}
      className={mergedClassName}
      role="group"
      ref={ref}
      {...restProps}
    >
      {buttonNodes}
    </Flex>
  );
});

ToggleButtonGroup.displayName = 'ToggleButtonGroup';

export default ToggleButtonGroup;

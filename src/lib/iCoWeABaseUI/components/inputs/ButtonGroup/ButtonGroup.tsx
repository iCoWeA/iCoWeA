import React, { type ReactElement, forwardRef, useMemo, cloneElement, Fragment } from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import { isLast } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import { type ButtonProps } from '../Button/Button';
import ButtonGroupButton from './ButtonGroupButton';
import buttonGroupConfig from './buttonGroupConfig';

export type ButtonGroupDefaultProps = {
  vertical?: boolean;
  size?: Sizes;
  block?: boolean;
  icon?: boolean;
  variant?: Variants;
  color?: DefaultColors;
  border?: boolean;
  divided?: boolean;
  radius?: Radiuses;
  loading?: boolean;
  noRipple?: boolean;
};

export type ButtonGroupProps = FlexProps &
ButtonGroupDefaultProps & {
  children?: ReactElement<ButtonProps> | Array<ReactElement<ButtonProps>>;
};

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
  const {
    vertical,
    size,
    block,
    icon,
    variant,
    color,
    border,
    divided,
    radius,
    loading,
    noRipple,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('buttonGroup', buttonGroupConfig.defaultProps, props);

  const theme = useTheme();

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
      loading,
      noRipple
    });
  }

  if (children && Array.isArray(children)) {
    buttonNodes = [];

    for (let i = 0; i < children.length; i++) {
      buttonNodes[i] = (
        <Fragment key={i}>
          <ButtonGroupButton
            placement={i === 0 ? 'left' : isLast(children, i) ? 'right' : 'middle'}
            theme={theme}
            vertical={vertical}
            size={size}
            block={block}
            icon={icon}
            variant={variant}
            color={color}
            border={border}
            divided={divided}
            radius={radius}
            loading={loading}
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

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;

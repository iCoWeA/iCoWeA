import React, { type ReactElement, forwardRef, cloneElement, Fragment } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses, isLast } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import { type ButtonProps } from '../Button/Button';
import ButtonGroupButton from './ButtonGroupButton';
import buttonGroupConfig from './buttonGroupConfig';

export type ButtonGroupDefaultProps = {
  vertical?: boolean;
  divided?: boolean;
  variant?: Variants;
  color?: Colors;
  size?: Sizes;
  icon?: boolean;
  bordered?: boolean;
  block?: boolean;
  shadow?: boolean;
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
    divided,
    variant,
    color,
    size,
    icon,
    bordered,
    block,
    shadow,
    loading,
    noRipple,
    className,
    defaultClassName,
    children,
    ...restProps
  } = useConfig('buttonGroup', buttonGroupConfig.defaultProps, props);

  const theme = useTheme();

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
      bordered,
      block,
      shadow,
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
            position={i === 0 ? 'left' : isLast(children, i) ? 'right' : 'middle'}
            vertical={vertical}
            theme={theme}
            variant={variant}
            color={color}
            size={size}
            icon={icon}
            divided={divided}
            bordered={bordered}
            block={block}
            shadow={shadow}
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
      role="group"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {buttonNodes}
    </Flex>
  );
});

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;

import React, { forwardRef, useMemo } from 'react';

import DefaultSpinner, {
  type DefaultSpinnerProps
} from '../../../../iCoWeAUI/components/DefaultSpinner/DefaultSpinner';
import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import { cutTextColor } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import SpinnerLabel, { type SpinnerLabelDefaultProps } from './SpinnerLabel';
import spinnerConfig from './spinnerConfig';

export type SpinnerDefaultProps = {
  size?: AllSizes;
  color?: DefaultTextColors;
  stable?: boolean;
  value?: string | number;
};

export type SpinnerProps = DefaultSpinnerProps &
SpinnerDefaultProps & {
  innerBar?: DefaultTextColors;
  containerProps?: FlexProps;
  labelProps?: SpinnerLabelDefaultProps;
  disabled?: boolean;
};

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
  const {
    size,
    color,
    stable,
    value,
    innerBar,
    containerProps,
    labelProps,
    defaultClassName,
    className,
    disabled,
    children,
    ...restProps
  } = useConfig('spinner', spinnerConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = spinnerConfig.styles.root;

    return mergeClasses(styles.base, defaultClassName, className);
  }, [defaultClassName, className]);

  return (
    <Flex
      direction="row"
      wrap="nowrap"
      justify="start"
      align="stretch"
      gap="none"
      position={children ? 'relative' : 'static'}
      className={mergedClassName}
      ref={ref}
      {...containerProps}
    >
      <DefaultSpinner
        size={size}
        color={color}
        stable={stable}
        value={value}
        innerBar={innerBar}
        disabled={disabled}
        {...restProps}
      />
      {children && (
        <SpinnerLabel
          theme={theme}
          size={size}
          variant={color.startsWith('on') ? 'default' : 'text'}
          color={cutTextColor(color)}
          disabled={disabled}
          {...labelProps}
        >
          {children}
        </SpinnerLabel>
      )}
    </Flex>
  );
});

Spinner.displayName = 'Spinner';

export default Spinner;

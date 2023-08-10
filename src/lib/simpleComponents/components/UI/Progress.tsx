import React, {
  forwardRef,
  useContext,
  type BaseHTMLAttributes,
  type MutableRefObject
} from 'react';
import {
  type ProgressSizes,
  type ProgressColors
} from '../../configs/progressConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses, mergeStyles } from '../../utils/styleHelper';

export interface ProgressDefaultProps {
  value?: number | string;
  size?: ProgressSizes;
  color?: ProgressColors;
  rootProps?: BaseHTMLAttributes<HTMLDivElement>;
}

export interface ProgressProps
  extends ProgressDefaultProps,
  BaseHTMLAttributes<HTMLDivElement> {
  barRef?: MutableRefObject<HTMLDivElement | undefined>;
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value,
      size,
      color,
      rootProps,
      className: barClassName,
      style: barStyle,
      children: barLabel,
      barRef,
      ...restBarProps
    },
    rootRef
  ) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.progress;
    const rootStyles = styles.root;
    const barStyles = styles.bar;

    value = value ?? defaultProps.value;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    rootProps = rootProps ?? defaultProps.rootProps;

    /* Set root props */
    const { className: rootClassName, ...restRootProps } = rootProps;

    const mergedRootClassName = twMerge(
      mergeClasses(
        rootStyles.base,
        barLabel === undefined && rootStyles.sizes.default[size],
        barLabel !== undefined && rootStyles.sizes.label[size],
        rootStyles.colors[theme][color],
        rootClassName
      )
    );

    /* Set bar props */
    const mergedBarStyle = mergeStyles({ width: `${value}%` }, barStyle);

    const mergedBarClassName = twMerge(
      mergeClasses(barStyles.base, barStyles.colors[theme][color], barClassName)
    );

    const setBarRef: (element: HTMLDivElement) => void = (element) => {
      if (barRef !== undefined) {
        barRef.current = element;
      }
    };

    return (
      <div
        className={mergedRootClassName}
        ref={rootRef}
        {...restRootProps}
      >
        <div
          style={mergedBarStyle}
          className={mergedBarClassName}
          ref={setBarRef}
          {...restBarProps}
        >
          {barLabel}
        </div>
      </div>
    );
  }
);

Progress.displayName = 'Progress';

export default Progress;

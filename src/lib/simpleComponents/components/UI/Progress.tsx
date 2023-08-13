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

export interface ProgressProps extends BaseHTMLAttributes<HTMLDivElement> {
  value?: number | string;
  size?: ProgressSizes;
  color?: ProgressColors;
  componentsProps?: {
    root?: BaseHTMLAttributes<HTMLDivElement>;
  };
  barRef?: MutableRefObject<HTMLDivElement | undefined>;
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value,
      size,
      color,
      componentsProps,
      className: barClassName,
      style: barStyle,
      children: barLabel,
      barRef,
      ...restBarProps
    },
    rootRef
  ) => {
    const { theme, config } = useContext(themeContext);
    const {
      defaultProps,
      styles: { root: rootStyles, bar: barStyles }
    } = config.progress;

    value = value ?? defaultProps.value;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;

    /* Set root props */
    const { className: rootClassName, ...restRootProps } =
      componentsProps?.root ?? defaultProps.componentsProps.root;

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

    const setBarRef = (element: HTMLDivElement): void => {
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

import React, { forwardRef, useContext, type BaseHTMLAttributes, type CSSProperties, type MutableRefObject, type ReactNode } from 'react';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeStyles, mergeProps } from '../../utils/propsHelper';

export interface ProgressProps extends BaseHTMLAttributes<HTMLDivElement> {
  value?: number | string;
  size?: Sizes;
  color?: Colors;
  rootProps?: BaseHTMLAttributes<HTMLDivElement>;
  barRef?: MutableRefObject<HTMLDivElement> | null;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>((props, rootRef) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.progress;
  const {
    value,
    size,
    color,
    rootProps,
    barRef,
    style: barStyle,
    className: barClassName,
    children: barChildren,
    ...restBarProps
  } = mergeProps(defaultProps, props);

  /* Set root props */
  const rootStyles = styles.root;
  const { className: rootClassName, ...restRootProps } = rootProps;

  const mergedRootClassName = mergeClasses(
    rootStyles.base,
    barChildren === undefined && rootStyles.sizes.default[size],
    barChildren !== undefined && rootStyles.sizes.label[size],
    rootStyles.color[theme],
    rootClassName
  );

  /* Set bar props */
  const barStyles = styles.bar;

  const setBarRef = (element: HTMLDivElement): void => {
    if (barRef !== undefined && barRef !== null) {
      barRef.current = element;
    }
  };

  const mergedBarStyle = mergeStyles({ width: `${value}%` }, barStyle);

  const mergedBarClassName = mergeClasses(barStyles.base, barStyles.colors[theme][color], barClassName);

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
        {barChildren}
      </div>
    </div>
  );
});

Progress.displayName = 'Progress';

export default Progress;

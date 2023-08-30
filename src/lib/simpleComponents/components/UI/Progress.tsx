import React, { forwardRef, useContext, type BaseHTMLAttributes, type CSSProperties, type MutableRefObject, type ReactNode } from 'react';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeStyles, mergeProps } from '../../utils/propsHelper';

export interface ProgressProps extends BaseHTMLAttributes<HTMLDivElement> {
  value?: number | string;
  size?: Sizes;
  color?: Colors;
  containerProps?: BaseHTMLAttributes<HTMLDivElement>;
  barRef?: MutableRefObject<HTMLDivElement> | null;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>((props, containerRef) => {
  /* --- Set default props --- */
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.progress;
  const {
    value,
    size,
    color,
    containerProps,
    barRef,
    style: barStyle,
    className: barClassName,
    children: barChildren,
    ...restBarProps
  } = mergeProps(defaultProps, props);

  /* --- Set container props --- */
  const containerStyles = styles.container;
  const { className: containerClassName, ...restContainerProps } = containerProps;

  const mergedContainerClassName = mergeClasses(
    containerStyles.base,
    barChildren === undefined && containerStyles.sizes.default[size],
    barChildren !== undefined && containerStyles.sizes.label[size],
    containerStyles.color[theme],
    containerClassName
  );

  /* --- Set bar props --- */
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
      className={mergedContainerClassName}
      ref={containerRef}
      {...restContainerProps}
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

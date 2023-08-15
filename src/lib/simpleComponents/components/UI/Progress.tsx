import React, { forwardRef, useContext, type BaseHTMLAttributes, type MutableRefObject } from 'react';
import { type ProgressDefaultProps } from '../../configs/progressConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeStyles, setDefaultProps } from '../../utils/propsHelper';

export interface ProgressProps extends ProgressDefaultProps, BaseHTMLAttributes<HTMLDivElement> {
  barRef?: MutableRefObject<HTMLDivElement | undefined>;
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>((props, rootRef) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.progress;
  const {
    value,
    size,
    color,
    rootProps,
    className: barClassName,
    style: barStyle,
    children: barChildren,
    barRef,
    ...restBarProps
  } = setDefaultProps(props, defaultProps);

  /* Set root props */
  const rootStyles = styles.root;
  const { className: rootClassName, ...restRootProps } = rootProps;

  const mergedRootClassName = mergeClasses(
    rootStyles.base,
    barChildren === undefined && rootStyles.sizes.default[size],
    barChildren !== undefined && rootStyles.sizes.label[size],
    rootStyles.colors[theme][color],
    rootClassName
  );

  /* Set bar props */
  const barStyles = styles.bar;
  const mergedBarStyle = mergeStyles({ width: `${value}%` }, barStyle);

  const mergedBarClassName = mergeClasses(barStyles.base, barStyles.colors[theme][color], barClassName);

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
        {barChildren}
      </div>
    </div>
  );
});

Progress.displayName = 'Progress';

export default Progress;

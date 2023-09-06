import React, { type BaseHTMLAttributes, type MutableRefObject, forwardRef, useContext } from 'react';
import progressConfig from '../../../configs/progressConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';
import ProgressContainer from './ProgressContainer';

export interface ProgressProps extends BaseHTMLAttributes<HTMLDivElement> {
  value?: number | string;
  size?: Sizes;
  color?: Colors;
  containerProps?: BaseHTMLAttributes<HTMLDivElement>;
  barRef?: MutableRefObject<HTMLDivElement> | null;
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = progressConfig.styles.bar;
  const { value, size, color, containerProps, barRef, style, className, children, ...restBarProps } = { ...progressConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedStyle = { width: `${value}%`, ...style };

  const mergedClassName = mergeClasses(styles.base, styles.colors[theme][color], className);

  return (
    <ProgressContainer
      label={children !== undefined}
      size={size}
      ref={ref}
      {...containerProps}
    >
      <div
        style={mergedStyle}
        className={mergedClassName}
        ref={barRef}
        {...restBarProps}
      >
        {children}
      </div>
    </ProgressContainer>
  );
});

Progress.displayName = 'Progress';

export default Progress;

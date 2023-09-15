import React, { type BaseHTMLAttributes, forwardRef, useContext, type MutableRefObject } from 'react';
import progressConfig from '../../configs/progressConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

/********************************************************************************
 *
 *   Container
 *
 */
interface ContainerProps extends BaseHTMLAttributes<HTMLDivElement> {}

const Container = forwardRef<HTMLDivElement, ContainerProps>(({ className, ...restProps }, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = progressConfig.styles.container;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.color[theme], className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Container.displayName = 'Container';

/********************************************************************************
 *
 *   Progress
 *
 */
export interface ProgressProps extends BaseHTMLAttributes<HTMLDivElement> {
  value?: number | string;
  color?: Colors;
  containerProps?: BaseHTMLAttributes<HTMLDivElement>;
  barRef?: MutableRefObject<HTMLDivElement> | null;
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = progressConfig.styles.bar;
  const { value, color, containerProps, barRef, style, className, ...restProps } = { ...progressConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedStyle = { width: `${value}%`, ...style };

  const mergedClassName = mergeClasses(styles.base, styles.colors[theme][color], className);

  return (
    <Container
      ref={ref}
      {...containerProps}
    >
      <div
        style={mergedStyle}
        className={mergedClassName}
        ref={barRef}
        {...restProps}
      />
    </Container>
  );
});

Progress.displayName = 'Progress';

export default Progress;

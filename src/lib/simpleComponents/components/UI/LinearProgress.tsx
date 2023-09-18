import React, { type BaseHTMLAttributes, forwardRef, useContext, type FC, type MutableRefObject, type ReactNode } from 'react';
import linearProgressConfig from '../../configs/linearProgressConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

/* ARIA
 *
 * Set aria-labeledby to title
 *
 */

/********************************************************************************
 *
 *   Container
 *
 */
interface ContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  label: boolean;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(({ label, className, ...restProps }, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = linearProgressConfig.styles.container;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.color[theme], label && styles.label, className);

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
 *   Buffer
 *
 */
interface BufferProps extends BaseHTMLAttributes<HTMLDivElement> {
  value: number | string;
  color: Colors;
}

const Buffer: FC<BufferProps> = ({ value, color, className, style, ...restProps }) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = linearProgressConfig.styles.buffer;

  /* --- Set props --- */
  const mergedStyle = { width: `${value}%`, ...style };

  const mergedClassName = mergeClasses(styles.base, styles.colors[theme][color], className);

  return (
    <div
      style={mergedStyle}
      className={mergedClassName}
      {...restProps}
    />
  );
};

/********************************************************************************
 *
 *   Linear Progress
 *
 */
export interface LinearProgressProps extends BaseHTMLAttributes<HTMLDivElement> {
  value?: number | string;
  bufferValue?: number | string;
  color?: Colors;
  containerProps?: BaseHTMLAttributes<HTMLDivElement>;
  bufferProps?: BaseHTMLAttributes<HTMLDivElement>;
  barRef?: MutableRefObject<HTMLDivElement> | null;
}

const LinearProgress = forwardRef<HTMLDivElement, LinearProgressProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = linearProgressConfig.styles.bar;
  const { value, bufferValue, color, containerProps, bufferProps, barRef, style, className, children, ...restProps } = {
    ...linearProgressConfig.defaultProps,
    ...props
  };

  /* --- Buffer props --- */
  let bufferNode: ReactNode;

  if (bufferValue !== undefined) {
    bufferNode = (
      <Buffer
        value={bufferValue}
        color={color}
        {...bufferProps}
      />
    );
  }

  /* --- Set props --- */
  const mergedStyle = { width: `${value}%`, ...style };

  const mergedClassName = mergeClasses(styles.base, styles.colors[theme][color], className);

  return (
    <Container
      role="progressbar"
      aria-valuenow={+value}
      aria-valuemax={100}
      aria-valuemin={0}
      label={children !== undefined}
      ref={ref}
      {...containerProps}
    >
      {bufferNode}
      <div
        style={mergedStyle}
        className={mergedClassName}
        ref={barRef}
        {...restProps}
      >
        {children}
      </div>
    </Container>
  );
});

LinearProgress.displayName = 'LinearProgress';

export default LinearProgress;

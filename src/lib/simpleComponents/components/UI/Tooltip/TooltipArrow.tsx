import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import tooltipConfig from '../../../configs/tooltipConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

interface TooltipArrowProps extends BaseHTMLAttributes<HTMLDivElement> {
  color: Colors;
}

export const setArrowPosition = (element: HTMLElement | null, position: Positions): void => {
  if (element === null) {
    return;
  }

  const splitedPosition = position.split('-')[0];

  if (splitedPosition === 'top') {
    element.style.top = '100%';
    element.style.left = 'calc(50% - 0.25rem)';
    element.style.transform = 'rotate(180deg)';
    element.style.translate = '0 0';
  }

  if (splitedPosition === 'bottom') {
    element.style.top = '0';
    element.style.left = 'calc(50% - 0.25rem)';
    element.style.transform = 'rotate(0deg)';
    element.style.translate = '0 -100%';
  }

  if (splitedPosition === 'left') {
    element.style.top = 'calc(50% - 0.25rem)';
    element.style.left = '100%';
    element.style.transform = 'rotate(90deg)';
    element.style.translate = '0 0';
  }

  if (splitedPosition === 'right') {
    element.style.top = 'calc(50% - 0.25rem)';
    element.style.left = '0';
    element.style.transform = 'rotate(-90deg)';
    element.style.translate = '-100% 0';
  }
};

const TooltipArrow = forwardRef<HTMLDivElement, TooltipArrowProps>(({ color, className, ...restProps }, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = tooltipConfig.styles.arrow;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.colors[theme][color], className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

TooltipArrow.displayName = 'TooltipArrow';

export default TooltipArrow;

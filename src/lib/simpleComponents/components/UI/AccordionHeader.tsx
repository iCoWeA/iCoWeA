import React, {
  type ButtonHTMLAttributes,
  forwardRef,
  useContext,
  type SVGAttributes,
  type ReactNode,
  type MouseEvent
} from 'react';
import { type AccordionHeaderColors } from '../../configs/accordionHeaderConfig';
import accordionContext from '../../contexts/accordion';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses, mergeStyles } from '../../utils/styleHelper';
import { States } from '../../hooks/useTransition';

interface AccordionHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: AccordionHeaderColors;
  icon?: boolean;
  componentsProps?: {
    icon?: SVGAttributes<SVGSVGElement>;
  };
}

const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>(
  (
    {
      color,
      icon,
      componentsProps,
      onClick: onRootClick,
      disabled: isRootDisabled,
      className: rootClassName,
      children: rootChildren,
      ...restRootProps
    },
    rootRef
  ) => {
    const { state, disabled, duration, onClick } = useContext(accordionContext);
    const { theme, config } = useContext(themeContext);
    const {
      defaultProps,
      styles: { root: rootStyles, icon: iconStyles }
    } = config.accordionHeader;
    let iconNode: ReactNode;

    color = color ?? defaultProps.color;
    icon = icon ?? defaultProps.icon;

    /* Set root props */
    const clickRootHandler = (event: MouseEvent<HTMLButtonElement>): void => {
      onClick();

      if (onRootClick !== undefined) {
        onRootClick(event);
      }
    };

    const mergedRootClassName = twMerge(
      mergeClasses(
        rootStyles.base,
        rootStyles.colors[theme][color],
        rootClassName
      )
    );

    /* Set icon props */
    if (icon) {
      const {
        style: iconStyle,
        className: iconClassName,
        ...restIconProps
      } = componentsProps?.icon ?? defaultProps.componentsProps.icon;

      const mergedIconStyle = mergeStyles(
        { transitionDuration: `${duration}ms` },
        iconStyle
      );

      const mergedIconClassName = twMerge(
        mergeClasses(
          iconStyles.base,
          (state === States.ENTERING || state === States.ENTERED) &&
            iconStyles.open,
          iconClassName
        )
      );

      iconNode = (
        <svg
          style={mergedIconStyle}
          className={mergedIconClassName}
          {...restIconProps}
        >
          <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
        </svg>
      );
    }

    return (
      <button
        onClick={clickRootHandler}
        disabled={isRootDisabled === true || disabled}
        className={mergedRootClassName}
        ref={rootRef}
        {...restRootProps}
      >
        {rootChildren}
        {iconNode}
      </button>
    );
  }
);

AccordionHeader.displayName = 'AccordionHeader';

export default AccordionHeader;

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

export interface AccordionHeaderDefaultProps {
  color?: AccordionHeaderColors;
  icon?: boolean;
  componentsProps?: {
    icon?: SVGAttributes<SVGSVGElement>;
  };
}

interface AccordionHeaderProps
  extends AccordionHeaderDefaultProps,
  ButtonHTMLAttributes<HTMLButtonElement> {}

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
    const { isOpen, isDisabled, transitionDuration, onToggle } =
      useContext(accordionContext);
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.accordionHeader;
    const rootStyles = styles.root;
    let iconNode: ReactNode;

    color = color ?? defaultProps.color;
    icon = icon ?? defaultProps.icon;
    componentsProps = componentsProps ?? defaultProps.componentsProps;

    /* Set root props */
    const clickRootHandler = (event: MouseEvent<HTMLButtonElement>): void => {
      onToggle();

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
      const iconStyles = styles.icon;
      const {
        style: iconStyle,
        className: iconClassName,
        ...restIconProps
      } = componentsProps.icon ?? {};

      const mergedIconStyle = mergeStyles(
        { transitionDuration: `${transitionDuration}ms` },
        iconStyle
      );

      const mergedIconClassName = twMerge(
        mergeClasses(iconStyles.base, isOpen && iconStyles.open, iconClassName)
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
        disabled={isRootDisabled === true || isDisabled}
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

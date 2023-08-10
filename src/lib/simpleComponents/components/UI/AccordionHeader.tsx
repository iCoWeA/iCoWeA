import React, {
  type ButtonHTMLAttributes,
  forwardRef,
  useContext,
  type MouseEventHandler,
  type SVGAttributes,
  type ReactNode
} from 'react';
import { type AccordionHeaderColors } from '../../configs/accordionHeaderConfig';
import accordionContext from '../../contexts/accordion';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface AccordionHeaderDefaultProps {
  color?: AccordionHeaderColors;
  icon?: boolean;
  iconProps?: SVGAttributes<SVGSVGElement>;
}

interface AccordionHeaderProps
  extends AccordionHeaderDefaultProps,
  ButtonHTMLAttributes<HTMLButtonElement> {}

const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>(
  (
    {
      color,
      icon,
      iconProps,
      onClick: onRootClick,
      disabled: rootDisabled,
      className: rootClassName,
      children: rootChildren,
      ...restRootProps
    },
    rootRef
  ) => {
    const { isOpen, isDisabled, onToggle } = useContext(accordionContext);
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.accordionHeader;
    const rootStyles = styles.root;
    let iconNode: ReactNode;

    color = color ?? defaultProps.color;
    icon = icon ?? defaultProps.icon;

    /* Set root props */
    const rootClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
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

      iconProps = iconProps ?? defaultProps.iconProps;

      const { className: iconClassName, ...restIconProps } = iconProps;

      const mergedIconClassName = twMerge(
        mergeClasses(iconStyles.base, isOpen && iconStyles.open, iconClassName)
      );

      iconNode = (
        <svg
          className={mergedIconClassName}
          {...restIconProps}
        >
          <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
        </svg>
      );
    }

    return (
      <button
        onClick={rootClickHandler}
        disabled={rootDisabled === true || isDisabled}
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

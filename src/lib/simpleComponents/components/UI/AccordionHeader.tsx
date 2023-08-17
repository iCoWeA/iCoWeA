import React, { type ButtonHTMLAttributes, forwardRef, useContext, type ReactNode, type MouseEvent, type MouseEventHandler, type SVGAttributes } from 'react';
import { type AccordionHeaderColors } from '../../configs/accordionHeaderConfig';
import accordionContext from '../../contexts/accordion';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeStyles, setDefaultProps } from '../../utils/propsHelper';

export interface AccordionHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: AccordionHeaderColors;
  icon?: boolean;
  iconProps?: SVGAttributes<SVGSVGElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
}

const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>((rootProps, rootRef) => {
  const { open, disabled, duration, onClick } = useContext(accordionContext);
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.accordionHeader;
  const {
    color,
    icon,
    iconProps,
    onClick: onRootClick,
    disabled: rootDisabled,
    className: rootClassName,
    children: rootChildren,
    ...restRootProps
  } = setDefaultProps(rootProps, { ...defaultProps, disabled });
  let iconNode: ReactNode;

  /* Set root props */
  const rootStyles = styles.root;
  const clickRootHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    onClick();

    if (onRootClick !== undefined) {
      onRootClick(event);
    }
  };

  const mergedRootClassName = mergeClasses(rootStyles.base, rootStyles.colors[theme][color], rootClassName);

  /* Set icon props */
  if (icon) {
    const iconStyles = styles.icon;
    const { style: iconStyle, className: iconClassName, ...restIconProps } = iconProps;

    const mergedIconStyle = mergeStyles({ transitionDuration: `${duration}ms` }, iconStyle);

    const mergedIconClassName = mergeClasses(iconStyles.base, open && iconStyles.open, iconClassName);

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
      disabled={rootDisabled}
      className={mergedRootClassName}
      ref={rootRef}
      {...restRootProps}
    >
      {rootChildren}
      {iconNode}
    </button>
  );
});

AccordionHeader.displayName = 'AccordionHeader';

export default AccordionHeader;

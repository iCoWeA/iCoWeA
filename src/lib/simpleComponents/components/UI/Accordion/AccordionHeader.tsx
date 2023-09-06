import React, { type ButtonHTMLAttributes, type BaseHTMLAttributes, forwardRef, useContext, type ReactNode } from 'react';
import accordionHeaderConfig from '../../../configs/accordionHeaderConfig';
import accordionContext from '../../../contexts/accordion';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';
import Icon, { type IconProps } from '../Icon/Icon';
import AccordionHeaderIconContainer from './AccordionHeaderIconContainer';

export interface AccordionHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Colors;
  disableIcon?: boolean;
  iconProps?: IconProps;
  iconContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
}

const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>((props, ref) => {
  /* --- Set context props --- */
  const { open: isAccordionOpen, disabled: isAccordionDisabled, onClick: onAccordionClick } = useContext(accordionContext);
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = accordionHeaderConfig.styles.button;
  const { color, disableIcon, iconProps, iconContainerProps, disabled, className, children, ...restProps } = {
    ...accordionHeaderConfig.defaultProps,
    disabled: isAccordionDisabled,
    ...props
  };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.colors[theme][color], className);

  /* --- Set icon --- */
  let iconNode: ReactNode;

  if (!disableIcon) {
    iconNode = (
      <Icon {...iconProps}>
        <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
      </Icon>
    );
  }

  /* --- Set icon container --- */
  let iconContainerNode: ReactNode;

  if (!disableIcon) {
    iconContainerNode = (
      <AccordionHeaderIconContainer
        open={isAccordionOpen}
        {...iconContainerProps}
      >
        {iconNode}
      </AccordionHeaderIconContainer>
    );
  }

  return (
    <button
      onClick={onAccordionClick}
      disabled={disabled}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {children}
      {iconContainerNode}
    </button>
  );
});

AccordionHeader.displayName = 'AccordionHeader';

export default AccordionHeader;

import React, { type ButtonHTMLAttributes, forwardRef, useContext } from 'react';
import accordionHeaderConfig from '../../../configs/accordionHeaderConfig';
import accordionContext from '../../../contexts/accordion';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';
import { type IconProps } from '../Icon/Icon';
import AccordionIcon from './AccordionIcon';

export interface AccordionHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ContainerColors;
  iconProps?: IconProps;
}

const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>((props, ref) => {
  /* --- Set context props --- */
  const {
    onToggle: onAccordionToggle,
    open: isAccordionOpen,
    icon: accordionIcon,
    id: accordionId,
    disabled: isAccordionDisabled
  } = useContext(accordionContext);
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = accordionHeaderConfig.styles.button;
  const { color, iconProps, disabled, className, children, ...restProps } = {
    ...accordionHeaderConfig.defaultProps,
    disabled: isAccordionDisabled,
    ...props
  };

  /* --- Set icon props --- */
  let iconNode = accordionIcon;

  if (iconNode === undefined) {
    iconNode = (
      <AccordionIcon
        open={isAccordionOpen}
        {...iconProps}
      />
    );
  }

  /* --- Set props --- */
  const ariaContarols = accordionId === undefined ? undefined : `acd-body-${accordionId}`;
  const id = accordionId === undefined ? undefined : `acd-header-${accordionId}`;

  const mergedClassName = mergeClasses(styles.base, styles.divider[theme], styles.colors[theme][color], className);

  return (
    <button
      aria-expanded={isAccordionOpen}
      aria-controls={ariaContarols}
      id={id}
      onClick={onAccordionToggle}
      disabled={disabled}
      type="button"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {children}
      {iconNode}
    </button>
  );
});

AccordionHeader.displayName = 'AccordionHeader';

export default AccordionHeader;

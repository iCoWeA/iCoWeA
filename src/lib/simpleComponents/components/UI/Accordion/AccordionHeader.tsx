import React, { type BaseHTMLAttributes, type FC, type ButtonHTMLAttributes, type ReactNode, forwardRef, useContext } from 'react';
import accordionHeaderConfig from '../../../configs/accordionHeaderConfig';
import accordionContext from '../../../contexts/accordion';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

interface AccordionDecorationContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  position: 'start' | 'end';
}

const AccordionDecorationContainer: FC<AccordionDecorationContainerProps> = ({ position, className, ...restProps }) => {
  /* --- Set default props --- */
  const styles = accordionHeaderConfig.styles.container;

  const mergedClassName = mergeClasses(styles.base, styles.positions[position], className);

  return (
    <div
      className={mergedClassName}
      {...restProps}
    />
  );
};

export interface AccordionHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Colors;
  divider?: boolean;
  startDecoration?: ReactNode;
  endDecoration?: ReactNode;
  startDecorationContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  endDecorationContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
}

const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>((props, ref) => {
  /* --- Set context props --- */
  const { onToggle: onAccordionToggle, open: isAccordionOpen, id: accordionId, disabled: isAccordionDisabled } = useContext(accordionContext);
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = accordionHeaderConfig.styles;
  const {
    color,
    divider,
    startDecoration,
    endDecoration,
    startDecorationContainerProps,
    endDecorationContainerProps,
    disabled,
    className,
    children,
    ...restProps
  } = {
    ...accordionHeaderConfig.defaultProps,
    disabled: isAccordionDisabled,
    ...props
  };

  /* --- Set start decoration --- */
  let startDecorationNode = startDecoration;

  if (startDecorationNode !== undefined) {
    startDecorationNode = (
      <AccordionDecorationContainer
        position="start"
        {...startDecorationContainerProps}
      >
        {startDecoration}
      </AccordionDecorationContainer>
    );
  }

  /* --- Set end decoration --- */
  let endDecorationNode = endDecoration;

  if (endDecorationNode !== undefined) {
    endDecorationNode = (
      <AccordionDecorationContainer
        position="end"
        {...endDecorationContainerProps}
      >
        {endDecoration}
      </AccordionDecorationContainer>
    );
  }

  /* --- Set props --- */
  const ariaContarols = accordionId === undefined ? undefined : `acd-body-${accordionId}`;
  const id = accordionId === undefined ? undefined : `acd-header-${accordionId}`;

  const mergedClassName = mergeClasses(
    styles.button.base,
    styles.button.colors[theme],
    isAccordionOpen && styles.button.open[theme][color],
    styles.before.base,
    styles.before.colors[theme],
    isAccordionOpen && styles.before.open[theme][color],
    className
  );

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
      {startDecoration}
      {children}
      {endDecoration}
    </button>
  );
});

AccordionHeader.displayName = 'AccordionHeader';

export default AccordionHeader;

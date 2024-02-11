import React, { forwardRef, useState, useEffect, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import accordionContext from '../../../contexts/accordion';
import useConfig from '../../../hooks/useConfig';
import usePrevious from '../../../hooks/usePrevious';
import Stack, { type StackProps } from '../../layouts/Stack/Stack';
import accordionConfig from './accordionConfig';

export type AccordionDefaultProps = {
  size?: Sizes;
  variant?: Variants;
  color?: DefaultColors;
  border?: Borders;
  divider?: boolean;
  radius?: Radiuses;
  noRipple?: boolean;
};

export type AccordionProps = StackProps &
AccordionDefaultProps & {
  open?: boolean;
  defaultOpen?: boolean;
  openVariant?: Variants;
  openColor?: DefaultColors;
  leftExpandIcon?: boolean;
  rightExpandIcon?: boolean;
  indexId?: string;
};

const Accordion = forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
  const {
    size,
    variant,
    color,
    border,
    divider,
    noRipple,
    open,
    defaultOpen,
    openVariant,
    openColor,
    leftExpandIcon,
    rightExpandIcon,
    indexId,
    defaultClassName,
    className,
    disabled,
    children,
    ...restProps
  } = useConfig('accordion', accordionConfig.defaultProps, props);

  const prevOpen = usePrevious(open);

  const [isOpen, setIsOpen] = useState(defaultOpen ?? false);

  useEffect(() => {
    if (prevOpen !== undefined && open === undefined) {
      setIsOpen(prevOpen);
    }
  }, [open]);

  const context = useMemo(
    () => ({
      onToggle: open === undefined ? () => setIsOpen((isOpen) => !isOpen) : undefined,
      size,
      variant,
      color,
      divider,
      noRipple,
      open: open ?? isOpen,
      openVariant,
      openColor,
      leftExpandIcon,
      rightExpandIcon,
      indexId,
      disabled
    }),
    [
      size,
      variant,
      color,
      divider,
      noRipple,
      open,
      isOpen,
      openVariant,
      openColor,
      leftExpandIcon,
      rightExpandIcon,
      indexId,
      disabled
    ]
  );

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = accordionConfig.styles.root;

    return mergeClasses(styles.base, defaultClassName, className);
  }, [defaultClassName, className]);

  return (
    <Stack
      justify="start"
      align="stretch"
      gap="none"
      block
      variant={variant === 'solid' || variant === 'default' ? 'default' : 'text'}
      color={color}
      border={border}
      className={mergedClassName}
      disabled={disabled}
      ref={ref}
      {...restProps}
    >
      <accordionContext.Provider value={context}>{children}</accordionContext.Provider>
    </Stack>
  );
});

Accordion.displayName = 'Accordion';

export default Accordion;

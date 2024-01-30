import React, { forwardRef, useState, useEffect, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import accordionContext from '../../../contexts/accordion';
import useConfig from '../../../hooks/useConfig';
import usePrevious from '../../../hooks/usePrevious';
import Stack, { type StackProps } from '../../layouts/Stack/Stack';
import accordionConfig from './accordionConfig';

export type AccordionDefaultProps = {
  variant?: Variants;
  color?: Colors;
  size?: Sizes;
  border?: Borders;
  divider?: boolean;
  noRipple?: boolean;
};

export type AccordionProps = StackProps &
AccordionDefaultProps & {
  open?: boolean;
  defaultOpen?: boolean;
  leftExpandIcon?: boolean;
  rightExpandIcon?: boolean;
  openVariant?: Variants;
  openColor?: Colors;
  indexId?: string;
};

const Accordion = forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
  const {
    open,
    defaultOpen,
    indexId,
    variant,
    color,
    size,
    border,
    divider,
    noRipple,
    leftExpandIcon,
    rightExpandIcon,
    openVariant,
    openColor,
    disabled,
    defaultClassName,
    className,
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
      open: open ?? isOpen,
      variant,
      color,
      size,
      divider,
      noRipple,
      leftExpandIcon,
      rightExpandIcon,
      openVariant,
      openColor,
      indexId,
      disabled
    }),
    [
      open,
      isOpen,
      variant,
      color,
      size,
      divider,
      noRipple,
      leftExpandIcon,
      rightExpandIcon,
      openVariant,
      openColor,
      indexId,
      disabled
    ]
  );

  /* --- Set classes --- */
  const styles = accordionConfig.styles.root;

  const mergedClassName = mergeClasses(styles.base, defaultClassName, className);

  return (
    <Stack
      color={color}
      border={border}
      justify="start"
      align="stretch"
      gap="none"
      block
      disabled={disabled}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <accordionContext.Provider value={context}>{children}</accordionContext.Provider>
    </Stack>
  );
});

Accordion.displayName = 'Accordion';

export default Accordion;

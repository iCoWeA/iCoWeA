import React, { forwardRef, useState, useEffect, useMemo } from 'react';

import accordionContext from '../../../contexts/accordion';
import useConfig from '../../../hooks/useConfig';
import usePrevious from '../../../hooks/usePrevious';
import { mergeClasses } from '../../../utils/utils';
import Stack, { type StackProps } from '../../layouts/Stack/Stack';
import accordionConfig from './accordionConfig';

export type AccordionDefaultProps = {
  variant?: Variants;
  color?: Colors;
  size?: Sizes;
  bordered?: Borders;
  divider?: boolean;
};

export type AccordionProps = StackProps &
AccordionDefaultProps & {
  open?: boolean;
  defaultOpen?: boolean;
  leftExpandIcon?: boolean;
  rightExpandIcon?: boolean;
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
    bordered,
    divider,
    leftExpandIcon,
    rightExpandIcon,
    disabled,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('accordion', accordionConfig.defaultProps, props);

  const [isOpen, setIsOpen] = useState(defaultOpen ?? false);

  const prevOpen = usePrevious(open);

  /* --- Set prev state --- */
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
      leftExpandIcon,
      rightExpandIcon,
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
      leftExpandIcon,
      rightExpandIcon,
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
      bordered={bordered}
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

import React, { type FC, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import ExpandIcon, { type ExpandIconProps } from '../../feedback/ExpandIcon/ExpandIcon';
import accordionConfig from './accordionConfig';

export type AccordionExpandIconDefaultProps = ExpandIconProps;

export type AccordionExpandIconProps = AccordionExpandIconDefaultProps & {
  right?: boolean;
};

const AccordionExpandIcon: FC<AccordionExpandIconProps> = ({ right, className, ...restProps }) => {
  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = accordionConfig.styles.expandIcon;

    return mergeClasses(right && styles.right, className);
  }, [right, className]);

  return (
    <ExpandIcon
      size="md"
      color="inherit"
      className={mergedClassName}
      {...restProps}
    />
  );
};

AccordionExpandIcon.displayName = 'AccordionExpandIcon';

export default AccordionExpandIcon;

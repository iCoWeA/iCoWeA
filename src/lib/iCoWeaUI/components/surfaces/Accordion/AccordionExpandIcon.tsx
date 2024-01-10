import React, { type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import ExpandIcon, { type ExpandIconProps } from '../../feedback/ExpandIcon/ExpandIcon';
import accordionConfig from './accordionConfig';

export type AccordionExpandIconDefaultProps = ExpandIconProps;

export type AccordionExpandIconProps = AccordionExpandIconDefaultProps & {
  right?: boolean;
};

const AccordionExpandIcon: FC<AccordionExpandIconProps> = ({ right, className, ...restProps }) => {
  /* --- Set classes --- */
  const styles = accordionConfig.styles.expandIcon;

  const mergedClassName = mergeClasses(right && styles.right, className);

  return (
    <ExpandIcon
      className={mergedClassName}
      {...restProps}
    />
  );
};

AccordionExpandIcon.displayName = 'AccordionExpandIcon';

export default AccordionExpandIcon;

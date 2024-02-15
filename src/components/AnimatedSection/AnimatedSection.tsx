import React, { type FC } from 'react';

import Section, {
  type SectionProps
} from '../../lib/iCoWeABaseUI/components/layouts/Section/Section';

const AnimatedSection: FC<SectionProps> = (props) => (
  <Section
    className="animate-slide"
    {...props}
  />
);

export default AnimatedSection;

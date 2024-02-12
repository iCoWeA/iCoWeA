import React, { type FC } from 'react';

import Text from '../../../lib/iCoWeABaseUI/components/data-display/Text/Text';
import Footer from '../../../lib/iCoWeABaseUI/components/layouts/Footer/Footer';
import Link from '../../../lib/iCoWeARouterUI/components/Link/Link';

const StandardFooter: FC = () => (
  <Footer containerProps={{ className: 'max-lg:flex-col' }}>
    <Text align="center">Copyright © 2024 Richard Wagner. All Rights Reserved.</Text>
    <Text align="center">
      Designed by <Link to="/">Richard Wagner</Link>
    </Text>
  </Footer>
);

export default StandardFooter;

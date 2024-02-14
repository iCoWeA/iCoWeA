import React, { type FC } from 'react';
import { useSelector } from 'react-redux';

import Icon from '../../lib/iCoWeABaseUI/components/data-display/Icon/Icon';
import Text from '../../lib/iCoWeABaseUI/components/data-display/Text/Text';
import Footer from '../../lib/iCoWeABaseUI/components/layouts/Footer/Footer';
import Link from '../../lib/iCoWeARouterUI/components/Link/Link';
import { selectUser } from '../../store/slices/user';

const StandardFooter: FC = () => {
  const github = useSelector(selectUser).github;

  return (
    <Footer containerProps={{ className: 'max-lg:flex-col' }}>
      <Text align="center">Copyright © 2024 Richard Wagner. All Rights Reserved.</Text>
      <Text align="center">
        Designed by <Link to="/">Richard Wagner</Link>{' '}
        <Link
          to={github}
          target='_blanc'
          className="ml-4"
        >
          <Icon>
            <svg
              focusable="false"
              viewBox="0 0 24 24"
            >
              <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
            </svg>
          </Icon>
        </Link>
      </Text>
    </Footer>
  );
};

export default StandardFooter;

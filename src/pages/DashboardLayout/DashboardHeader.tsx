import React, { type FC } from 'react';

import Avatar from '../../lib/iCoWeaUI/components/data-display/Avatar/Avatar';
import Text from '../../lib/iCoWeaUI/components/data-display/Text/Text';
import Flex from '../../lib/iCoWeaUI/components/layouts/Flex/Flex';
import Header from '../../lib/iCoWeaUI/components/layouts/Header/Header';
import Stack from '../../lib/iCoWeaUI/components/layouts/Stack/Stack';

const DashboardHeader: FC = () => (
  <Header justify="end">
    <Flex gap="base">
      <Stack>
        <Text>Richard Wagner</Text>
        <Text
          size="sm"
          align="right"
        >
          Admin
        </Text>
      </Stack>
      <Avatar
        color="neutral"
        src={require('../../assets/images/photo.png')}
        alt="RW"
      />
    </Flex>
  </Header>
);

export default DashboardHeader;

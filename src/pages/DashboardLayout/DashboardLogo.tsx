import React, { type FC } from 'react';
import Link from '../../lib/simpleComponents/components/UI/Link/Link';

const DashboardLogo: FC = () => (
  <Link
    to="/"
    className="h-10"
  >
    <img
      src={require('../../assets/images/logo.png')}
      alt="logo"
      className='h-full'
    />
  </Link>
);

export default DashboardLogo;

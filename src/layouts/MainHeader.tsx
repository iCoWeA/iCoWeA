import React, { type FC } from 'react';
import { Link } from 'react-router-dom';
import Header from '../lib/simpleComponents/components/layouts/Header';

const MainHeader: FC = () => (
  <Header>
    <Link to="/">
      <img
        src={require('../assets/images/logo.png')}
        alt="Logo"
        className="h-md-h"
      />
    </Link>
  </Header>
);

export default MainHeader;

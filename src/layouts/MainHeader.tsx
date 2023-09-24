import React, { type FC } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../lib/simpleComponents/components/UI/Icon';
import IconButton from '../lib/simpleComponents/components/UI/IconButton';
import Header from '../lib/simpleComponents/components/layouts/Header';

const MainHeader: FC = () => (
  <Header>
    <Link to="/">
      <img
        src={require('../assets/images/logo.png')}
        alt="Logo"
        className="h-md"
      />
    </Link>
    <IconButton>
      <Icon>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </Icon>
    </IconButton>
  </Header>
);

export default MainHeader;

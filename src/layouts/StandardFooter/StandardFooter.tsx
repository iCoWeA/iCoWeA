import React, { type FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import GithubIcon from '../../components/Icons/GithubIcon';
import Text from '../../lib/iCoWeABaseUI/components/data-display/Text/Text';
import Footer from '../../lib/iCoWeABaseUI/components/layouts/Footer/Footer';
import { selectUser } from '../../store/slices/user';

const StandardFooter: FC = () => {
  const github = useSelector(selectUser).githubURL;

  return (
    <Footer containerProps={{ className: 'max-lg:flex-col' }}>
      <Text align="center">Copyright © 2024 Richard Wagner. All Rights Reserved.</Text>
      <Text align="center">
        Designed by <Link to="/">Richard Wagner</Link>{' '}
        <Link
          to={github}
          target="_blanc"
          className="ml-4"
        >
          <GithubIcon />
        </Link>
      </Text>
    </Footer>
  );
};

export default StandardFooter;

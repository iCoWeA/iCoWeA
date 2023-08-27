import React, { type FC } from 'react';
import { useDispatch } from 'react-redux';
import navMenu from '../../store/Slices/NavMenu';
import IconButton from '../../lib/simpleComponents/components/UI/IconButton';
import Icon from '../../lib/simpleComponents/components/UI/Icon';

const DashboardMenuButton: FC = () => {
  const dispatch = useDispatch();

  return (
    <IconButton
      onClick={() => {
        dispatch(navMenu.actions.toggle());
      }}
      className="shrink-0"
    >
      <Icon>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </Icon>
    </IconButton>
  );
};

export default DashboardMenuButton;

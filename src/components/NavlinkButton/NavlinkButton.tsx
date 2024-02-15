import React, { type FC } from 'react';

import ListItem from '../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import ListNavlink, {
  type ListNavlinkProps
} from '../../lib/iCoWeARouterUI/components/ListNavlink/ListNavlink';
import { useDispatch } from 'react-redux';
import { navbarActions } from '../../store/slices/navbar';

const Navlink: FC<ListNavlinkProps> = (props) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <ListNavlink
        onClick={() => dispatch(navbarActions.close())}
        {...props}
      />
    </ListItem>
  );
};

export default Navlink;

import React, { type FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import ListItem from '../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import ListNavlink, {
  type ListNavlinkProps
} from '../../lib/iCoWeARouterUI/components/ListNavlink/ListNavlink';
import { navbarActions } from '../../store/slices/navbar';

const Navlink: FC<ListNavlinkProps> = (props) => {
  const dispatch = useDispatch();

  /* --- Set event handlers --- */
  const clickHandler = useCallback(() => dispatch(navbarActions.close()), []);

  return (
    <ListItem>
      <ListNavlink
        onClick={clickHandler}
        {...props}
      />
    </ListItem>
  );
};

export default Navlink;

import React, { type Dispatch, type SetStateAction, type FC } from 'react';

import SortIcon from '../../components/Icons/SortIcon';
import ToggleButton from '../../lib/iCoWeABaseUI/components/inputs/ToggleButton/ToggleButton';
import Flex from '../../lib/iCoWeABaseUI/components/layouts/Flex/Flex';

type ControlsProps = {
  setDescendingSort: Dispatch<SetStateAction<boolean>>;
  descendingSort: boolean;
};

const Controls: FC<ControlsProps> = ({ setDescendingSort, descendingSort }) => {
  return (
    <Flex>
      <ToggleButton
        onClick={() => setDescendingSort((sort) => !sort)}
        checked={descendingSort}
        variant="solid"
        leftDecorator={<SortIcon className={descendingSort ? '' : 'rotate-180'} />}
      >
        {descendingSort ? 'Newest date' : 'Latest date'}
      </ToggleButton>
    </Flex>
  );
};

export default Controls;

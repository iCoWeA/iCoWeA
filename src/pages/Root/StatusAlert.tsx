import React, { type FC } from 'react';
import { useSelector } from 'react-redux';
import { selectState } from '../../store/Slices/StatusAlert';
import Popover from '../../lib/simpleComponents/components/UI/Popover';
import Alert from '../../lib/simpleComponents/components/UI/Alert';

const StatusAlert: FC = () => {
  const { open, props: alertProps } = useSelector(selectState);

  const overlayRef = document.getElementById('overlay');

  return (
    <Popover
      open={open}
      overlayRef={overlayRef}
      disableOutsideClick
      unmountOnExit
      className="fixed bottom-4 w-full px-[16px] md:px-[32px]"
    >
      <Alert {...alertProps} />
    </Popover>
  );
};

export default StatusAlert;

import React, { useRef, type FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import statusAlert, { selectState } from '../../store/Slices/statusAlert';
import Popover from '../../lib/simpleComponents/components/UI/Popover/Popover';
import Alert from '../../lib/simpleComponents/components/UI/Alert/Alert';

const StatusAlert: FC = () => {
  /* --- Set default props --- */
  const { open: isAlertOpen, closable: isAlertClosable, timer: alertTimer, props: alertProps } = useSelector(selectState);
  const dispatch = useDispatch();

  /* --- Set refs --- */
  const timerId = useRef(-1);

  /* --- Set timer --- */
  useEffect(() => {
    if (isAlertOpen && alertTimer >= 0) {
      timerId.current = window.setTimeout(() => {
        dispatch(statusAlert.actions.hide());
      }, alertTimer);
    }

    if (!isAlertOpen) {
      clearTimeout(timerId.current);
    }
  }, [isAlertOpen, alertTimer]);

  /* --- Set props --- */
  const { onClose, ...restProps } = alertProps;
  let closeHandler = onClose;

  if (isAlertClosable) {
    closeHandler = () => {
      dispatch(statusAlert.actions.hide());

      if (onClose !== undefined) {
        onClose();
      }
    };
  }

  return (
    <Popover
      open={isAlertOpen}
      overlayRef={document.getElementById('overlay')}
      unmountOnExit
      className="fixed bottom-4 w-full px-[16px] md:px-[32px]"
    >
      <Alert
        onClose={closeHandler}
        {...restProps}
      />
    </Popover>
  );
};

export default StatusAlert;

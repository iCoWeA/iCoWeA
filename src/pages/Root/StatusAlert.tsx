import React, { useRef, type FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import statusAlert, { selectState } from '../../store/Slices/StatusAlert';
import Popover from '../../lib/simpleComponents/components/UI/Popover';
import Alert from '../../lib/simpleComponents/components/UI/Alert';

const StatusAlert: FC = () => {
  const { open, closable, timer, props: alertProps } = useSelector(selectState);
  const dispatch = useDispatch();

  const timerId = useRef(-1);

  useEffect(() => {
    if (open && timer >= 0) {
      timerId.current = window.setTimeout(() => {
        dispatch(statusAlert.actions.hide());
      }, timer);
    }

    if (!open) {
      clearTimeout(timerId.current);
    }
  }, [open, timer]);

  /* Set root props */
  const rootOverlayRef = document.getElementById('overlay');

  /* Set alert props */
  const { onClose: onAlertClose, ...restAlertProps } = alertProps;
  let closeAlertHandler = onAlertClose;

  if (closable) {
    closeAlertHandler = () => {
      dispatch(statusAlert.actions.hide());

      if (onAlertClose !== undefined) {
        onAlertClose();
      }
    };
  }

  return (
    <Popover
      open={open}
      overlayRef={rootOverlayRef}
      disableOutsideClick
      unmountOnExit
      className="fixed bottom-4 w-full px-[16px] md:px-[32px]"
    >
      <Alert
        onClose={closeAlertHandler}
        {...restAlertProps}
      />
    </Popover>
  );
};

export default StatusAlert;

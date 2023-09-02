import React, { useRef, type FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import statusAlert, { selectState } from '../../store/Slices/statusAlert';
import Popover from '../../lib/simpleComponents/components/UI/Popover/Popover';
import Alert from '../../lib/simpleComponents/components/UI/Alert/Alert';

const StatusAlert: FC = () => {
  /* --- Set default props --- */
  const { open, closable, timer, props: alertProps } = useSelector(selectState);
  const dispatch = useDispatch();

  /* --- Set refs --- */
  const timerId = useRef(-1);

  /* --- Set timer --- */
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

  /* --- Set props --- */
  const { onClose, ...restProps } = alertProps;
  let closeHandler = onClose;

  if (closable) {
    closeHandler = () => {
      dispatch(statusAlert.actions.hide());

      if (onClose !== undefined) {
        onClose();
      }
    };
  }

  return (
    <Popover
      open={open}
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

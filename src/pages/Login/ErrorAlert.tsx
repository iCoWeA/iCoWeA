import React, { type FC, useRef, useState, useEffect } from 'react';
import { useNavigation, useActionData } from 'react-router-dom';
import Popover from '../../lib/simpleComponents/components/UI/Popover';
import Alert from '../../lib/simpleComponents/components/UI/Alert';

const TIMER = 5000;

const ErrorAlert: FC = () => {
  const navigation = useNavigation();
  const error = useActionData();

  const timerId = useRef(-1);

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    clearTimeout(timerId.current);
  }, [navigation.state]);

  useEffect(() => {
    if (navigation.state === 'idle' && error !== undefined) {
      setShowAlert(true);

      timerId.current = window.setTimeout(() => {
        setShowAlert(false);
      }, TIMER);
    } else {
      setShowAlert(false);
    }
  }, [navigation.state, error]);

  /* Set alert props */
  const closeHandler = (): void => {
    clearTimeout(timerId.current);
    setShowAlert(false);
  };

  const overlayRef = document.getElementById('overlay');

  const children = typeof error === 'string' ? error : '';

  return (
    <Popover
      open={showAlert}
      overlayRef={overlayRef}
      disableOutsideClick
      className="fixed bottom-4 w-full px-[16px] md:px-[32px]"
    >
      <Alert
        color="error"
        onClose={closeHandler}
      >
        {children}
      </Alert>
    </Popover>
  );
};

export default ErrorAlert;

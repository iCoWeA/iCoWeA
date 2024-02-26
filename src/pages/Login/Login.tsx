import React, { type FC, useState, useEffect } from 'react';
import { useActionData, useNavigation } from 'react-router-dom';

import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';
import ErrorIcon from '../../components/Icons/ErrorIcon';
import Alert from '../../lib/iCoWeABaseUI/components/feedback/Alert/Alert';
import Snackbar from '../../lib/iCoWeABaseUI/components/feedback/Snackbar/Snackbar';
import LoginForm from './LoginForm';

const Login: FC = () => {
  const actionData = useActionData() as string;
  const navigation = useNavigation();

  const [error, setError] = useState(false);

  useEffect(() => {
    if (navigation.state === 'idle' && actionData) {
      setError(true);
    }
  }, [navigation.state, actionData]);

  return (
    <AnimatedSection>
      <LoginForm
        setError={setError}
        state={navigation.state}
      />
      <Snackbar
        onClose={setError}
        open={error}
        placement="bottom"
        closeDuration={5000}
        unmountOnExit
        className="w-full max-w-[32rem] px-4"
      >
        <Alert leftDecorator={<ErrorIcon />}>{actionData}</Alert>
      </Snackbar>
    </AnimatedSection>
  );
};

export default Login;

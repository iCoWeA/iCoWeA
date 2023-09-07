import { type IdTokenResult } from 'firebase/auth';
import { EXPIRATION_DURATION } from '../data/constants';
import { auth } from '../firebase';

export const getTokenDuration = (token: IdTokenResult | null): number => {
  if (token === null) {
    return 0;
  }

  const expiration = new Date(token.authTime);

  // expiration.setHours(expiration.getHours() + 1);
  expiration.setSeconds(expiration.getSeconds() + EXPIRATION_DURATION);

  return expiration.getTime() - new Date().getTime();
};

export const isTokenExpired = (token: IdTokenResult | null): boolean => {
  if (token === null) {
    return true;
  }

  const expiration = new Date(token.authTime);

  // expiration.setHours(expiration.getHours() + 1);
  expiration.setSeconds(expiration.getSeconds() + EXPIRATION_DURATION);

  return (new Date()).getTime() > expiration.getTime();
};

export const getToken = async (): Promise<IdTokenResult | null> => {
  try {
    const token = await auth.currentUser?.getIdTokenResult();

    if (token === undefined) {
      return null;
    }

    return token;
  } catch (error) {
    return null;
  };
};

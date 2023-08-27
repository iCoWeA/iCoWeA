import { type IdTokenResult } from 'firebase/auth';
import { auth } from '../firebase';
import { expirationDuration } from '../data/constants';

export const getTokenDuration = (token: IdTokenResult | null): number => {
  if (token === null) {
    return 0;
  }

  const expiration = new Date(token.authTime);

  // expiration.setHours(expiration.getHours() + 1);
  expiration.setSeconds(expiration.getSeconds() + expirationDuration);

  return expiration.getTime() - new Date().getTime();
};

export const isTokenExpired = (token: IdTokenResult | null): boolean => {
  if (token === null) {
    return true;
  }

  const expiration = new Date(token.authTime);

  // expiration.setHours(expiration.getHours() + 1);
  expiration.setSeconds(expiration.getSeconds() + expirationDuration);

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

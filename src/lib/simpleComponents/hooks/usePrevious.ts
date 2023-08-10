import { useEffect, useRef } from 'react';

const usePrevious: <T>(value: T) => T = (value) => {
  const previousValue = useRef(value);

  useEffect(() => {
    previousValue.current = value;
  }, [value]);

  return previousValue.current;
};

export default usePrevious;

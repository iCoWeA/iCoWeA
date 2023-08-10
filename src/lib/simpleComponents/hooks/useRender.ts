import { useEffect, useState } from 'react';

const useRender: () => boolean = () => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  return isRendered;
};

export default useRender;

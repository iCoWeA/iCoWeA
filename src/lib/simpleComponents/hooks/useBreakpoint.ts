import { useEffect, useState } from 'react';

export enum Breakpoints {SM, MD, LG, XL, XXL}

const calculateBreakpoint = (width: number): Breakpoints => {
  if (width < 600) {
    return Breakpoints.SM;
  }

  if (width < 905) {
    return Breakpoints.MD;
  }

  if (width < 1240) {
    return Breakpoints.LG;
  }

  if (width < 1440) {
    return Breakpoints.XL;
  }

  return Breakpoints.XXL;
};

const useBreakpoint = (): Breakpoints => {
  const [breakpoint, setBreakpoint] = useState(calculateBreakpoint(document.documentElement.clientWidth));

  useEffect(() => {
    const resizeHandler = (): void => {
      setBreakpoint(calculateBreakpoint(document.documentElement.clientWidth));
    };

    document.addEventListener('resize', resizeHandler);

    return () => { document.removeEventListener('resize', resizeHandler); };
  }, []);

  return breakpoint;
};

export default useBreakpoint;

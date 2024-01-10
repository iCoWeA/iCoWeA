import { type MutableRefObject, useCallback } from 'react';

const useMergeRefs = <T extends HTMLElement>(...refs: Array<MutableRefObject<T | null> | null | undefined>): (element: T) => void =>
  useCallback((element) =>
    refs.forEach(ref => {
      if (ref) {
        ref.current = element;
      }
    })
  , []);

export default useMergeRefs;

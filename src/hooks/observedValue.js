import { useEffect, useMemo, useRef } from 'react';
import { BehaviorSubject } from 'rxjs';

export const useObservedValue = (value) => {
  const subject = useRef(new BehaviorSubject(value));

  useEffect(() => {
    subject.current.next(value);
  }, [value]);

  return useMemo(() => subject.current.asObservable(), [subject]);
};

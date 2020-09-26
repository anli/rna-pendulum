import {useState} from 'react';
import useCountdown from './use-countdown';

export type Status = 'FULL' | 'RUNNING';

const useTimer = (countdownSecond: number) => {
  const {time: countdown, start, reset: countdownReset} = useCountdown(
    countdownSecond,
  );

  const [isTop, setIsTop] = useState<boolean>(true);
  const [status, setStatus] = useState<Status>('FULL');
  const [flipCount, setFlipCount] = useState<number>(0);

  const timer = {
    isTop,
    status,
    flipCount,
    flip: () => {
      setIsTop(!isTop);
      setStatus('RUNNING');
      setFlipCount(flipCount + 1);
      start(() => {
        setStatus('FULL');
      });
    },
    reset: () => {
      setIsTop(true);
      setStatus('FULL');
      setFlipCount(0);
      countdownReset();
    },
  };

  return {timer, countdown};
};

export default useTimer;

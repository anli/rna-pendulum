import {useState} from 'react';
import useCountdown from './use-countdown';

export type Status = 'FULL' | 'RUNNING';

const useTimer = (countdownSecond: number) => {
  const {time: countdown, start} = useCountdown(countdownSecond);

  const [isTop, setIsTop] = useState<boolean>(true);
  const [status, setStatus] = useState<Status>('FULL');

  const timer = {
    isTop,
    status,
    flip: () => {
      setIsTop(!isTop);
      setStatus('RUNNING');
      start(() => {
        setStatus('FULL');
      });
    },
  };

  return {timer, countdown};
};

export default useTimer;

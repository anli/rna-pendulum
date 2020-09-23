import {useState} from 'react';
import useCountdown from './use-countdown';

export type Status = 'FULL' | 'EMPTY' | 'RUNNING';

const useTimer = (countdownSecond: number) => {
  const [topStatus, setTopStatus] = useState<Status>('FULL');
  const [bottomStatus, setBottomStatus] = useState<Status>('EMPTY');
  const {time: countdown, start} = useCountdown(countdownSecond);

  const topTimer = {
    status: topStatus,
    start: () => {
      setTopStatus('RUNNING');
      start(() => {
        setTopStatus('FULL');
        setBottomStatus('EMPTY');
      });
    },
  };

  const bottomTimer = {
    status: bottomStatus,
    start: () => {
      setBottomStatus('RUNNING');
      start(() => {
        setBottomStatus('FULL');
        setTopStatus('EMPTY');
      });
    },
  };

  return {topTimer, bottomTimer, countdown};
};

export default useTimer;

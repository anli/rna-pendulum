import {useState} from 'react';

const useCountdown = (second: number) => {
  const [time, setTime] = useState<number>(second);
  const [ticker, setTicker] = useState<NodeJS.Timeout | undefined>(undefined);
  const [isPause, setIsPause] = useState<boolean>(false);
  const [canPause, setCanPause] = useState<boolean>(false);

  const start = (callback: () => void) => {
    setCanPause(true);
    setTime(second);
    const endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + second);

    const interval = setInterval(() => {
      const diff = secondsDiff(Date.now(), endTime.getTime());
      setTime(diff);

      if (diff <= 0) {
        setCanPause(false);
        setTicker(undefined);
        clearInterval(interval);
        setTime(second);
        callback();
      }
    }, 300);
    setTicker(interval);
  };

  const reset = () => {
    ticker && clearInterval(ticker);
    setTime(second);
    setIsPause(false);
    setCanPause(false);
  };

  const pause = () => {
    if (canPause) {
      ticker && clearInterval(ticker);
      setIsPause(true);
    }
  };

  const resume = () => {
    if (isPause) {
      const endTime = new Date();
      endTime.setSeconds(endTime.getSeconds() + time);
      const interval = setInterval(() => {
        const diff = secondsDiff(Date.now(), endTime.getTime());
        setTime(diff);

        if (diff <= 0) {
          setTicker(undefined);
          clearInterval(interval);
          setTime(second);
          setCanPause(false);
        }
      }, 300);
      setTicker(interval);
      setIsPause(false);
    }
  };

  return {time, start, reset, pause, isPause, resume, canPause};
};

export default useCountdown;

const secondsDiff = (d1: number, d2: number) => {
  return Math.floor((d2 - d1) / 1000);
};

import {useState} from 'react';

const useCountdown = (second: number) => {
  const [time, setTime] = useState<number>(second);
  const [ticker, setTicker] = useState<NodeJS.Timeout | undefined>(undefined);

  const start = (callback: () => void) => {
    setTime(second);
    const endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + second);

    const interval = setInterval(() => {
      const diff = secondsDiff(Date.now(), endTime.getTime());
      setTime(diff);

      if (diff <= 0) {
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
  };

  return {time, start, reset};
};

export default useCountdown;

const secondsDiff = (d1: number, d2: number) => {
  return Math.floor((d2 - d1) / 1000);
};

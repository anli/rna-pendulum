import {useState} from 'react';

const useCountdown = (second: number) => {
  const [time, setTime] = useState<number>(second);

  const start = (callback: () => void) => {
    setTime(second);
    const endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + second);

    const interval = setInterval(() => {
      const diff = secondsDiff(Date.now(), endTime.getTime());
      setTime(diff);

      if (diff <= 0) {
        clearInterval(interval);
        setTime(second);
        callback();
      }
    }, 300);
  };

  return {time, start};
};

export default useCountdown;

const secondsDiff = (d1: number, d2: number) => {
  return Math.floor((d2 - d1) / 1000);
};

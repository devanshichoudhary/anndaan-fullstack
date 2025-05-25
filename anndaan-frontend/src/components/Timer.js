import { useState, useEffect } from 'react';

function Timer({ startTime }) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - new Date(startTime)) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  return <p>⏱️ Time since pickup: {elapsed} sec</p>;
}

export default Timer;

import { useEffect, useState } from 'react';

function useCounter(forward = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (forward) {
        setCount((prevState) => prevState + 1);
      } else {
        setCount((prevState) => prevState - 1);
      }
    }, 1000);

    // clean-up function
    return () => clearInterval(id);
  }, [forward]);

  return count;
}

export default useCounter;

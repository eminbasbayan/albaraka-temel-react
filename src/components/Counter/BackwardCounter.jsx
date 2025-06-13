import React, { useEffect, useState } from 'react';

const BackwardCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prevState) => prevState - 1);
    }, 1000);

    // clean-up function
    return () => clearInterval(id);
  }, []);

  return <b className="display-3">{count}</b>;
};

export default BackwardCounter;

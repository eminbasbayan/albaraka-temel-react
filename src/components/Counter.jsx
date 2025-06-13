import React, { useRef, useState } from 'react';

const Counter = () => {
  // const [count, setCount] = useState(0);
  const count = useRef(0);

  function handleClick() {
    // setCount((prevCount) => prevCount + 1);
    count.current++;
    console.log(count);
  }

  console.log(count);
  console.log('component render oldu!');

  return (
    <div>
      <button onClick={handleClick}>Click!</button>
    </div>
  );
};

export default Counter;

import React, { useState, useMemo } from 'react';

const ExpensiveComponent = ({ number, timer }) => {
  // State to store a number
  // const [number, setNumber] = useState(0);

  const calculateSquare = (num) => {
    console.log('qqqqq');
    //it will not be called even when timer changes
    return num * num;
  };

  const memoSquare = useMemo(() => {
    return calculateSquare(number);
  }, [number]);

  return (
    <div>
      <p>
        The square of {number} is {memoSquare}
      </p>
      <span>value of timer is {timer} </span>
    </div>
  );
};

export default ExpensiveComponent;

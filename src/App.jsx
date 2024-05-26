import React, { useState, useMemo } from 'react';
import Square from './Square';

const App = () => {
  const [number, setNumber] = useState(1);

  const [timer, setTimer] = useState(1);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      ></input>
      <button onClick={() => setTimer(timer + 1)}>+ </button>
      <Square number={number} timer={timer} />
    </div>
  );
};

export default App;

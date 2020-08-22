import React, { useState } from 'react';
import TimerButton from '../TimerButton/TimerButton'
import './Timer.css'

const Timer = () => {
  const [counter, setCounter] = useState<number>(0)
  const [min, setMin] = useState<number>(0)
  return (
    <div className='timer-container'>
      <div>
        <img className="img-fluid" src="https://images.vexels.com/media/users/3/128840/isolated/preview/c091629800ce3d91d8527d32d60bc46f-stopwatch-timer-by-vexels.png" alt="ImageClocl" />
      </div>

      <div className='timer'>
        <span className='min'> {min} </span>: <span className='sec'> {counter}</span>
      </div>

      <TimerButton
        counter={counter}
        setCounter={setCounter}
        min={min}
        setMin={setMin}
      />
    </div>

  );
}

export default Timer;
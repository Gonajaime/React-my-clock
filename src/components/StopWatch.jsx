import React, { useEffect, useState } from "react";


const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
  
    useEffect(() => {
      let interval = null;
  
      if (timerOn) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else {
        clearInterval(interval);
      }
  
      return () => clearInterval(interval);
    }, [timerOn]);
    return (
      <>
      <div className="stopwatch">Cronómetro
      <div className="c-spanWatch">
    

        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
<span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
<span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </div>
<div className="BtnsWatch">
        <button onClick={() => setTimerOn(true)}>Start</button>
        <button onClick={() => setTimerOn(false)}>Stop</button>
        <button onClick={() => setTimerOn(true)}>Resume</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
      </div>
    
      </>
    );
  };

  export default StopWatch;
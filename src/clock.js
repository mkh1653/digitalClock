import React, {useEffect, useState} from 'react';
import "./clock.css"

const DigitalClock = ()=> {
  const [clock, setClock] = useState({
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
  });

  useEffect(()=> {
    var timerID = setInterval( () => tick(), 1000 );
  }, [clock])

  function tick() {
    setClock({
      ...clock,
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
    });
   }

  return(
    <div className="digital-clock">
      <span>{clock.hour}</span>
      <span className="digital-clock-second">:</span>
      <span>{clock.minute}</span>
    </div>
  )
}

export default DigitalClock;

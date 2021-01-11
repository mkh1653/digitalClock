import React, {useEffect, useState} from 'react';

const DigitalClock = ()=> {
  const [clock, setClock] = useState(`${new Date().getHours()} : ${new Date().getMinutes()}`);
  useEffect(()=> {
    var timerID = setInterval( () => tick(), 1000 );
  }, [clock])

  function tick() {
    setClock(`${new Date().getHours()} : ${new Date().getMinutes()}`);
   }

  return(
    <div>{clock}</div>
  )
}

export default DigitalClock;

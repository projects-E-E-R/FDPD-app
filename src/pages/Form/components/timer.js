import React, { useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';
import useStoreForm from '../Store/useStoreForm'
const Stopwatch=(props)=>{
  const {sections,sectionForm} = props;
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });
  const {section,setTimeForResponse,timeForResponse} = useStoreForm.getState()
  useEffect(()=>{
    if(section){
      reset()
      console.log(hours,minutes,seconds)

      let timerSection = hours*3600+ minutes*60 + seconds;
      if(timerSection >0){
        setTimeForResponse(timeForResponse,timerSection,sections,sectionForm);
      }
      start()
    }
  },[section])
  return (
    <div style={{textAlign: 'center'}}>
      <h1>react-timer-hook</h1>
      <p>Stopwatch Demo</p>
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      
      <p>{isRunning ? 'Running' : 'Not running'}</p>

    </div>
  )
}
export default Stopwatch
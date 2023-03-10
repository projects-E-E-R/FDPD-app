import React, { useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';
import useStoreForm from '../Store/useStoreForm'
const Stopwatch=(props)=>{
  const {sections,sectionForm,formComplete} = props;
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
      if(formComplete){
        let timerSection = hours*3600+ minutes*60 + seconds;
        setTimeForResponse(formComplete,timeForResponse,timerSection,sections,sectionForm);
        pause()
      }else{
        reset()
        let timerSection = hours*3600+ minutes*60 + seconds;
        setTimeForResponse(formComplete,timeForResponse,timerSection,sections,sectionForm);
        start()
      }

    }
  },[section,formComplete])
  return (
    <></>
  )
}
export default Stopwatch
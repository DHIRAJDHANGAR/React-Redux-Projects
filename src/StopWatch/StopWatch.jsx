import { useRef, useState } from "react";

const StopWatch = () => {
  const [count, setCount] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const watcher = useRef(null);

  const onStartTime = () => {
    //first set start time
    setStartTime(Date.now());

    //if the start time exist
    if (watcher.current) {
      clearInterval(watcher.current);
    }

    //set watcher to update current time
    watcher.current = setInterval(() => {
      setCount(Date.now());
    }, 10);
  };

  //stop the watch by clear interval
  const onStopTime = () => {
    clearInterval(watcher.current);
  };

  //reset watch timer
  const onResetTime = () => {
    setCount(0);
    setStartTime(0);
  };

  let current = 0;

  //time in to secounds
  if (count && startTime) {
    current = (count - startTime) / 1000;
  }

  return (
    <>
      <p className="fs-3">Time : {current}</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button type="button" onClick={onStartTime}>
          Start
        </button>
        <button type="button" onClick={onStopTime}>
          Stop
        </button>
        <button type="button" onClick={onResetTime}>
          Reset
        </button>
      </div>
    </>
  );
};
export default StopWatch;

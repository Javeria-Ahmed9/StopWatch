import { padStart } from "lodash";
import { useEffect, useState } from "react";

export default function StopWatch() {
  let [time, setTime] = useState(0);
  let [running, setRunning] = useState(false);

  useEffect(() => {
    let o;
    if (running) {
      o = setInterval(() => {
        setTime((p) => p + 1);
      }, 10);
    }
    return () => clearInterval(o);
  }, [running]);

  let result = (time) => {
    let milisecond = Math.floor(time % 100);
    let seconds = Math.floor((time / 100) % 60);
    let minutes = Math.floor((time / 6000) % 60);
    let hours = Math.floor(time / 360000);

    return `${padStart(hours, 2, "0")}:${padStart(minutes, 2, "0")}:${padStart(
      seconds,
      2,
      "0"
    )}:${padStart(milisecond, 2, "0")}`;
  };

  let startTime = () => {
    setRunning(true);
    console.log(running);
  };

  let stopTime = () => {
    setRunning(false);
    console.log(running);
  };
  let reset = () => {
    setRunning(false);
    setTime(0);
  };
  return (
    <div id="one">
      <div id="two">
        <header>Stopwatch</header>
        <div>
          <p>{result(time)}</p>
        </div>
        <div id="three">
          <button onClick={startTime}>Start</button>
          <button onClick={reset}>Reset</button>
          <button onClick={stopTime}>Stop</button>
        </div>
      </div>
    </div>
  );
}

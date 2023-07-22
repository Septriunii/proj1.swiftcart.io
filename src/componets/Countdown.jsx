import React, { useState, useEffect } from "react";

const CountdownApp = () => {
  const [countdown, setCountdown] = useState("02:59:59");

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        const [hours, minutes, seconds] = prevCountdown.split(":");

        let hrs = parseInt(hours, 10);
        let mins = parseInt(minutes, 10);
        let secs = parseInt(seconds, 10);

        if (hrs === 0 && mins === 0 && secs === 0) {
          clearInterval(interval);
          return "Countdown Finished";
        } else {
          if (mins === 0 && secs === 0) {
            hrs -= 1;
            mins = 59;
            secs = 59;
          } else if (secs === 0) {
            mins -= 1;
            secs = 59;
          } else {
            secs -= 1;
          }

          const paddedHrs = hrs.toString().padStart(2, "0");
          const paddedMins = mins.toString().padStart(2, "0");
          const paddedSecs = secs.toString().padStart(2, "0");

          return `${paddedHrs}:${paddedMins}:${paddedSecs}`;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>{countdown}</div>
    </div>
  );
};

export default CountdownApp;

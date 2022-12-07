import React, { useEffect, useState } from "react";

const Timer = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <div className="container-timer">
      <div>
        <p>Jours</p>
        <div className="card">{leading0(days)}</div>
      </div>
      <div>
        <p>Heures</p>
        <div className="card">{leading0(hours)}</div>
      </div>
      <div>
        <p>Minutes</p>
        <div className="card">{leading0(minutes)}</div>
      </div>
      <div>
        <p>Secondes</p>
        <div className="card">{leading0(seconds)}</div>
      </div>
    </div>
  );
};

export default Timer;
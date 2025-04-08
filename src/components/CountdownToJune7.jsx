import React, { useEffect, useState } from "react";

const CountdownToJune7 = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const getTargetDate = () => {
      const now = new Date();
      let year = now.getFullYear();
      const target = new Date(year, 5, 7); // June is month 5 (0-indexed)

      if (now > target) {
        year += 1;
      }

      return new Date(year, 5, 7);
    };

    const updateCountdown = () => {
      const now = new Date();
      const target = getTargetDate();
      const diff = target - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown(); // Initial call
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontSize: "24px", fontWeight: "" }}>
      <p className="text-center mt-10">Countdown to June 7:</p>
      <div className="text-center">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </div>
    </div>
  );
};

export default CountdownToJune7;

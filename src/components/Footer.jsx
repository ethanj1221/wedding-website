import React, { useState, useEffect } from "react";

export default function Footer() {
  const weddingDate = new Date("2023-07-29T18:30:00-05:00");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = weddingDate.getTime() - now.getTime();
    const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesLeft = Math.floor(
      (difference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondsLeft = Math.floor((difference % (1000 * 60)) / 1000);
    return {
      daysLeft: daysLeft,
      hoursLeft: hoursLeft,
      minutesLeft: minutesLeft,
      secondsLeft: secondsLeft,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      className="bg-gray-900 text-white font-lato font-light"
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto max-w-7xl px-6 py-6 sm:py-8 lg:px-10 lg:py-10 flex flex-col items-center justify-center">
        <div className="grid grid-cols-4 gap-6 sm:gap-8 md:gap-12 h-min">
          <div className="text-center">
            <h4 className="text-4xl sm:text-5xl lg:text-6xl my-0">
              {timeLeft.daysLeft}
            </h4>
            <p className="text-sm sm:text-base uppercase">Days</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl sm:text-5xl lg:text-6xl my-0">
              {timeLeft.hoursLeft < 10 ? "0" : ""}
              {timeLeft.hoursLeft}
            </h4>
            <p className="text-sm sm:text-base uppercase">Hours</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl sm:text-5xl lg:text-6xl my-0">
              {timeLeft.minutesLeft < 10 ? "0" : ""}
              {timeLeft.minutesLeft}
            </h4>
            <p className="text-sm sm:text-base uppercase">Minutes</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl sm:text-5xl lg:text-6xl my-0">
              {timeLeft.secondsLeft < 10 ? "0" : ""}
              {timeLeft.secondsLeft}
            </h4>
            <p className="text-sm sm:text-base uppercase">Seconds</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

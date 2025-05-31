import React, { useEffect, useState, useCallback } from 'react';
import './App.css';

const ComingSoon = () => {
  const [targetDate] = useState(() => new Date('2025-06-15T00:00:00'));// Example: Set target date to June 15, 2025
  /*const [targetDate] = useState(() => {
    const now = new Date();
    //now.setHours(now.getHours() + 3); // Example: Set target date to 3 hours from now
    now.setDate(now.getDate() + 3);// Example: Set target date to 3 days from now
    return now;
  });*/

  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    } else {
      return { days: '00', hours: '00', minutes: '00', seconds: '00' };
    }
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <>
      {/* Logo and Site Name fixed top-left */}
      <div className="logo-wrapper">
        <img src="/logo.png" alt="Logo" className='logo' />
        <span className="site-name">Coming Soon</span>
      </div>

      {/* Main Coming Soon Container */}
      <div className="coming-soon-container">
        <video autoPlay muted loop id="bg-video">
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="overlay">
          <h1>Launching Soon</h1>
          <p>Leave your email and we'll let you know once the site goes live.</p>
          <div className="timer">
            {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
              <div className="time-box" key={unit}>
                <div className="time-value">{timeLeft[unit]}</div>
                <div className="time-label">{unit.toUpperCase()}</div>
              </div>
            ))}
          </div>
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button className="notify-button">Notify Me</button>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;

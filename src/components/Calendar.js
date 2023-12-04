import React from "react";

export default function Calendar() {
  const monthsArray = [
    {
      month: "January",
      days: 31,
    },
    {
      month: "February",
      days: 28,
    },
    {
      month: "March",
      days: 31,
    },
    {
      month: "April",
      days: 30,
    },
    {
      month: "May",
      days: 31,
    },
    {
      month: "June",
      days: 30,
    },
    {
      month: "July",
      days: 31,
    },
    {
      month: "August",
      days: 31,
    },
    {
      month: "September",
      days: 30,
    },
    {
      month: "October",
      days: 31,
    },
    {
      month: "November",
      days: 30,
    },
    {
      month: "December",
      days: 31,
    },
  ];

  const weekdaysArray = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const paperDisplay = () => {
    let totalDaysPassed = 0;
    return monthsArray
      .map((month) => {
        const daysInMonth = month.days;
        const monthDaysArray = new Array(daysInMonth)
          .fill(0)
          .map((value, index) => {
            const totalDelay = totalDaysPassed;
            totalDaysPassed += 1;
            return (
              <div
                key={index}
                className="paper"
                style={{
                  animation: `paper-fall 2.6s linear forwards ${
                    totalDelay * 2
                  }s`,
                }}
              >
                <div className="date-container">
                  <div className="month">{month.month}</div>
                  <div className="date">{index + 1}</div>
                  <div className="weekday">
                    {weekdaysArray[totalDaysPassed % 7]}
                  </div>
                </div>
              </div>
            );
          });
        return monthDaysArray.reverse();
      })
      .reverse();
  };

  return (
    <div id="calendar">
      <div className="watcher">
        <div className="eye-container">
          <div className="eye">
            <div className="pupil"></div>
          </div>
          <div className="eye">
            <div className="pupil"></div>
          </div>
        </div>
        <div className="mouth"></div>
      </div>
      <div className="container">{paperDisplay()}</div>
    </div>
  );
}

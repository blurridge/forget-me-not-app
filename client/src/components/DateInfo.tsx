import React, { useEffect, useState } from "react";

export const DateInfo = () => {
  const [dateState, setDateState] = useState({
    day: new Date().toLocaleDateString("en-GB", {
      day: "numeric",
    }),
    month: new Date().toLocaleDateString("en-GB", {
      month: "long",
    }),
    year: new Date().toLocaleDateString("en-GB", {
      year: "numeric",
    }),
    dayWeek: new Date().toLocaleDateString("en-GB", {
      weekday: "long",
    }),
  });
  useEffect(() => {
    setInterval(
      () =>
        setDateState({
          day: new Date().toLocaleDateString("en-GB", {
            day: "numeric",
          }),
          month: new Date().toLocaleDateString("en-GB", {
            month: "long",
          }),
          year: new Date().toLocaleDateString("en-GB", {
            year: "numeric",
          }),
          dayWeek: new Date().toLocaleDateString("en-GB", {
            weekday: "long",
          }),
        }),
      0
    );
  }, []);
  return (
    <>
      <div className="flex justify-between text-white font-main">
        <div className="flex gap-1">
          <span className="font-bold text-6xl">{dateState.day}</span>
          <div className="flex flex-col justify-between">
            <span className="text-xl">{dateState.month}</span>
            <span className="text-xl">{dateState.year}</span>
          </div>
        </div>
        <span className="font-main text-6xl">{dateState.dayWeek}</span>
      </div>
    </>
  );
};

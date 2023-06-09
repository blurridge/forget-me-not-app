import { useEffect, useState } from "react";
import { Animate, initTE } from "tw-elements";

type DateProp = {
  day: string;
  month: string;
  year: string;
  dayWeek: string;
};

export const DateInfo = () => {
  useEffect(() => {
    initTE({ Animate });
  }, []);
  const [dateState, setDateState] = useState<DateProp>({
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
      <div
        data-te-animation-init
        data-te-animation-start="onLoad"
        data-te-animation-reset="true"
        data-te-animation="[fade-in_1s_ease-in-out]"
        className="flex justify-between text-white font-main drop-shadow-lg w-full"
      >
        <div className="flex gap-1">
          <span className="font-bold text-7xl">{dateState.day}</span>
          <div className="flex flex-col justify-center">
            <span className="text-2xl">{dateState.month}</span>
            <span className="text-2xl">{dateState.year}</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="font-main text-5xl">{dateState.dayWeek}</span>
        </div>
      </div>
    </>
  );
};

import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { getMonth } from "../util";

function SmallCalendar() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  const { monthIndex, setSmallCalendarMonth, selectedDay, setSelectedDay } = useContext(GlobalContext);

  useEffect(()=> {
      setCurrentMonthIdx(monthIndex)
  },[monthIndex])

  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }

  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }

  function getDayClass(day) {
      const format = "DD-MM-YY"
      const nowDay = dayjs().format(format)
      let slcdate = selectedDay ;
      if (selectedDay) {
        slcdate = slcdate.format(format);
        // console.log('selected date', selectedDay);
        // console.log('now date', nowDay);
      }
      const currDay = day.format(format)
      if (nowDay === currDay) {
          return 'bg-blue-500 rounded-full text-white'
      } else if (slcdate === currDay ) {
          return 'bg-blue-100 rounded-full text-blue-600 font-bold'
      } else {
        return "";
      }
  }

  const handleMonthChange = (date) => {
    setSmallCalendarMonth(date.month());
    setSelectedDay(date)
  }

  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
        </p>
        <div>
          <button onClick={handlePrevMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
              chevron_left
            </span>
          </button>
          <button onClick={handleNextMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
              chevron_right
            </span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => {
          return (
            <span key={i} className=" text-sm py-1 text-center">
              {day.format("dd").charAt(0)}
            </span>
          );
        })}
        {currentMonth.map((row, index) => {
          return (
            <React.Fragment key={index}>
              {row.map((day, i) => (
                <button
                  key={i}
                  onClick={() => handleMonthChange(day)}
                  className={`py-1 w-full ${getDayClass(day)} focus:`}
                >
                  <span className="text-sm">{day.format("D")}</span>
                </button>
              ))}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default SmallCalendar;

import dayjs from 'dayjs';
import React from 'react'

function Day({day, rowIndex}) {
  function getCurrentDayClass() {
    // console.log(day.format("DD-MM-YY"));
    // console.log(dayjs().format("DD-MM-YY"));
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'bg-blue-600 text-white rounded-full w-7' : '';
  }
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        <p className="text-sm p-1 mt-1 text-center">{rowIndex === 0 ? day.format("ddd").toUpperCase() : null}</p>
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>{day.format("DD")}</p>
      </header>
    </div>
  );
}

export default Day
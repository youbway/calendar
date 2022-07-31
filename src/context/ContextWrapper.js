import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import GlobalContext from './GlobalContext';

export default function ContextWrapper(props) {
    const [monthIndex,setMonthIndex] = useState(dayjs().month());
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    const [selectedDay, setSelectedDay] = useState(false);
    const [showEventModel, setShowEventModal] = useState(false);
    useEffect(()=> {
      if (smallCalendarMonth !== null) {
        setMonthIndex(smallCalendarMonth);
      }
    }, [smallCalendarMonth])
    return (
      <GlobalContext.Provider
        value={{
          monthIndex,
          setMonthIndex,
          smallCalendarMonth,
          setSmallCalendarMonth,
          selectedDay,
          setSelectedDay,
          showEventModel,
          setShowEventModal,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    );
}


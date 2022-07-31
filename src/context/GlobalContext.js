import React from 'react';

const GlobalContext = React.createContext({
    monthIndex : 0,
    setMonthIndex : () => {},
    smallCalendarMonth : 0,
    setSmallCalendarMonth : (index) => {},
    selectedDay : false ,
    setSelectedDay : () =>  {},
    showEventModel : false,
    setShowEventModal : () => {}
});


export default GlobalContext;
import { getMonth } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";


function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const {monthIndex, showEventModel} = useContext(GlobalContext);
  // console.log(monthIndex);
  useEffect(()=> {
    setCurrentMonth(getMonth(monthIndex));
  },[monthIndex])

  return (
    <>
    {showEventModel && <EventModal></EventModal>}
      <div className="h-screen flex flex-col  ">
        <CalendarHeader></CalendarHeader>
        <div className="flex flex1">
          <Sidebar></Sidebar>
          <Month month={currentMonth}></Month>
        </div>
      </div>
    </>
  );
}

export default App;

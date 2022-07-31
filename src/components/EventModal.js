import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

function EventModal() {
    const {setShowEventModal} = useContext(GlobalContext);
    const handleClose = () => {
        setShowEventModal(false);
    }
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form action="" className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <button>
            <span onClick={handleClose} className="material-icons-outlined text-gray-400">close</span>
          </button>
        </header>
      </form>
      <div className="p-3">
        <div className="grid grid-cols-1/5 items-end gap-y-7">
            
        </div>
      </div>
    </div>
  );
}

export default EventModal;

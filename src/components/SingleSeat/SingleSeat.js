import React from "react";
import { toggleSelectSeat } from "../../slices/SeatSlice";
import { useDispatch } from "react-redux";

const SingleSeat = ({ seat }) => {
  const dispatch = useDispatch();

  const getSeatClasses = (status) => {
    switch (status) {
      case "booked":
        return "bg-gray-500 border-gray-500 text-white text-xs cursor-not-allowed"; // Booked seat
      case "selected":
        return "bg-blue-500 text-white text-xs border-blue-500"; // Selected seat
      default: // 'available'
        return "bg-white text-blue-500 text-xs border-blue-500 hover:bg-blue-500 hover:text-white";
    }
  };

  return (
    <div>
      <button
        key={seat.id}
        className={`w-7 h-7 border-2 rounded-md flex justify-center items-center ${getSeatClasses(seat.status)}`}
        onClick={() => {
          dispatch(toggleSelectSeat(seat.id));
        }}
        disabled={seat.status === "booked"} 
      >
        {seat.column}
      </button>
    </div>
  );
};

export default SingleSeat;

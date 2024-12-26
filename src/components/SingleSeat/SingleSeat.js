import React from 'react';
import { toggleSelectSeat } from '../../slices/SeatSlice';
import { useDispatch } from 'react-redux';

const SingleSeat = ({seat}) => {
  const dispatch = useDispatch();
  return (
    <div>
        <button
        key={seat.id}
        className={`w-7 h-7 ${
          seat.isBooked
            ? "bg-gray-500 border-gray-500 text-white text-xs cursor-not-allowed" // Gray background and disabled cursor when booked
            : seat.isSelected
            ? "bg-blue-500 text-white text-xs border-blue-500"
            : "bg-white text-blue-500 text-xs border-blue-500"
        } border-2 rounded-md flex justify-center items-center cursor-pointer ${
          !seat.isBooked ? "hover:bg-blue-500 hover:text-white" : "" // Only apply hover effect if the seat is not booked
        }`}
        onClick={() => {
          // Prevent selection if the seat is booked
          if (!seat.isBooked) {
            dispatch(toggleSelectSeat(seat.id));
          }
        }}
        disabled={seat.isBooked} // Disable the button if the seat is booked
      >
        {seat.column}
      </button>
    </div>
  )
}

export default SingleSeat

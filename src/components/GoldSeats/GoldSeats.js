import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectGoldSeats } from '../../slices/SeatSlice';
import { groupSeatsByRow } from '../../utils/groupSeats';
import { toggleSelectSeat } from '../../slices/SeatSlice';

const GoldSeats = () => {
  const goldSeats = useSelector(selectGoldSeats);
  const rows = groupSeatsByRow(goldSeats, 20);
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto p-4">
      <h3 className="flex justify-center my-2">GOLD : ₹200</h3>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1 mb-2">
          {row.map((seat) => (
            <button
            key={seat.id}
            className={`w-7 h-7 ${
              seat.isSelected
                ? "bg-blue-500 text-white text-xs"
                : "bg-white text-blue-500 text-xs"
            } border-2 border-blue-500 rounded-md flex justify-center items-center cursor-pointer`}
            onClick={() => {
              dispatch(toggleSelectSeat(seat.id));
              console.log(seat.id);
            }}
          >
              {seat.column}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GoldSeats

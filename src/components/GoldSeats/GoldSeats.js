import React from 'react';
import { useSelector } from 'react-redux';
import { selectGoldSeats } from '../../slices/SeatSlice';
import { groupSeatsByRow } from '../../utils/groupSeats';

const GoldSeats = () => {
  const goldSeats = useSelector(selectGoldSeats);
  const rows = groupSeatsByRow(goldSeats, 20);
  return (
    <div className="container mx-auto p-4">
      <h3 className="flex justify-center my-2">GOLD : ₹200</h3>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-2 mb-2">
          {row.map((seat) => (
            <div
              key={seat.id}
              className="w-7 h-7 bg-white border-2 border-blue-500 rounded-md flex justify-center items-center cursor-pointer"
            >
              <p className="text-xs text-blue-500">{seat.column}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GoldSeats

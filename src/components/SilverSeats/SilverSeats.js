import React from 'react';
import { useSelector } from 'react-redux';
import { selectSilverSeats } from '../../slices/SeatSlice';
import { groupSeatsByRow } from '../../utils/groupSeats';

const SilverSeats = () => {
  const silverSeats = useSelector(selectSilverSeats);
  const rows = groupSeatsByRow(silverSeats, 20);

  return (
    <div className="container mx-auto p-4">
      <h3 className="flex justify-center my-2">SILVER : ₹100</h3>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1 mb-2">
          
          {row.map((seat) => (
            <div
              key={seat.id}
              className="w-7 h-7 bg-white border-2 border-blue-500 rounded-md flex justify-center items-center cursor-pointer"
            >
              <p className="text-sm text-blue-500">{seat.column}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SilverSeats;

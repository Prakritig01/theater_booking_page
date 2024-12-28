import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllSeats, toggleSelectSeat } from '../../slices/SeatSlice';

const SeatComponent = () => {
  const dispatch = useDispatch();
  const seatData = useSelector(selectAllSeats);

  return (
    <div className="container mx-auto p-6 space-y-6">
      {seatData.map((category, index) => (
        <div key={index} className="">
          {/* Category Header */}
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold">
              {category.name} : ₹{category.price}
            </h3>
          </div>

          {/* Seat Rows */}
          <div className="space-y-2">
            {category.rows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center gap-2">
                {row.map((seat) => (
                  <button
                    key={seat.id}
                    className={`w-7 h-7 border-2 rounded-md flex justify-center items-center text-sm ${
                      seat.status === 'booked'
                        ? 'bg-gray-500 border-gray-500 text-white cursor-not-allowed'
                        : seat.status === 'selected'
                        ? 'bg-blue-500 border-blue-500 text-white'
                        : 'bg-white border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
                    }`}
                    onClick={() => dispatch(toggleSelectSeat({ id: seat.id, categoryName: category.name }))}
                    disabled={seat.status === 'booked'}
                  >
                    {seat.id}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeatComponent;

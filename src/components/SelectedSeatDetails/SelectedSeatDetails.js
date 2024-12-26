import React from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedSeats, selectTotalAmount } from '../../slices/SeatSlice';

const SelectedSeatDetails = () => {
  const selectedSeats = useSelector(selectSelectedSeats);
  const amount = useSelector(selectTotalAmount);

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md mt-8">
       
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Seats Selected:</h3>
        <ul className="list-disc pl-5 mt-1">
          {selectedSeats.length > 0 ? (
            selectedSeats.map((seat) => (
              <li key={seat.id} className="text-gray-600">
                Row: {seat.row}, Column: {seat.column} (₹{seat.price})
              </li>
            ))
          ) : (
            <p className="text-gray-500 italic">No seats selected yet.</p>
          )}
        </ul>
      </div>

      <div className="bg-blue-100 p-3 rounded-md">
        <h3 className="text-lg font-semibold text-blue-700">Total Amount:</h3>
        <p className="text-2xl font-bold text-blue-800">₹{amount}</p>
      </div>
    </div>
  );
};

export default SelectedSeatDetails;

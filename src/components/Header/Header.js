import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { selectSelectedSeats,bookSelectedSeats } from '../../slices/SeatSlice';
const Header = () => {
  const selectedSeats = useSelector(selectSelectedSeats);
  const dispatch = useDispatch();

  return (
    <div className="sticky top-0 p-4 z-50">
      <button
        onClick={() => {
          dispatch(bookSelectedSeats({ selectedSeats })); // Dispatch action to book seats
          console.log("selected seats", selectedSeats); // Log selected seats
        }}
        className="bg-blue-500 text-white text-sm py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
      >
        Book Seats
      </button>
    </div>
  );
}

export default Header;

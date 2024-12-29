import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { selectSelectedSeats,bookSelectedSeats } from '../../slices/SeatSlice';
const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="sticky top-0 p-4 z-50">
      <button
        onClick={() => {
          dispatch(bookSelectedSeats()); 
        }}
        className="bg-blue-500 text-white text-sm py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
      >
        Book Seats
      </button>
    </div>
  );
}

export default Header;

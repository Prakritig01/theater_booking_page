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
    </div>
  )
}

export default SingleSeat

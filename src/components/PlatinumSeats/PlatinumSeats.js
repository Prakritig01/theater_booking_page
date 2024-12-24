import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPlatinumSeats } from "../../slices/SeatSlice";
import { toggleSelectSeat } from "../../slices/SeatSlice";

const PlatinumSeats = () => {
  const dispatch = useDispatch();
  const platinumSeats = useSelector(selectPlatinumSeats);
  return (
    <div className="container mx-auto p-4 ">
      <h3 className="flex justify-center ">PLATINUM : ₹300</h3>
      <div className="flex flex-wrap justify-center gap-1 my-2 ">
        {platinumSeats.map((seat, index) => (
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
    </div>
  );
};

export default PlatinumSeats;

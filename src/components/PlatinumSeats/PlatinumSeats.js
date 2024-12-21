import React from "react";
import { useSelector } from "react-redux";
import { selectPlatinumSeats } from "../../slices/SeatSlice";

const PlatinumSeats = () => {
  const platinumSeats = useSelector(selectPlatinumSeats);
  return (
    <div className="container mx-auto p-4 ">
      <h3 className="flex justify-center ">PLATINUM : ₹300</h3>
      <div className="flex flex-wrap justify-center gap-1 my-2 ">
        {platinumSeats.map((seat, index) => (
          <div
            key={seat.id}
            className="w-7 h-7 bg-white-200 border-2 border-blue-500 rounded-md flex justify-center items-center cursor-pointer"
          >
            <p className="text-sm text-blue-500">{seat.column}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatinumSeats;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPlatinumSeats } from "../../slices/SeatSlice";
import SeatCategory from "../SeatCategory/SeatCategory";

const PlatinumSeats = () => {
  const platinumSeats = useSelector(selectPlatinumSeats);
  return (
    <SeatCategory title= "PLATNIUM" price = {300} seats={platinumSeats}/>
  );
};

export default PlatinumSeats;

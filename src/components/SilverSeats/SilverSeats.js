import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSilverSeats } from "../../slices/SeatSlice";
import SeatCategory from "../SeatCategory/SeatCategory";

const SilverSeats = () => {

  const silverSeats = useSelector(selectSilverSeats);
  return (
    <SeatCategory title= "SILVER" price = {100} seats={silverSeats}/>
  );
};

export default SilverSeats;

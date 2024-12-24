import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGoldSeats } from "../../slices/SeatSlice";
import SeatCategory from "../SeatCategory/SeatCategory";

const GoldSeats = () => {
  const goldSeats = useSelector(selectGoldSeats);
  return (
    <SeatCategory title= "GOLD" price = {200} seats={goldSeats}/>
  );
};

export default GoldSeats;

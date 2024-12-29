import React from "react";
import { selectTotalAmount, selectSelectedSeats } from "../../slices/SeatSlice";
import { useSelector } from "react-redux";

const AmountComponent = () => {
  const amount = useSelector(selectTotalAmount);
  return <div>{amount}</div>;
};

export default AmountComponent;

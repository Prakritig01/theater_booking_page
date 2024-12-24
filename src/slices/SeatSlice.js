import { createSlice } from "@reduxjs/toolkit";
import { generateSeats } from "../utils/generateSeats";

const seatSlice = createSlice({
  name: "seats",
  initialState: generateSeats(),
  reducers: {
    toggleSelectSeat: (state, action) => {
      const id = action.payload;
      const seat = state.find((seat) => seat.id === id);
      console.log({ ...seat });
      if (seat && !seat.isBooked) {
        console.log("Before toggle:", seat.isSelected); // Check status before
        seat.isSelected = !seat.isSelected;
        console.log("After toggle:", seat.isSelected); // Check status after
      } else {
        console.log(`Seat ${id} cannot be toggled (already booked or not found).`);
      }
      console.log({...seat} );
    },
  },
});

export const selectAllSeats = (state) => state.seatSlice;
export const selectPlatinumSeats = (state) => {
  // console.log("seats :", state.seatSlice );
  return state.seatSlice.filter((seat) => seat.category === "platinum");
};
export const selectGoldSeats = (state) => {
  // console.log("seats :", state.seatSlice );
  return state.seatSlice.filter((seat) => seat.category === "gold");
};
export const selectSilverSeats = (state) => {
  // console.log("seats :", state.seatSlice );
  return state.seatSlice.filter((seat) => seat.category === "silver");
};

export const {toggleSelectSeat} = seatSlice.actions;
export default seatSlice.reducer;

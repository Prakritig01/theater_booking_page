import { createSlice } from "@reduxjs/toolkit";
import { generateSeats } from "../utils/generateSeats";

const seatSlice = createSlice({
  name: "seats",
  initialState: generateSeats(),
  reducers: {
    toggleSelectSeat: (state, action) => {
      const id = action.payload;
      const seat = state.find((seat) => seat.id === id);
      // console.log({ ...seat });
      if (seat && !seat.isBooked) {
        seat.isSelected = !seat.isSelected;
      } else {
        console.log(
          `Seat ${id} cannot be toggled (already booked or not found).`
        );
      }
      // console.log({ ...seat });
    },
    bookSelectedSeats: (state,action) => {
      const { selectedSeats } = action.payload;
      console.log("selected Seats in slice :" ,selectedSeats);
      selectedSeats.forEach((seat)=> {
        const singleSeat = state.find((item) => item.id === seat.id);
        if (singleSeat && singleSeat.isSelected) {
          singleSeat.isBooked = true; 
          singleSeat.isSelected = false; 
        } else {
          console.log(`Seat ${singleSeat} could not be booked because it's either already booked or not selected.`);
        }
      })
    },
  },
});

export const selectAllSeats = (state) => state.seatSlice;
export const selectPlatinumSeats = (state) => {
  return state.seatSlice.filter((seat) => seat.category === "platinum");
};
export const selectGoldSeats = (state) => {
  return state.seatSlice.filter((seat) => seat.category === "gold");
};
export const selectSilverSeats = (state) => {
  return state.seatSlice.filter((seat) => seat.category === "silver");
};

export const selectSelectedSeats = (state) => {
  return state.seatSlice.filter((seat) => seat.isSelected);
};

export const { toggleSelectSeat,bookSelectedSeats } = seatSlice.actions;
export default seatSlice.reducer;

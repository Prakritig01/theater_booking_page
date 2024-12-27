import { createSlice } from "@reduxjs/toolkit";
import { generateSeats } from "../utils/generateSeats";


function filterSelectedSeats(allSeats){
  return allSeats.filter((seat) => seat.status === 'selected');
}

const seatSlice = createSlice({
  name: "seats",
  initialState: generateSeats(),
  reducers: {
    toggleSelectSeat: (state, action) => {
      const id = action.payload;
      const seat = state.find((seat) => seat.id === id);
      if (seat) {
        if (seat.status === "available") {
          seat.status = "selected";
        } else if (seat.status === "selected") {
          seat.status = "available";
        } else if (seat.status === "booked") {
          console.log(`Seat ${id} is already booked and cannot be selected.`);
        }
      }
    },
    bookSelectedSeats: (state,action) => {
      const selectedSeats = filterSelectedSeats(state);
      // console.log("selected Seats in slice :" ,selectedSeats);
      selectedSeats.forEach((seat)=> {
        seat.status = "booked";
        console.log({...seat});
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

export const selectSelectedSeats = (state) => filterSelectedSeats(state.seatSlice);

export const selectTotalAmount = (state) => {
  const selectedSeats = selectSelectedSeats(state);
  console.log("selected seats in amount" ,selectedSeats);
  return selectedSeats.reduce((total, seat) => total + seat.price, 0);
};



export const { toggleSelectSeat,bookSelectedSeats } = seatSlice.actions;
export default seatSlice.reducer;

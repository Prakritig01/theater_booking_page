import { createSlice } from "@reduxjs/toolkit";
import { generateSeats } from "../utils/generateSeats";
import { layout } from "../utils/constants";

function filterSelectedSeats(allSeats) {
  return allSeats.filter((seat) => seat.status === "selected");
}

const seatSlice = createSlice({
  name: "seats",
  initialState: generateSeats(layout),
  reducers: {
    toggleSelectSeat: (state, action) => {
      const { id, categoryName } = action.payload;
      const category = state.find((category) => category.name === categoryName);

      if (category) {
        category.rows.forEach((row) => {
          row.forEach((seat) => {
            if (seat.id === id) {
              if (seat.status === "available") {
                seat.status = "selected"; // Mark as selected
              } else if (seat.status === "selected") {
                seat.status = "available"; // Mark as available
              }
              // console.log("seat" ,{...seat});
            }
          });
        });
      }
    },
    bookSelectedSeats: (state, action) => {
      const {selectedSeats} = action.payload;
      console.log("selectedSeats",selectedSeats);

      state.forEach((category) => {
        category.rows.forEach((row) => {
          row.forEach((seat) => {
            const selectedSeatIndex = selectedSeats.findIndex((s) => s.id === seat.id);
            if (selectedSeatIndex != -1) {
              seat.status = "booked";
              console.log(`Seat ${seat.id} booked.`);
            }
          });
        });
      });
    },
  },
});

export const selectAllSeats = (state) => state.seatSlice;

export const selectSelectedSeats = (state) => {
  return state.seatSlice.reduce((selectedSeats, category) => {
    category.rows.forEach((row) => {
      row.forEach((seat) => {
        if (seat.status === "selected") {
          selectedSeats.push(seat);
        }
      });
    });
    return selectedSeats;
  }, []);
};

export const { toggleSelectSeat, bookSelectedSeats } = seatSlice.actions;
export default seatSlice.reducer;

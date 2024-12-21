import { createSlice } from "@reduxjs/toolkit";
import { generateSeats } from "../utils/generateSeats";

const seatSlice = createSlice({
    name : "seats",
    initialState : generateSeats(),
    reducers : {
    }
});

export const selectAllSeats = (state) => state.seatSlice;
export const selectPlatinumSeats = (state) => {
    // console.log("seats :", state.seatSlice );
    return state.seatSlice.filter((seat) => seat.category === 'platinum')
};
export const selectGoldSeats = (state) => {
    // console.log("seats :", state.seatSlice );
    return state.seatSlice.filter((seat) => seat.category === 'gold')
};
export const selectSilverSeats = (state) => {
    // console.log("seats :", state.seatSlice );
    return state.seatSlice.filter((seat) => seat.category === 'silver')
};

export default seatSlice.reducer;
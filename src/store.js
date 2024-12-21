import { configureStore } from "@reduxjs/toolkit";
import seatSliceReducer from './slices/SeatSlice'


export default configureStore({
    reducer : {
        seatSlice : seatSliceReducer,
    }
});
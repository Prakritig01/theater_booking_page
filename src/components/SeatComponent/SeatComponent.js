import React from 'react'
import PlatinumSeats from '../PlatinumSeats/PlatinumSeats'
import GoldSeats from '../GoldSeats/GoldSeats'
import SilverSeats from '../SilverSeats/SilverSeats'
import { useSelector } from 'react-redux';
import { selectAllSeats ,selectPremiumSeats} from '../../slices/SeatSlice';

const SeatComponent = () => {
  return (
    <div>
      <PlatinumSeats/>
      <GoldSeats/>
      <SilverSeats/>
    </div>
  )
}

export default SeatComponent

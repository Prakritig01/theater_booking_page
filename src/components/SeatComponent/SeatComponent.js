import React from 'react'
import PlatinumSeats from '../PlatinumSeats/PlatinumSeats'
import GoldSeats from '../GoldSeats/GoldSeats'
import SilverSeats from '../SilverSeats/SilverSeats'

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
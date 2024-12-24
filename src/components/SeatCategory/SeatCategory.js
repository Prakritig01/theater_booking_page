import React from 'react'
import { groupSeatsByRow } from '../../utils/groupSeats';
import SingleSeat from '../SingleSeat/SingleSeat';

const SeatCategory = ({title,price,seats}) => {
    const rows = groupSeatsByRow(seats,20);
  return (
    <div className="container mx-auto p-4">
      <h3 className="flex justify-center my-2">
        {title} : ₹{price}
      </h3>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1 mb-2">
          {row.map((seat) => (
            <SingleSeat key={seat.id} seat={seat} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default SeatCategory;

 // Function to group seats by row
export  const groupSeatsByRow = (seats, seatsPerRow) => {
    const rows = [];
    for (let i = 0; i < seats.length; i += seatsPerRow) {
      rows.push(seats.slice(i, i + seatsPerRow)); // Group seats into rows of `seatsPerRow`
    }
    return rows;
  };
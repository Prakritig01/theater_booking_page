export const generateSeats = () => {
  const rows = 12;
  const columns = 20;
  const seatData = [];

  for (let row = 1; row <= rows; row++) {
    for (let column = 1; column <= columns; column++) {
      let price, category;

      // Determine the price and category based on the row
      if (row === 1) {
        price = 300;
        category = "platinum";
      } else if (row >= 2 && row <= 9) {
        price = 200;
        category = "gold";
      } else if (row >= 10 && row <= 12) {
        price = 100;
        category = "silver";
      }

      seatData.push({
        id: `${row}-${column}`, // Unique seat identifier
        row,
        column,
        isBooked: false, // Default state for each seat
        isSelected: false, 
        price,           // Price of the seat
        category        // Category of the seat
      });

    }
  }

  return seatData;
};

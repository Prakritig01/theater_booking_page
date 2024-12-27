
 const generateSeats = (layout) => {

  const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
  let alphaCount = 0;
   return layout.reverse().map((section) => {
    const {name,price,rows,columns} = section;
    const singleCategoryObj = {};
    singleCategoryObj.name = name;
    singleCategoryObj.price = price;
    const rowArray = [];
    for(let i = 1; i<= rows ; i++){
      const singleRow = [];
      for(let j = 1; j<= columns; j++){
        singleRow.push({ id : ALPHA[alphaCount]+j, status : 'available'});
      }
      // console.log("singleRow :" ,singleRow);
      alphaCount++;
      rowArray.push(singleRow);
    }
    // console.log("rowArray :" ,rowArray);
    singleCategoryObj.rows = rowArray;
    return { name, price, rows: rowArray };
    // console.log("singleCategoryObj",singleCategoryObj);
  }).reverse();
};

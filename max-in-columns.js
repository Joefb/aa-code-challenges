//Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing the maximum value in each column. 
//The array length should be equal to the number of columns, such that returnArray[i] is equal to the max value in the ith column.

//1. create func, 1 para arr
//  - create columnNums[0, 0, 0]
//  - iterate arr
//  - create row var
//  - iterate row  
//  - create num var
//  - if column[i] > columnMaxNums[i]
//  - columnNums.splice(i, 1, column[i])
//  - return columnNums

function maxColumn(matrix) {
  //let columnMaxNums = [0, 0, 0];
  let columnMaxNums = [];
  matrix.forEach(_ => columnMaxNums.push(0));

  for (let i = 0; i < matrix.length; i++) {
      let row = matrix[i];
      
      for (let j = 0; j < row.length; j++) {
          let colNum = row[j];
          
          if (colNum > columnMaxNums[j]) {
              columnMaxNums.splice(j, 1, colNum);
          }
      }
  }
  
  return columnMaxNums;
}

matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

console.log(maxColumn(matrix)); // [12, 19, 21]

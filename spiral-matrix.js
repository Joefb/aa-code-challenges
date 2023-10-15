//Write a function spiralOrder(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing the elements in spiral order.


function spiralOrder(matrix) {
    let spiralArr = [];
  
    let leftBoundry = 0;
    let topBoundry = 0;
    let rightBoundry = matrix[0].length - 1;
    let bottomBoundry = matrix.length - 1;
    let totalElements = matrix.length * matrix[0].length;
    
    for (let elesHit = 0; elesHit <= totalElements; elesHit++) {
        // move right
        for (let i = leftBoundry; i <= rightBoundry; i++) {
            let num = matrix[topBoundry][i];
            spiralArr.push(num);
            elesHit++;
        }
        topBoundry++;
          
        // move down
        for (let i = topBoundry; i <= bottomBoundry; i++) {
            let num = matrix[i][rightBoundry];
            spiralArr.push(num);
            elesHit++;
        }
        rightBoundry--;
          
        // move left
        for (let i = rightBoundry; i >= leftBoundry; i--) {
            let num = matrix[bottomBoundry][i];
            spiralArr.push(num);
            elesHit++;
        }
        bottomBoundry--;
    
        // move up     
        for (let i = bottomBoundry; i >= topBoundry; i--) {
            let num = matrix[i][leftBoundry];
            spiralArr.push(num);
            elesHit++;
        }
        leftBoundry++;
    }

  return spiralArr;
}

matrix = [[ 1, 2, 3],
          [ 4, 5, 6],
          [ 7, 8, 9]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9,10,11,12],
          [13, 14, 15, 16]]


console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]


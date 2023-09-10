//Write a function nextPrime that accepts a number as an argument. 
//The function should return the nearest prime number that is greater than the given number.

//1. make isPrime helper function
//  - take in num
//  - iterate 2 to num
//  - if num % 2 has 0 remainder return false
//  - else return true
let isPrime = function(num) {
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
};

//2. create nextPrime fun
//  - create checkNum var for passed in num + 1
//  - create inf while loop
//  - if checkNum isPrime return checkNum
//  - else checkNum++
function nextPrime(num) {
    let checkNum = num + 1;
    
    while (true) {
        if (isPrime(checkNum)) {
            return checkNum;
        }
        checkNum++;
    }
}

console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23

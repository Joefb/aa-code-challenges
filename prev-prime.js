//Write a function prevPrime that accepts a number as an argument. 
//The function should return the nearest prime number that is smaller than the given argument. 
//Since 2 is the smallest prime number, return null if no number can be returned.

// start from passed in num
// iterate backwords
// check if num prime, helper funct
// if prime return num

//1. create isPrime funct pass in num
//  - iterate 2 to num
//  - if num % i =0 return false
//  - else return true

let isPrime = function(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
};

//2. create funct. pass in num
//  - if num < 3 return null 
//  - iterate num to 2
//  - if num prime return num

function prevPrime(num) {
    if (num < 3) {
        return null;
    }
    
    for (let i = num - 1; i > 2; i--) {
        if (isPrime(i)) {
            return i;
        }
    }
}

//test 
//console.log(isPrime(31));
console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7));  // 5
console.log(prevPrime(4));  // 3
console.log(prevPrime(2));  // null
console.log(prevPrime(1));  // null

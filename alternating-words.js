//Write a function alternatingWords that accepts an array of words as an argument. 
//The function should mutate the input array such that the words alternate between fully uppercase or lowercase. 
//The first word should be uppercase.

//1. create funct, para arr
//  - iterate arr
//  - on even ele upper case
//  - on odd ele lower case
//  - return arr

let alternatingWords = function(arr) {
    for (i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            arr[i] = arr[i].toUpperCase();
        } else {
            arr[i] = arr[i].toLowerCase();
        }
    }
    
    return arr;
}


let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]

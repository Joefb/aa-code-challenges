//Write a function hasThreeVowels that accepts a string as an argument.
//The function should return a boolean indicating whether or not the string contains at least three different vowels.

// Your code here

//0. create a tracker var
//1. create vowel counter var
//2. create vowels var
//3. iterate over string
//4. if char is vowel check to see if vowel in tracker
//   -4.1. if vowel in tracker then continue, if not add vowel to tracker
//5. return tracker >= 3

function hasThreeVowels(string) {
    //let counter = 0;
    let vowels = "aeiou";
    let tracker = "";


    for (i = 0; i < string.length; i++) {
        if ((vowels.includes(string[i])) && !(tracker.includes(string[i]))) {
            //counter++;
            tracker += string[i];
        }
    }

    //return counter >= 3;
    return tracker.length >= 3;
}


console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

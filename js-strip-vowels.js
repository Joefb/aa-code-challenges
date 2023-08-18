// Write a function abbreviate(word) that takes in a string arg.
//The function should return a new string where all of its vowels are removed.

//1. create a var to hold vowels
//2. create a var for new word
//3. iterate througt word
    //a. if letter is not vowel add to new word var
//4 return new word var

function abbreviate(word) {
   let vowels = "aeiou";
   let newWord = "";

   for (let i = 0; i < word.length; i++) {
       if (!(vowels.includes(word.toLowerCase()[i]))) {
           newWord += word[i];
       }
   }

   return newWord;
}

console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'

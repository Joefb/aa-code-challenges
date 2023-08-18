/ So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

//

function pigLatinWord(word) {
  // your code here...
  //return word.slice(2);
  //return word.slice(1, 4);

  let vowels = "aeiou";

  if (vowels.includes(word[0])) {
      return word + "yay";
  };

  for (i = 0; i < word.length; i++) {
      //console.log(word[i]);
      if (vowels.includes(word[i])) {
          vowelStart = word[i];
          return word.slice(i) + word.slice(0, i) + "ay"
      }
  }
}

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"

// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

//1. create function, 1 para str word
//  - create vowels var
//  - iterate word backwards
//  - if char vowel
//  - return word + word.slice(i)

function repeatLastLets(word) {
    let vowels = "aeiou";
    
    for (let i = word.length - 1; i > 0; i--) {
        let char = word[i];

        if (vowels.includes(char)) {
            return word + word.slice(i);
        }
    }
}

//2. create func, 1 para str sentence
//  - create vowels var
//  - split sentence on space
//  - iterate arr 
//  - let lastChar = word.slice(-1)
//  - if word len > 3 and vowels includes lastChar 
//  - word = word.repeat(2);
//  - arr.splice(i, 1, doubleWord);
//  - else let newWord = repeatLastLets
//  - arr.splice(i, 1, newWord
//  - return arr

function repeatingTranslate(sentence) {
    let splitSent = sentence.split(" ");
    let vowels = "aeiou";

    for (let i = 0; i < splitSent.length; i++) {
        let word = splitSent[i];
        let lastChar = word.slice(-1);
       
        if (word.length >= 3 && !vowels.includes(lastChar)) {
            splitSent.splice(i, 1, repeatLastLets(word));
        } else if (word.length >= 3 && vowels.includes(lastChar)) {
            splitSent.splice(i, 1, word.repeat(2));
        }
    }
    
    return splitSent.join(" ");
}


//console.log(repeatLastLets("running"));
console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

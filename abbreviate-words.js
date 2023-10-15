//Write a function abbreviateWords(sentence) that takes in a sentence string. 
//The function should return a new sentence where words that are longer than 4 characters have their vowels removed. 
//Hint: Consider creating a helper function to remove all vowels in a string.

//1. create func, 1 para, str word
//  - create vowels var
//  - create newWord var
//  - iterate word
//  - if char not in vowels then add to newWord 
//  - return newWord

let stripVowels = function(word) { 
    let vowels = "aeiou";
    let newWord = "";
    
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!vowels.includes(char)) {
            newWord += char;
        }
    }
    
    return newWord;
};

//2. create func, 1 para, str sentence
//  - split sentence on space
//  - iterate arr
//  - if word > 4
//  - word = stripVowels[word]
//  - arr.splice(i, 1, word)
//  - return arr

function abbreviateWords(sentence) {
    let splitSen = sentence.split(" ");
    
    for (let i = 0; i < splitSen.length; i++) {
        let word = splitSen[i];
        
        if (word.length > 4) {
            word = stripVowels(word);
            splitSen.splice(i, 1, word);
        }
    }
    
    return splitSen.join(" ");
}

//console.log(stripVowels("hello"));
console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg

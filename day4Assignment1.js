
//Length of Last Word
function lastWordLength(str) {

    let words = str.trim().split(" ");

    let lastWord = words[words.length - 1];

    return lastWord.length;
}

console.log(lastWordLength("Hello World"));
console.log(lastWordLength(" fly me to the moon "));



//Anagram Check


function isAnagram(str1, str2) {

    let first =
        str1.toLowerCase()
            .split("")
            .sort()
            .join("");

    let second =
        str2.toLowerCase()
            .split("")
            .sort()
            .join("");

    return first === second;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
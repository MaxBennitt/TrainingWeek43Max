// Hello.
// This is a set of exercises.
// The idea is to practice a few things at a time.
// You do this by writing your answer after a task is given (see the example).
// Use the concepts from our sylabus. 

// DO NOT change the provided code unless the task specifically says to do so.

/* -----------------------------------------------------------------------------
    Task: Example
    Write code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    create a function that "draws" a tree of a given height.
    Example the following is a tree of height 5

           5        *
           4       ***
           3      *****
           2     *******
           1        x
*/
console.log("Task: A");

function drawTree(height) {
    for (let i = height; i >= 1; i--) {
        if (i === 1) {
            let spaces = " ".repeat(height);
            console.log(`${i}${spaces}x`);
        } else {
            let stars = 2 * (height - i) + 1;
            let spaces = " ".repeat(height - (height - i));
            console.log(`${i}${spaces}${"*".repeat(stars)}`);
        }
    }
}

drawTree(5);

/* -----------------------------------------------------------------------------
    Task: B

    Write a function that "draws" an arrow of a given size.
    Example: This is an arrow of size 3.

    *
    * *
    * * *
    * *
    * 
*/
console.log("Task: B");

function drawArrow(size) {
    for (let i = 1; i <= size; i++) {
        console.log("* ".repeat(i));
    }

    for (let i = size - 1; i >= 1; i--) {
        console.log("* ".repeat(i));
    }
}

drawArrow(3);

/* -----------------------------------------------------------------------------
    Task: C
    Write a function that draws a box of n by m dimensions. Take into acount the diffrence in aspectratio.

    Example: This is a aproximatly a 2 by 2 box. 
    +--------+
    |        |
    |        |
    +--------+
*/
console.log("Task: C");

function drawBox(height,width) {
    const widthMultiplier = 3;
    const adjustedWidth = width * widthMultiplier;
    console.log("+" + "-".repeat(adjustedWidth) + "+");

    for (let i = 0; i < height; i++) {
        console.log("|" + " ".repeat(adjustedWidth) + "|");
    }

    console.log("+" + "-".repeat(adjustedWidth) + "+");
}

drawBox(2, 2);

/* -----------------------------------------------------------------------------
    Task: D
    Write a function that returns true if a word is a Heterogram.   
*/
console.log("Task: D");

function isHeterogram(word) {
    word = word.toLowerCase().replace(/[^a-z]/g, '');
    return word.length === new Set(word).size;
}

console.log(isHeterogram("Banana"));
console.log(isHeterogram("World"));
console.log(isHeterogram("mK21IoA"));

/* -----------------------------------------------------------------------------
    Task: E
    Write a function that returns true if two words are Anagrams.
*/
console.log("Task: E");

function isAnagrams(word1, word2) {
    word1 = word1.toLowerCase().replace(/[^a-z]/g, '');
    word2 = word2.toLowerCase().replace(/[^a-z]/g, '');

    if (word1.length !== word2.length) return false
    let charCount = {};

    for (let char of word1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of word2) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }
    return true;
}

console.log(isAnagrams("Spar", "Rasp"))
console.log(isAnagrams("food", "sword"))
console.log(isAnagrams("Beta", "beat"))
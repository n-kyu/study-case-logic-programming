function wordScramble(word) {
    // we create a constant to separate the word
    const lettersInOrder = word.split("");
    // we create a constant to store the shuffled words in an array
    const scrambledLetters = [];

    // we perform a check inside a loop to reach the entire length of the word
    while (lettersInOrder.length) {
        // draw a number from 0 to length, we use parseInt to transform into an integer
        const sorted = parseInt(Math.random() * lettersInOrder.length);

        // From the drawn number, we select and remove a letter
        const selectedLetters = lettersInOrder.splice(sorted, 1)[0];

        // we add the letter selected by selectedLetters to our scrambledLetters array
        scrambledLetters.push(selectedLetters);
    }
    // return
    return scrambledLetters.join("");
}

console.log(wordScramble("javascript"));
console.log(wordScramble("juquinha"));

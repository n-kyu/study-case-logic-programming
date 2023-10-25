function wordScramble(word) {
    const lettersInOrder = word.split("");
    const scrambledLetters = [];

    while (lettersInOrder.length) {
        const sorted = parseInt(Math.random() * lettersInOrder.length);
        const selectedLetters = lettersInOrder.splice(sorted, 1)[0];

        scrambledLetters.push(selectedLetters);
    }

    return scrambledLetters.join("");
}

console.log(wordScramble("javascript"));
console.log(wordScramble("juquinha"));

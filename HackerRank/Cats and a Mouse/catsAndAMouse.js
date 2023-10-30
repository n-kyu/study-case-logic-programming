function catAndMouse(x, y, z) {
    // variables to store the cats and mouse
    let catA = x;
    let catB = y;
    let mouseC = z;

    //we calculate Rat - Cat A compared to Rat - Cat B
    //we added Math.abs to bring the absolute value in case any of the results are a negative result
    if (Math.abs(mouseC - catA) < Math.abs(mouseC - catB)) {
        return "Cat A";
    } //we compare whether the result is the same so that the mouse escapes
    else if (Math.abs(mouseC - catA) === Math.abs(mouseC - catB)) {
        return "Mouse C";
    } // if cat A is not smaller than cat B and if the results are not equal, we return cat B
    else {
        return "Cat B";
    }
}

console.log(catAndMouse(1, 3, 2));

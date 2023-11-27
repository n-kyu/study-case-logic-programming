function reverseArray(a) {
    // Write your code here
    // return a.reverse();
    let smallPointer = 0;
    let bigPointer = a.length - 1;

    while (smallPointer < bigPointer) {
        // swap
        let tmp = a[bigPointer];
        a[bigPointer] = a[smallPointer];
        a[smallPointer] = tmp;

        smallPointer++;
        bigPointer--;
    }
    return a;
}

console.log(reverseArray([1, 2, 3, 5]));

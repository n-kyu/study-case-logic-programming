function simpleArraySum(ar) {
    let sum = 0;
    for (let index = 0; index < ar.length; index += 1) {
        sum = sum + ar[index];
    }
    return sum;
}

console.log(simpleArraySum([338, 65, 713, 595, 428, 610, 728, 573, 871, 868]));

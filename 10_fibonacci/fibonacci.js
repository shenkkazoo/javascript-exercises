const fibonacci = function(member) {
    if (member < 0) { return "OOPS"; }
    let currentNumber = 0;
    let nextNumber = 1;
    let sum = 0;

    for (let i = 0; i < member; i++) {
        sum = currentNumber + nextNumber;
        currentNumber = nextNumber;
        nextNumber = sum;
        console.log(currentNumber);
    }

    return currentNumber;
};

// Do not edit below this line
module.exports = fibonacci;

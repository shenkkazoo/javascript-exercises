const sumAll = function(numOne,numTwo) {

    if (numOne < 0 || numTwo < 0) {
        return "ERROR";
    }

    if (typeof numOne === "string" || typeof numTwo === "string") {
        return "ERROR";
    }

    if (isNaN(numOne) || isNaN(numTwo)) {
        return "ERROR";
    }


    let finalNum = 0;

    const smallNum = (numOne < numTwo) ? numOne : numTwo;
    const largeNum = (numOne > numTwo) ? numOne : numTwo;

    for (let i = smallNum; i <= largeNum; i++) {
        finalNum += i;
    }

    return finalNum;

};

// Do not edit below this line
module.exports = sumAll;

const reverseString = function(str) {
    const splitArray = str.split("");
    const reverseArray = splitArray.reverse();
    let newStr = "";
    for (const chara of reverseArray) {
        newStr += chara;
    }    
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;

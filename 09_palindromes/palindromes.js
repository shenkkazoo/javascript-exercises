const palindromes = function (str) {
    let reverseStr = reverseString(str);

    reverseStr = removeSpecial(reverseStr);
    str = removeSpecial(str);

    if (str.toLowerCase() === reverseStr.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
};

function reverseString(str) {
    const splitArray = str.split("");
    const reverseArray = splitArray.reverse();
    let newStr = "";
    for (const chara of reverseArray) {
        newStr += chara;
    }    
    return newStr;
}

function removeSpecial(str) {
    //need to figure out what this regex is actually doing, because it's throwing me for a Loop!
    const special = /[^\w]/gi;
    return str.replace(special, '');
}

// Do not edit below this line
module.exports = palindromes;

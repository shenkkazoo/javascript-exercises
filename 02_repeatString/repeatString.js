const repeatString = function(str,num) {
    if (num >= 0) {
        let finalStr = "";
        for (let i = 0; i < num; i++) {
            finalStr += str;
        }
        return finalStr;
    }
    else return "ERROR";
};
// Do not edit below this line
module.exports = repeatString;

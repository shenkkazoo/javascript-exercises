const removeFromArray = function(...args) {
    let arrayOne = args[0];

    let newArr = [];

    for (const item of arrayOne) {
            if (!args.includes(item)) {
                newArr.push(item);
            }
        }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

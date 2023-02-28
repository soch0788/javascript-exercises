const removeFromArray = function() {
    let inputArray = arguments[0];
    for (let i = 1; i < arguments.length; i++){
    let removedValue = arguments[i];
    if (inputArray.indexOf(removedValue) != -1) {
        inputArray.splice(inputArray.indexOf(removedValue),1)
    }
}
    return inputArray
};

// Do not edit below this line
module.exports = removeFromArray;

const sumAll = function(numOne, numTwo) {
let largeNum;
let smallNum;
if (numOne < 0 || numTwo < 0){
    return("ERROR");
}
else if(typeof(numOne) != "number" | typeof(numTwo)!= "number")
{
    return("ERROR")
}
else if(numOne >= numTwo) {
     smallNum = numTwo;
     largeNum = numOne;
}
else {
     smallNum = numOne;
     largeNum = numTwo;  
}
let sum = ((largeNum-smallNum+1)/2)*(largeNum+smallNum)
return(sum)

};

// Do not edit below this line
module.exports = sumAll;

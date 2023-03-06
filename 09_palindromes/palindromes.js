const palindromes = function (testString) {
let newString = ""
let words = testString.split(/\W/)
testString = words.join("")
testString = testString.toLowerCase()
for(i=0;i<testString.length;i++){
    newString = testString[i] + newString
}
return(newString==testString)
};

// Do not edit below this line
module.exports = palindromes;

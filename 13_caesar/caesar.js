const caesar = function(string, shift) {
let newString = ""
const regexTest = /\w/
for(let i = 0; i < string.length; i++)
{   
    let Lcase = 1
    let temp = string.charCodeAt(i)
    if(temp > 96)
    {
        Lcase = 0
    }
    if(regexTest.test(string[i])){
    temp = temp + shift
    while(Lcase == 0 && temp > 122){
        temp -= 26
    }
    while(Lcase == 0 && temp < 97){
        temp += 26
    }
    while(Lcase == 1 && temp > 90){
        temp -= 26
    }
    while(Lcase == 1 && temp < 65){
        temp += 26
    }

    }
    
    newString += String.fromCharCode(temp)
}
return(newString)
};

// Do not edit below this line
module.exports = caesar;

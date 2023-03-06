const fibonacci = function(location) {
if(location < 0) {
    return("OOPS")
}
else if(location == 0) {
    return(0)
}
let small = 1
let large = 1
let temp = 0
for(let i = 2; i <location; i++)
{
temp = large + small
small = large
large = temp
}
return(large)
};

// Do not edit below this line
module.exports = fibonacci;

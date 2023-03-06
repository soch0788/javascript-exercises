const findTheOldest = function(people) {
// const person = people.map(pers => [{
//     name: pers.name,
//     yearOfBirth: pers.yearOfBirth,
//     yearOfDeath: pers.yearOfDeath,
//     age: (pers.yearOfDeath - pers.yearOfBirth),
//                                     }])



const person = [...people].sort((a,b) => {
    let aAge
    let bAge
    if (!a.yearOfDeath)
    {
        aAge = 2023 - a.yearOfBirth    
    }
    else {
        aAge = a.yearOfDeath -a.yearOfBirth
    }
    if(!b.yearOfDeath)
    {
        bAge = 2023 - b.yearOfBirth
    }
    else {
        bAge = b.yearOfDeath - b.yearOfBirth
    }
    
    if ((aAge) < (bAge)) {
        return(1)
                }
    else {
        return(-1)
                    }
                        }
                            )
return(person[0])

};

// Do not edit below this line
module.exports = findTheOldest;

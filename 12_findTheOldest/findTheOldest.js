const findTheOldest = function(people) {
    let oldestPerson = people[0];
    oldestPerson = people.reduce((personA, personB) => {
        let personAAge, personBAge, oldestAge;

        if (personA.yearOfDeath === undefined) {
            personAAge = 2022 - personA.yearOfBirth;
        }
        else {
            personAAge = personA.yearOfDeath - personA.yearOfBirth;
        }

        
        if (personB.yearOfDeath === undefined) {
            personBAge = 2022 - personB.yearOfBirth;
        }
        else {
            personBAge = personB.yearOfDeath - personB.yearOfBirth;
        }


        if (oldestPerson.yearOfDeath === undefined) {
            oldestAge = 2022 - oldestPerson.yearOfBirth;
        }
        else {
            oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
        }

        if (personAAge > personBAge && oldestAge) { return personA; }
        else if (personBAge > personAAge && oldestAge) { return personB; }
        else { return oldestPerson; }
        
    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

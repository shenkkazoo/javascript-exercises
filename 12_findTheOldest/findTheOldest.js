const findTheOldest = function(people) {
    let oldestPerson = people[0];
    oldestPerson = people.reduce((personA, personB) => {
        const personAAge = getAge(personA);
        const personBAge = getAge(personB);
        const oldestAge = getAge(oldestPerson);

        if (personAAge > personBAge && oldestAge) { return personA; }
        else if (personBAge > personAAge && oldestAge) { return personB; }
        else { return oldestPerson; }
    });

    return oldestPerson;
};

const getAge = function(person) {
    if (!person.yearOfDeath) {
        return 2022 - person.yearOfBirth;
    }
    else {
        return person.yearOfDeath - person.yearOfBirth;
    }
};

// Do not edit below this line
module.exports = findTheOldest;

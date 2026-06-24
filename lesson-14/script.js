class Person {

    constructor(name, gender) {

        this.name = name;

        this.gender = gender;
    }
}

class Apartment {

    constructor() {

        this.residents = [];
    }

    addResident(person) {

        this.residents.push(person);
    }
}

class Building {

    constructor(maxFlats) {

        this.maxFlats = maxFlats;

        this.flats = [];
    }

    addApartment(apartment) {

        if (
            this.flats.length <
            this.maxFlats
        ) {

            this.flats.push(apartment);

        } else {

            console.log(
                "Cannot add more apartments, limit reached!"
            );
        }
    }
}

const alice =
    new Person(
        "Alice",
        "female"
    );

const bob =
    new Person(
        "Bob",
        "male"
    );

const charlie =
    new Person(
        "Charlie",
        "male"
    );

const apt1 =
    new Apartment();

const apt2 =
    new Apartment();

apt1.addResident(alice);

apt1.addResident(bob);

apt2.addResident(charlie);

const myBuilding =
    new Building(2);

const apt3 =
    new Apartment();

myBuilding.addApartment(apt3);





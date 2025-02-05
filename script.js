// 1. Practice with factory functions

/*
Create a factory function for a Car object
  it should take in a make, model, and year.
  it should have a method that prints out a description of the car
  create two different cars and call the method on each
*/

function Car(make, model, year) {
    const car = { 
        make, model, year,
        describe: function() {
            console.log(`This ${this.make} ${this.model} was made in ${this.year}.`);
        }
    }
    return car;
};

const car1 = Car("Toyota", "Avalon", 2015);
const car2 = Car("Honda", "Civic", 2010);
console.log(car1.describe());
console.log(car2.describe());

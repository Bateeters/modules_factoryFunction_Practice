// 1. Practice with factory functions

/*
Create a factory function for a Car object
  it should take in a make, model, and year.
  it should have a method that prints out a description of the car
  create two different cars and call the method on each
*/

function Car(make, model, year) { // Create a factory function for Car object
    const car = { 
        make, model, year, // it should take in make, model, and year
        describe: function() { // it should have a method that prints out a description of the car
            console.log(`This ${this.make} ${this.model} was made in ${this.year}.`);
        }
    }
    return car;
};

const car1 = Car("Toyota", "Avalon", 2015); // create two different cars and call the method on each
const car2 = Car("Honda", "Civic", 2010);
console.log(car1.describe());
console.log(car2.describe());



// 2. Encapsulation with the module pattern

/*
The module pattern helps organize related functions and keep variables private.

Try creating a simple counter module:
  the module should store a count variable privately
  it should have increment, decrement, and getCount functions
  only the functions should have access to modify the count value
*/

const counter = (() => { // created a simple counter module
    let count = 0; // count stored privately

    return {
        getCount: function(){ // getCount
            return count;
        },

        increment: function(){ // increment
            count++;
        },

        decrement: function(){ // decrement
            count --;
        }
    };
})();

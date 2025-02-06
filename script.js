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



// 3. Game Logic: tic-tac-toe Lite

/*
To practice game logic, write a function that:
  accepts a 3x3 array representing a tic-tac-toe board
  checks if a player has won by getting three in a row
  returns 'X' or 'O' if there's a winner, 'Tie' if the board is full, or null if the game is still ongoing.
    (try hardcoding some test boards and running them through your function to verify it works!)
*/

const gameBoard = (() => {
    let board = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];

    const getBoard = () => board;

    const updateBoard = (row, col, marker) => {
        if (board[row][col] === ""){
            board[row][col] = marker;
            return board;
        }
    };

    const checkWin = () => {
        const board = gameBoard.getBoard();
        const winConditions = [
            [board[0][0],board[0][1],board[0][2]],
            [board[1][0],board[1][1],board[1][2]],
            [board[2][0],board[2][1],board[2][2]],
            [board[0][0],board[1][0],board[2][0]],
            [board[0][1],board[1][1],board[2][1]],
            [board[0][2],board[1][2],board[2][2]],
            [board[0][0],board[1][1],board[2][2]],
            [board[0][2],board[1][1],board[2][0]]
        ]
    }

    return{ getBoard, updateBoard, checkWin }
})();
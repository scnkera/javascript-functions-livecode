// const doubleTheNums = function(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] *= 2;
//     }
//     return arr;
// };

const doubleTheNums = arr => { 
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 2;
    }
    return arr;
}

let list1 = [1,2,3,4]
console.log(doubleTheNums(list1))

// convert above function to an arrow function

// Write a function that prints out "Good morning, class!"

const greeting = () => console.log('Good morning, class');

greetings()

// Write a function that prints a random number (integer) between 1 and 100.

// const randomNum = () => console.log(Math.floor(math.random() * 100) + 1)
// randomNum()

const randomNum = () => {
    randNum = Math.floor(Math.random() * 100 + 1
    console.log(ranNum))
}

randomNum()

// use one of the functions above as the action parameter when you invoke the callback function below
const doMultipleTimes = (action, numTimes) => {
    for (let i = 0; i < numTimes; i++) {
        console.log(action());
    }
};

doMultipleTimes(randomNum2, 7);



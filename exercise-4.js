// Create a function that can create a triangle pattern according to the height we provide like the following 


// Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz"
const fizzBuzz = (n) => {
    for(let i = 0; i <= n; i++) {
        if (i % 3 === 0) {
            console.info(`${i} adalah Fizz`) 
        } else if (i % 5 === 0) {
            console.info(`${i} adalah Buzz`) 
        } else if (i % 3 == 0 && i % 5 === 0) {
            console.info(`${i} adalah FizzBuzz`) 
        } else {
            console.info(i);
        }
    }
};
fizzBuzz(50);

// Create a function to calculate Body Mass Index (BMI)


// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
const removeOddNumbers = (n) => {
    let array = [];
    for(let i = 1; i <= n; i++) {
        array.push(i);
    }
    return array.filter((e) => e % 2 === 0);
}
console.info(removeOddNumbers(100));



// Write a function to split a string and convert it into an array of words
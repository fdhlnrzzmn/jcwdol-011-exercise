// Create a function that can create a triangle pattern according to the height we provide like the following 
{
const getLowestHighestAverage = (value) => {
    let arr = [];
    for(let i = 0; i <= value ;i++){
        arr.push(i);
    }
    // With Sort
    const useSort = arr.sort((a,b) => a - b);
    let terkecil = useSort[0];
    let terbesar = useSort[useSort.length - 1];
    let jumlahkan = arr.reduce((a, b) => {
        return a + b},0);
    let rataRata = jumlahkan / arr.length;
    
    // Without Sort
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let average = sum / arr.length;

    // With Sort
    console.info('With Sort');
    console.info(terkecil, terbesar, rataRata);

    // Without Sort
    console.info('Without Sort')
    console.info(min, max, average);
    
}
getLowestHighestAverage(100); // 0 100 50
}

// Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
{
const arrayToString = (arr) => {
    let str = '';
    for(let i = 0; i < arr.length; i++){
        if(i === arr.length - 1){
            str += `and ${arr[i]}`
        } else {
            str += `${arr[i]}, `
        }
    }
    return str;
}
console.info(arrayToString(["Monkey", "D", "Luffy"])) // Monkey, D, and Luffy
}

// Write a function to split a string and convert it into an array of words
{
const stringToArray = (str) => {
    let arrResult = [];
    let wordBox = "";
    for(let i = 0; i < str.length; i++){
        if(i === str.length - 1) {
            wordBox += str[i];
            arrResult.push(wordBox);
        } else if (str[i] === " ") {
            arrResult.push(wordBox);
            wordBox = "";
        } else {
            wordBox += str[i];
        }
    }
    return arrResult;
}
console.info(stringToArray("Hello World")) // ["Hello", "World"]
}

// Write a function to calculate each element in the same position from two arrays of integer.
{
const calculateArray = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return "Array length not equal"
    }

    let arrResult = [];
    for(let i = 0; i < arr1.length; i++){
        arrResult.push(arr1[i] + arr2[i])
    }
    return arrResult;

}
console.info(calculateArray([1,2,3],[3,2,1]))
}

// Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
{
const addElementAtEndArray = (e) => {
    let arr = [1,2,3,4,5,6,7,8,9,10];
    for(let i = 0; i < arr.length; i++){
        if(!arr.includes(e)){
            arr.push(e)
        }
    return arr;   
    }
}
console.info(addElementAtEndArray(11)); // [1,2,3,4,5,6,7,8,9,10,11]
}

// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
{
const numbersArray = (arr) => {
    let evenArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenArray.push(arr[i])
        }
    }
    return evenArray;
}
console.info(numbersArray([1,2,3,4,5,6,7,8,9,10])); // [2,4,6,8,10]
}



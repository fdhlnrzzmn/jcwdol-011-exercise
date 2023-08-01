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
getLowestHighestAverage(100);
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
console.info(arrayToString(["Monkey", "D", "Luffy"]))
}

// Write a function to split a string and convert it into an array of words
// {
// const stringToArray = (str) => {
//     let arr = [];
//     let needle = " ";
//     for(let i = 0; i < str.length; i++){
//         arr.push(str(i));
//     }
//     return arr;
// }
// console.info(stringToArray("Hello World"))
// }



// Write a function to calculate each element in the same position from two arrays of integer.



// Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.



// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only

// Write a code to check whether the date is a weekend.
const isWeekend = (dateHere) => {
    let date = new Date(dateHere);

    return (date.getDay() === 6 || date.getDay() === 0) ? `${dateHere} is weekend` : `${dateHere} is not weekend, but weekdays`;

}

console.info(isWeekend("2023-8-15"));
console.info(isWeekend("2023-8-19"));


// Write a code to find GCD of two numbers → use while.


// Write a code to find LCM of two numbers → use do ... while.


// Write a code to find most common character from a string


// Write a code to sort a string alphabetically (with and without sort function)
const sortAlphabetString = (word) => {
    // with sort
    let withSort = word.sort();
    return withSort;

    // without sort


}

console.info(sortAlphabetString(["Portgas D. Ace", "Sabo", "Monkey D. Luffy"]))


// Write a code to get minimum date from array of dates.
const minimumDate = (arrDate) => {

    let sortToMin = arrDate.sort();
    return `${sortToMin[0]} adalah tanggal terkecil dari ${arrDate}`;

}

console.info(minimumDate(["1924-3-3", "1945-8-17", "1902-1-1", "1902-1-2"]));


// Write a code that calculates the sum of all elements of a two-dimensional array


// Write a code to find the longest common prefix string amongst an array of strings.


// Write a code that copies the first half of an array. With an odd number of array elements, the middle element should belong to the first half


// Write a code to get the number of days in a month, Example : month = 1, year = 2022 → 31
const getNumberOfDaysInMonth = (year, month) => {
    return new Date(year,month,0).getDate()
}
console.info(getNumberOfDaysInMonth("2023", "2"));


// Write a code to count the number of days passed since beginning of the year


// Write a code to calculate age
const calculateAge = (birthOfBirth, dateToday) => {
    let dateBirth = new Date(birthOfBirth).getTime();
    let today = new Date(dateToday).getTime();

    let difference = Math.floor(today - dateBirth) / 31536000000;
    let split = difference.toString().split(".");
    let years = split[0];
    let month = split[1];
    
    return `hasilnya adalah ${years} tahun ${month} bulan` 

}

console.info(calculateAge("2001-1-11", "2023-8-13"));


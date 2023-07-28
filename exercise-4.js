// Create a function that can create a triangle pattern according to the height we provide like the following 
const buatSegi3 = (tingginya) => {
    let hasil = '';
    let angka = 1;
    for(let lvl = 0; lvl < tingginya; lvl++) {
        for (let clm = 0; clm <= lvl; clm++) {
            hasil += angka.toString().padStart(2, "0") + " ";
            angka++
        }
        hasil += "\n";
    }
    return hasil;
}
console.info(buatSegi3(4));


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
const cekBMI = (weight, height) => {
    let heightInMeter = height / 100;
    let bmi = weight / heightInMeter ** 2;
    console.info(bmi)
    if (bmi < 18.5) {
        return "less weight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "ideal";
    } else if (bmi >= 25.00 && bmi <= 29.00) {
        return "overweight";
    } else if (bmi >= 30.00 && bmi <= 39.9) {
        return "very overweight";
    } else {
        return "istighfar, obesity"
    }
}
console.info(cekBMI(70,177));


// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
const hapusAngkaGanjil = (n) => {
    let array = [];
    for(let i = 1; i <= n; i++) {
        array.push(i);
    }
    return array.filter((e) => e % 2 === 0);
}
console.info(hapusAngkaGanjil(100));


// Write a function to split a string and convert it into an array of words
const pisahStringJadiArray = (str) => {
    return str.split(" ");
}
console.info(pisahStringJadiArray("Hello World"));
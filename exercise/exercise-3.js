// Write a code to display the multiplication table of a given integer.
{
let angka = 9;
for (let i = 1; i <= 9; i++){
    console.info(`${angka} x ${i}`);
}
}

// Write a code to check whether a string is a palindrome or not.
{
let string = "hahahah";
let adalahPalindrome = true;

for(let i = 0; i <= string.length; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
        adalahPalindrome = false;
        break;
    } else {
        adalahPalindrome = true;
    }
}
console.info(adalahPalindrome ? `${string} adalah palindrome` : `${string} bukan palindrom`) 
}

// Write a code to convert centimeter to kilometer.
{
let cm = 28;
let km = cm / 100000;
console.info(`${cm}cm adalah ${km}km`)
}

// Write a code to format number as currency (IDR)
{
let ribuan = 1000;
let rupiah = ribuan.toLocaleString("id-ID", { style: "currency", currency: "IDR"});
console.info(rupiah)
}

// Write a code to remove the first occurrence of a given “search string” from a string
{
let word = "Hello World";
let cariKata = "ell";
let hasil = word.replace(cariKata, '');
console.info(hasil)
}

// Write a code to capitalize the first letter of each word in a string
// {
// let kata = "hello world";
// let hasil = kata.split(" ");
// for (let i = 0; i < hasil.length; i++) {
//     if (hasil[i] == [0][0]) {
//         console.info(hasil[0][0].toUpperCase);
//         break
//     }
// }
// }

// Write a code to reverse a string.
{
let string = "programming itu mudah bukan? bukan!";
let result = string.split("").reverse().join("");
console.info(result)
}


// Write a code to swap the case of each character from string


// Write a code to find the largest of two given integers
{
let a = 7;
let b = 10;
let terbesar = Math.max(a,b);
console.info(terbesar)
}


// Write a conditional statement to sort three numbers


// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type
let input1 = "Ronaldo";
let input2 = 7;
if (typeof input1 == "string") {
    console.info(`${input1} adalah string`);
} else if (typeof input2 == "number") {
    console.info(`${input2} adalah number`)
} else {
    console.info(`tipe data lain`)
}

// Write a code to change every letter a into * from a string of input
{
let kata = "An apple a day keeps the doctor away";
let hasil = kata.replace(/a/gi, '*');
console.info(hasil)
}


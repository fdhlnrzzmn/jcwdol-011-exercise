// Write a code to display the multiplication table of a given integer.
let angka = 9;
for (let i = 1; i <= 9; i++){
    console.info(`${angka} x ${i}`);
}

// Write a code to check whether a string is a palindrome or not.
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


// Write a code to convert centimeter to kilometer.
let cm = 28;
let km = cm / 100000;
console.info(`${cm}cm adalah ${km}km`)


// Write a code to format number as currency (IDR)
let ribuan = 1000;
let rupiah = ribuan.toLocaleString("id-ID", { style: "currency", currency: "IDR"});
console.info(rupiah)


// Write a code to remove the first occurrence of a given “search string” from a string


// Write a code to capitalize the first letter of each word in a string


// Write a code to reverse a string.



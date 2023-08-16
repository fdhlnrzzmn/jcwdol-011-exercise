// Celcius to Fahrenheit
let celcius = 90;
let fahrenheit = (9 / 5 * celcius) + 32;
console.log(fahrenheit)

// Odd or Even
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(`${i} adalah genap`)
  } else {
    console.log(`${i} adalah ganjil`)
  }
}

// Prime or Not
for (let i = 1; i <= 10; i++) {
  let bilanganPrima = true;

  if (i <= 1) {
    bilanganPrima = false;
  } else if (i <= 3) {
    bilanganPrima = true;
  } else if (i % 2 === 0 || i % 3 === 0) {
    bilanganPrima = false;
  } else {
    let pembagi = 5;
    while (pembagi * pembagi <= i) {
      if (i % pembagi === 0 || i % (pembagi + 2) === 0) {
        bilanganPrima = false;
        break;
      }
      pembagi += 6;
    }
  }

  const hasil = bilanganPrima ? "bilangan prima" : "bukan bilangan prima";
  console.log(`${i} adalah ${hasil}`);
}

// Sum Numbers
let result = 0;
for (let i = 0; i <= 5; i++) {
  result += i;
}
console.log(result);

// Factorial Number
let number = 10;
let factorial = 1;
for (let i = 1; i <= number; i++) {
  factorial *= i;
}
console.log(factorial);

// Fibonacci Numbers
const N = 7;
let angkaSebelum = 0;
let angkaSekarang = 1;

console.log(`Deret Fibonacci pertama ${N} angka:`);
console.log(angkaSebelum);

for (let i = 1; i < N; i++) {
  console.log(angkaSekarang);

  const angkaSelanjutnya = angkaSebelum + angkaSekarang;

  angkaSebelum = angkaSekarang;
  angkaSekarang = angkaSelanjutnya;
}
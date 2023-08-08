// soal 1
// string = "Pig latin is cool";
// result = " igPay atinlay siay oolcay !ay"

// pisah semua string ke array
// pindahkan awal kata dari tiap array ke index ke 2
// di tiap kata, tambahkan kata ay
// simpan kembali hasilnya menjadi sebuah string
function destroyString(str){
    
    return str.split(" ").map(item => item.slice(1) + item[0] + "ay").join(" ");
     
  }
  console.info(destroyString("Pig latin is cool !"));


// soal 2
// phone = [1,2,3,4,5,6,7,8,9];
// hasil = "(123) 456-7890"

// pisahkan setiap array
// tiap array yang terpisah tambahkan spesial karakter sesuai contoh
const createNumber = (arr) => {
    // cara 1
    // return `(${arr.slice(0, 3).join("")}) ${arr.slice(3, 6).join("")}-${arr.slice(6).join("")}`

    // cara 2
    let result = "(xxx) xxx-xxx";
    arr.map(item => {
        result = result.replace("x", item);
    })
    return result;

};

const arr = [1,2,3,4,5,6,7,8,9,0];
console.log(createNumber(arr));
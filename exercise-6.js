// Create a function to calculate array of student data
// {
// const calculateStudentData = (studentsArray) => {

//     let result = {
//         score: {
//             highest: studentsArray[0].score,
//             lowest:studentsArray[0].score,
//             average:0,
//         },
//         age:{
//             highest: (new Date() - studentsArray[0].age) / 31536000000,
//             lowest: (new Date() - studentsArray[0].age) / 31536000000,
//             average:0,
//         },
//     };

//     let totalScore = 0;
//     let totalAge = 0;

//     for(let i = 0; i < studentsArray.length; i++){
//         let years = (new Date() - studentsArray[i].age) / 31536000000;
//         if (studentsArray[i].score > result.score.highest) {
//             result.score.highest = studentsArray[i].score;
//         }
//         if (studentsArray[i].score < result.score.lowest) {
//             result.score.lowest = studentsArray[i].score
//         } 
//         if (years > result.age.highest) {
//             result.age.highest = studentsArray[i].age;
//         }
//         if (years < result.age.highest){
//             result.age.lowest = studentsArray[i].age;
//         }
//         totalScore += studentsArray[i].score;
//         totalAge += years;
//     }
    
//     result.score.average = totalScore / studentsArray.length;
//     result.age.average = totalAge / studentsArray.length;

//     return result;

// }

// const studentsArray = [
//     {
//         name: "Luffy",
//         email:"luffy@onepiece.com",
//         age: new Date("1999-1-1"),
//         score:100,
//     },
//     {
//         name: "Ace",
//         email:"ace@onepiece.com",
//         age: new Date("1997-1-1"),
//         score:90,
//     },
//     {
//         name: "Sabo",
//         email:"sabo@onepiece.com",
//         age: new Date("1998-1-1"),
//         score:80,
//     }
// ];

// console.info(calculateStudentData(studentsArray))
// }


// Create a program to create transaction
{
class Product {
    static productList = [];

    constructor(){
        this.productName;
        this.price
    }

    get getProductName(){
        return this.productName;
    }

    set setProductName(productName){
        this.productName = productName;
    }

    set setPrice(price){
        this.price = price;
    }
}

class Transaction {
    constructor(){
        this.total = 0;
        this.productCart = [];
    }

    addToCart(productName, quantity){
        for (let item of Product.productList) {
            if (productName === item.productName) {
                let priceTotal = item.price * quantity;
                let itemOrder = {
                    ...item,
                    quantity: quantity,
                    total: priceTotal,
                };
                this.productCart.push(itemOrder);
                this.total += priceTotal;
                return;
            } 
        }
        console.log("barang kosong");
    }

    get showTotal(){
        return this.total;
    }

    get checkout(){
        Object.freeze(this);
        return this;
    }
}

let product1 = new Product();
product1.setProductName = "Iphone 14";
product1.setPrice = 14000000;

let product2 = new Product();
product2.setProductName = "Macbook Pro";
product2.setPrice = 21000000;

Product.productList.push(product1, product2);

let transaction1 = new Transaction();
transaction1.addToCart("Macbook Pro", 2);

let transaction2 = new Transaction();
transaction2.addToCart("Iphone 14", 2);

}
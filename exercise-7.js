// Create a function to check if two objects are equal
const checkObj = (obj1, obj2) => {
    if(JSON.stringify(obj1) === JSON.stringify(obj2)){
        return "object sama"
    } else {
        return "object berbeda"
    }
}
console.info(checkObj({
    nama: "Ace",
    status: "die"
},
{
    nama: "Luffy",
    status: "alive"
}
));


// Create a function to get the intersection of two objects



// Create a function to merge two array of student data and remove duplicate data




// Create a function that can accept input as an array of objects and switch all values into




// Create a function to find a factorial number using recursion
// // 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
// function printGreeting() {
//     console.log("Hello fellow coders!");
// }

// printGreeting();
// printGreeting();
// printGreeting();

// // 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
// function catNumbers(first) {
//     console.log(`Hey there, looks like you got ${first} cats!`);
// }

// catNumbers(8);

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).
function payReport(name, maxNum, minNum) {
    var range = Math.abs(maxNum - minNum);
    return range = (`This sentance is about ${name} salary range, which is is ${range}`);
}

console.log(payReport("WalMart", 40000, 3000000));
// // 4: Write a function that satifies the following interaction pattern:

function checkStock(stockNum, product) {
    if (stockNum === 0) {
        console.log(`${product} is Out of stock!`)
    } else if (stockNum < 4) {
        console.log(`${product} - running LOW`)
    } else {
        console.log(`${product} is stocked`)
    }
}

checkStock(4, "Coffee");
// // => "Coffee is stocked"

checkStock(3, "Tortillas");
// // => "Tortillas - running LOW"

checkStock(0, "Cheese");
// // => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// // => "Salsa - running LOW"
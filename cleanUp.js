// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// // EX 1:
// // I added ";" at the end of line 14 and line 17. This is because of 
// good practice. The code will run without them.
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();


// // EX 2:
// // I added indent beginning line 24 25. Add ";" end of line 24. 
// // All changes for good practice, code runs without them. Moved bottom bracket back two tabs.
function addThreeNums(first, second, third) {
  var sum = first + second + third
  console.log(sum);
  }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// // EX 3:
// // Finish the definer "function" so the code can run. Add space between parenthesis and curly bracket
// // and moved last curly bracket to line 41. This was done to keep good form for code block.
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();


// //  EX 4:
// // Fixed space and placement of console.log and closing bracket for good form. Removed unwanted decimal point from 
// // line 52 enabling the code to run. Added ";" end of line 52, indented line 50, backspaced line 51 + 52 for good form.
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  console.log(`the average is: ${avg}`);
  }
  
// average(108, 56);
// ^^ added line of code to confirm desired output^^
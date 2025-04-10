// Q: 15
// Title:- Create a Number Pyramid with Break and Continue

// Problem Statement:
// Write a program that prints a pyramid of numbers, but with the following twist:

// Use a nested for loop to generate the pyramid.
// The number of rows in the pyramid should be based on user input (between 1 and 10).
// Skip printing numbers that are divisible by 3 using the continue statement.
// Stop the pyramid when you reach a row that contains a number divisible by 7 using the break statement.
// Example of input/output:

// Input Example:

// Enter number of rows (1-10): 5
// Output Example:

// 1
// 1 2
// 1 2
// 1 2 4
// 1 2 4 5
// In this example, the loop skips the numbers divisible by 3 and stops once a row contains a number divisible by 7.
//=========================================================

let rows = prompt("Enter number of rows (1-10):");

for (let i = 1; i <= rows; i++) {
  let bag = "";
  let stop = false;

  for (let j = 1; j <= i; j++) {
    if (j % 3 === 0) {
      continue; // skip if divisible by 3
    } 
    else if (j % 7 === 0) {
      stop = true; // mark to stop pyramid
      break;
    }

    bag += j + " ";
  }

  console.log(bag.trim());

  if (stop) {
    break;
  }
}

// Q: 13
// Title:
// L1 - Sum of Multiple Numbers (Using Rest Parameters)

// Problem Statement:
// Write a function called sumNumbers that prompts the user to enter a series of numbers (one at a time using prompt()). After each prompt, the function should check if the user has entered a valid number. If not, prompt them again until they provide valid numbers.

// The function should then use rest parameters to sum up all the valid numbers and return the total.

// Example Scenario:

// The user enters 5, 10, and 15.
// The function returns 30.
// Requirements:

// Use a loop to collect the numbers.
// Use the sumNumbers(...args) function to calculate the sum of the numbers using rest parameters.

//=======================================================================================

let sumNumbers = () => {
  let numbers = [];
  let userInput;

  while (true) {

    userInput = prompt("Enter a number (or press Cancel to finish):");

    if (userInput === null){
      break;
    }

    let num = parseFloat(userInput);

    if (!isNaN(num)) {
      numbers.push(num);
    } 
    else{
      alert("Please enter a valid number.");
    }

  }

  let sum = 0;
  for (let number of numbers) {
    sum = sum + number
  }

  console.log("Total sum:", sum);
};

sumNumbers();

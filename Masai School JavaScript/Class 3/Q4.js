// Q: 14
// Title:
// L1 - Validate and Calculate Discounted Price

// Problem Statement:
// Write a function called calculatePrice that prompts the user for two inputs: price and discount. If the user doesn't provide a discount (i.e., leaves it blank), the function should apply a default discount of 10%. If the user provides an invalid price or discount (e.g., a negative number or non-numeric input), it should display an error message and prompt them to try again.

// Finally, the function should calculate and return the final price after applying the discount.

// Requirements:

// Use default parameters for the discount.
// Validate both inputs to ensure they are positive numbers.

//==============================================================================================

let calculatePrice = () => {
  let price = parseFloat(prompt("Enter the price:"));
  let discount = parseFloat(prompt("Enter the discount (leave blank for 10%):") || "10");

  if (isNaN(price) || price < 0 || isNaN(discount) || discount < 0) {
    alert("Please enter valid positive numbers for both price and discount.");
    return;
  }

  let finalPrice = price - (price * (discount / 100));
  console.log("Final price after discount: " + finalPrice);
};

calculatePrice();

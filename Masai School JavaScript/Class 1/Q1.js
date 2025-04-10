// Title:- Managing a To-Do List

// Problem Statement:
// Create a simple to-do list using an array.

// Steps:

// Declare an array called toDoList with three initial tasks: "Wake up", "Brush teeth", and "Have breakfast".
// Add a new task, "Go for a walk", to the end of the array.
// Remove the last task from the array.
// Print the updated array.
// Constraints:

// Use only array methods to manipulate the list.
// Ensure that all steps are followed sequentially.

//====================================================================================================

let toDoList = ["Wake up", "Brush teeth", "Have breakfast"];
toDoList.push("Go for a walk")
toDoList.pop()
console.log(toDoList)
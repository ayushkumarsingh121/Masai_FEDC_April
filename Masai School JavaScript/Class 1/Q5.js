// Q: 15
// Title:- Create a Mini Student Database

// Problem Statement:
// Design a mini student database using an array of objects, where each object represents a student.

// Steps:

// Create an array students containing three student objects. Each object should have the properties:

// name (string): The student's name.
// age (number): The student's age.
// marks (object): An object containing math, science, and english scores.
// Example structure:

// { name: "Alice", age: 20, marks: { math: 85, science: 90, english: 88 } }
// Add a new student object to the array.

// Calculate and display the average marks for each student.

// Print the student with the highest average marks.

// Constraints:

// Use loops to iterate through the array for calculations.
// Avoid hardcoding indexes while accessing array elements.
//=========================================================================================

let students = [
  { name: "Alice", age: 20, marks: { math: 85, science: 90, english: 88 } },
  { name: "Ayush", age: 19, marks: { math: 92, science: 97, english: 80 } },
  { name: "Aalka", age: 20, marks: { math: 65, science: 70, english: 68 } },
];

let addStudent = {name: "Diana", age: 22,marks: { math: 88, science: 84, english: 90 }};

students.push(addStudent);

// console.log(students)

let heighestAvg = 0
let topStudent = "";

students.forEach((student)=>{
  let {math, science, english} = student.marks
  let avg = (math + science + english) / 3
  console.log(student.name, "=", avg.toFixed(2))

  if(avg > heighestAvg){
    heighestAvg = avg;
    topStudent = student.name
  }
})
console.log(topStudent, "score heigest Avgerage marks = ", heighestAvg.toFixed(2))

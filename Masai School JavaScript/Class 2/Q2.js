// Q: 12
// Title:- Advanced User Privilege Management System

// Problem Statement:
// Design a system that determines access privileges for a platform based on a user's role, experience (in years), active status (active or inactive), and department. The program should provide access levels that vary according to a combination of these factors.

// Conditions:
// For the "admin" role:
// If active, has more than 5 years of experience, and is in the "IT" department, grant "Full IT Admin Access".
// If active, has more than 5 years of experience, but is in any other department, grant "Full General Admin Access".
// If active but has 5 years or less of experience, grant "Limited Admin Access", regardless of department.
// If inactive, grant "Admin Access Revoked".
// For the "manager" role:
// If active, has more than 3 years of experience, and is in the "Sales" department, grant "Full Sales Manager Access".
// If active, has more than 3 years of experience, but in any other department, grant "Full Manager Access".
// If active, has 3 years or fewer of experience, grant "Limited Manager Access", regardless of department.
// If inactive, grant "Manager Access Revoked".
// For the "user" role:
// If active and from "Support" department, grant "Priority Support Access".
// If active but not from the "Support" department, grant "User Access".
// If inactive, grant "User Access Revoked".
// For any other role, output "Invalid Role".
// Additional Conditions:
// The system should dynamically determine the department based on user input.
// The program should use nested ternary operators to handle the decision-making process based on role, experience, department, and status.
// Ensure your code is scalable for adding more roles or departments in the future.
// Example:
// let person = { role: "admin", experience: 7, active: true, department: "IT" };
// Output: "Full IT Admin Access"
// let person = { role: "manager", experience: 4, active: true, department: "Marketing" };
// Output: "Full Manager Access"
// let person = { role: "user", experience: 2, active: true, department: "Support" };
// Output: "Priority Support Access"
// let person = { role: "admin", experience: 3, active: false, department: "Finance" };
// Output: "Admin Access Revoked"
//======================================================================================================================

let person = {
  role: "admin",
  experience: 7,
  active: true,
  department: "IT"
}

if (person.role !== "admin" && person.role !== "manager" && person.role !== "user") {
  return "Invalid Role";
}

if (person.role === "admin") {
  if (person.active === false) {
    return "Admin Access Revoked";
  }

  if (person.experience <= 5) {
    return "Limited Admin Access";
  }

  if (person.department === "IT") {
    return "Full IT Admin Access";
  } else {
    return "Full General Admin Access";
  }
}

if (person.role === "manager") {
  if (person.active === false) {
    return "Manager Access Revoked";
  }

  if (person.experience <= 3) {
    return "Limited Manager Access";
  }

  if (person.department === "Sales") {
    return "Full Sales Manager Access";
  } else {
    return "Full Manager Access";
  }
}

if (person.role === "user") {
  if (person.active === false) {
    return "User Access Revoked";
  }

  if (person.department === "Support") {
    return "Priority Support Access";
  } else {
    return "User Access";
  }
}

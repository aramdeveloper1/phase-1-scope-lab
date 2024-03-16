// Declare a variable in global scope called customerName using the var keyword.
var customerName;

// Write a function that accesses the global customerName variable and uppercases it.
function upperCaseCustomerName() {
  if (customerName) {
    return customerName.toUpperCase();
  } else {
    return "No customer name provided";
  }
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Write a new function called overwriteBestCustomer() that changes the bestCustomer variable.
function overwriteBestCustomer() {
  bestCustomer = 'still not bob';
}

// Declare a constant in global scope called leastFavoriteCustomer and assign it some initial value.
const leastFavoriteCustomer = 'Bob';

// Write a function called changeLeastFavoriteCustomer() that attempts to change that constant.
function changeLeastFavoriteCustomer() {
  // Attempting to change the constant will result in an error.
  leastFavoriteCustomer = 'Alice'; // This line will cause an error
}

// Testing the functions
console.log(upperCaseCustomerName()); // Output: "No customer name provided" since customerName is not initialized yet
customerName = 'john doe';
console.log(upperCaseCustomerName()); // Output: "JOHN DOE"
console.log(bestCustomer); // Output: undefined, as bestCustomer is not initialized yet
setBestCustomer();
console.log(bestCustomer); // Output: "not bob"
overwriteBestCustomer();
console.log(bestCustomer); // Output: "still not bob"
console.log(leastFavoriteCustomer); // Output: "Bob"
// Attempting to change the value of a constant will result in an error
// changeLeastFavoriteCustomer(); // Uncommenting this line will cause an error

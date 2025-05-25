// Data Structures and Algorithms Final MCO
// Code Igniters: Manuel Federico Tudayan, Lee Alfie Sagara, Johnrel Cordova

/*
Brief Description of the Project:
Codey Patty Burgers is a fast food ordering system built in JavaScript. It allows an employee to 
log in, take customer orders, and manage a cart with burgers, sides, and drinks. The program checks 
stock, updates it as items are added or removed, and shows a final receipt with the total price. 
It also checks if the user has enough balance to complete the purchase. 

This project applies programming concepts like arrays, conditionals, loops, and functions.
*/

// Constants for employee login credentials
const EMPLOYEE_ID = "123456";
const PASSCODE = "ilovecodeypatty";

// Initial money balance for the user (₱1000)
let total_balance = 1000;

// Stores the list of items the user wants to buy
let order_cart = [];

// Stores the current category selected (e.g., burgers, sides, drinks)
let to_order = "";

// Menu items with prices and stocks
let burgers = [
  { name: "Regular Burger", price: 49, stock: 10 },
  { name: "Cheese Burger", price: 59, stock: 8 },
  { name: "Jumbo Burger", price: 99, stock: 6 },
  { name: "Shawarma Burger", price: 59, stock: 2 },
  { name: "Chicken Burger", price: 79, stock: 5 },
];

let sides = [
  { name: "Fries", price: 49, stock: 12 },
  { name: "Cheese Fries", price: 59, stock: 23 },
  { name: "Ice Cream", price: 49, stock: 10 },
  { name: "Siomai", price: 15, stock: 24 },
  { name: "Salad", price: 29, stock: 5 },
];

let drinks = [
  { name: "Coke", price: 25, stock: 20 },
  { name: "Pepsi", price: 25, stock: 18 },
  { name: "Sprite", price: 25, stock: 25 },
  { name: "Royal", price: 55, stock: 2 },
  { name: "Water", price: 19, stock: 19 },
];

// Function for logging in the employee
function login() {
  alert("Welcome to Codey Patty Burgers!");
  let employee_id = prompt("Enter Employee ID: ");
  let passcode = prompt("Enter passcode: ");

  // Check if credentials are correct
  if (employee_id !== EMPLOYEE_ID || passcode !== PASSCODE) {
    alert("Invalid employee ID or passcode. \nPlease try again.");
    login(); // Retry login if incorrect
  } else {
    alert("Login Successful!");
    main_menu(); // Show main menu after successful login
  }
}

// Main menu with 5 options
function main_menu() {
  let option = prompt(
    "Main Menu:\n1. Add to Cart\n2. Remove from Cart\n3. View Cart\n4. Print Receipt\n5. Exit"
  );

  // Switch based on user choice
  switch (option) {
    case "1":
      add_to_cart();
      break;
    case "2":
      remove_from_cart();
      break;
    case "3":
      view_cart();
      break;
    case "4":
      print_receipt();
      break;
    case "5":
      exit();
      break;
    default:
      alert("Invalid option. Please try again.");
      main_menu(); // Return to menu on wrong input
  }
}

// Function for selecting a category to order from
function add_to_cart() {
  let category = prompt(
    "Select category:\n1. Burgers\n2. Sides\n3. Drinks\n4. Back"
  );

  // Assign category type to the global variable "to_order"
  switch (category) {
    case "1":
      to_order = "burgers";
      console.log("\nBurgers:"); // Display burgers
      for (let i = 0; i < burgers.length; i++) {
        console.log(`${burgers[i].name} | ₱${burgers[i].price}`);
      }

      ordering();
      break;
    case "2":
      to_order = "sides";
      console.log("\nSides:"); // Display sides
      for (let i = 0; i < sides.length; i++) {
        console.log(`${sides[i].name} | ₱${sides[i].price}`);
      }

      ordering();
      break;
    case "3":
      to_order = "drinks";
      console.log("\nDrinks:"); // Display drinks
      for (let i = 0; i < drinks.length; i++) {
        console.log(`${drinks[i].name} | ₱${drinks[i].price}`);
      }

      ordering();
      break;
    case "4":
      main_menu();
      break;
    default:
      alert("Invalid option. Please try again.");
      add_to_cart(); // Loop back if input is invalid
  }
}

// Function to display items based on selected category
function ordering() {
  // Category: Burgers
  if (to_order == "burgers") {
    let burger = prompt(
      "Select burger:\n1. Regular\n2. Cheese\n3. Jumbo\n4. Shawarma\n5. Chicken\n6. Back"
    );
    switch (burger) {
      case "1":
        item_to_cart(burgers, 0);
        break;
      case "2":
        item_to_cart(burgers, 1);
        break;
      case "3":
        item_to_cart(burgers, 2);
        break;
      case "4":
        item_to_cart(burgers, 3);
        break;
      case "5":
        item_to_cart(burgers, 4);
        break;
      case "6":
        add_to_cart(); // Go back to category
        return;
      default:
        alert("Invalid option. \nPlease try again.");
    }
    ordering(); // Show menu again after action
  }

  // Category: Sides
  else if (to_order == "sides") {
    let side = prompt(
      "Select side:\n1. Fries\n2. Cheese Fries\n3. Ice Cream\n4. Sioma\n5. Salad\n6. Back"
    );

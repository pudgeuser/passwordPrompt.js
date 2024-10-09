// Set the hardcoded correct password
const correctPassword = "Bryan14";
let userInput;

// Prompt the user to enter a password
do {
    userInput = prompt("Enter your password:");
    
    if (userInput !== correctPassword) {
        console.log("Incorrect, try again.");
    }
} while (userInput !== correctPassword);

console.log("Access granted");

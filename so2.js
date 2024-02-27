const getUserInputAndLogOutput = () => {
    let value = parseInt(prompt("Enter a number: "), 10); // Get user input
    console.log(`The number you provided is ${value}`); // Log the provided number
    
    // Check the value and log messages according to the conditions
    if (value <= 50) {
      console.log(`The current value is at ${value}. Terminating the loop`);
    } else {
      // Check for divisibility by 10
      if (value % 10 === 0) {
        console.log("The number is divisible by 10. Skipping the number");
      }
      
      // Check for divisibility by 5
      if (value % 5 === 0) {
        console.log(`The current value ${value} is divisible by five.`);
      }
    }
  };
  
  // Stretch goal implementation with a while loop to ask again
  const performLoopWithUserInput = () => {
    let shouldContinue = true; // Flag to control the loop
  
    while (shouldContinue) {
      getUserInputAndLogOutput(); // Call the arrow function to get input and log output
  
      // Ask the user if they want to continue or not
      shouldContinue = confirm("Do you want to enter another number?");
    }
  };
  
  performLoopWithUserInput(); // Start the application

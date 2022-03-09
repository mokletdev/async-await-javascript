// Async or Asynchronous Function
// Using ES6 Syntax

const returnAsync = async () => {
  var a = 16;
  return a;
}

returnAsync().then(alert);

// On line 3, we declare the asynchronous function named returnAsync
// Then, on line 4 we declare a variable named the letter a which has the value of 16
// After that, on line 5 we return the value of a

// At line 8, we run the function followed by an alert. Then it gives us the alert output 16
// It means a promise was returned, or otherwise the then() method will not possible/run

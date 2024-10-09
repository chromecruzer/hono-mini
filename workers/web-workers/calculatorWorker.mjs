// // calculatorWorker.js

// // Listen for messages from the main thread
// self.onmessage = (event) => {
//     const { operation, num1, num2 } = event.data;
  
//     let result;
//     switch (operation) {
//       case 'add':
//         result = num1 + num2;
//         break;
//       case 'subtract':
//         result = num1 - num2;
//         break;
//       case 'multiply':
//         result = num1 * num2;
//         break;
//       case 'divide':
//         result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
//         break;
//       default:
//         result = 'Invalid operation';
//     }
  
//     // Post the result back to the main thread
//     self.postMessage(result);
//   };
  

// src/myWorker.ts
self.onmessage = (event) => {
  const { number } = event.data;
  const result = number * number; // Calculate square
  self.postMessage(result); // Send result back
};

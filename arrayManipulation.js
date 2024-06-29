// arrayManipulation.js TASK 1

/**
 * Processes an array of numbers.
 * Each even number is squared and each odd number is tripled.
 *
 * @param {number[]} arr - The array of numbers to be processed.
 * @returns {number[]} A new array with each even number squared and each odd number tripled.
 */

function processArray(arr) {
    return arr.map(num => {
      if (num % 2 === 0) {
        // Even number, square it
        return num * num;
      } else {
        // Odd number, triple it
        return num * 3;
      }
    });
  }
  
  // Example usage
  const inputArray = [1, 2, 3, 4, 5];
  const processedArray = processArray(inputArray);
  console.log(processedArray); // Output: [3, 4, 9, 16, 15]

  /* 
  Explanation:
  Function Declaration: The function processArray is declared to take an array of numbers as an argument.

  Array Mapping: The map method is used to create a new array by applying a function to each element of the input array.

  Condition Check: Inside the mapping function, a check is performed to see if the number is even or odd using the modulus operator (%).

  Even Numbers: If the number is even (num % 2 === 0), it is squared (num * num).

  Odd Numbers: If the number is odd, it is tripled (num * 3).

  Return the New Array: The result of the map operation is the new array with the transformed numbers, which is then returned. 
  */
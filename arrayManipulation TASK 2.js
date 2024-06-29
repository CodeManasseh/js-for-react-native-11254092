// arrayManipulation.js TASK 2

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
  
  /**
   * Formats an array of strings based on a corresponding array of numbers.
   * Capitalizes the entire string if the corresponding number is even.
   * Converts the string to lowercase if the corresponding number is odd.
   *
   * @param {string[]} strArr - The array of strings to be formatted.
   * @param {number[]} numArr - The array of numbers to determine formatting.
   * @returns {string[]} A new array with formatted strings.
   */

  function formatArrayStrings(strArr, numArr) {
    if (strArr.length !== numArr.length) {
      throw new Error('The length of the string array must match the length of the number array.');
    }
  
    return strArr.map((str, index) => {
      const num = numArr[index];
      if (num % 2 === 0) {
        // Even number, capitalize the entire string
        return str.toUpperCase();
      } else {
        // Odd number, convert the string to lowercase
        return str.toLowerCase();
      }
    });
  }
  
  // Example usage
  const inputArray = [1, 2, 3, 4, 5];
  const processedArray = processArray(inputArray);
  console.log(processedArray); // Output: [3, 4, 9, 16, 15]
  
  const stringArray = ["Hello", "World", "JavaScript", "is", "Fun"];
  const formattedStrings = formatArrayStrings(stringArray, processedArray);
  console.log(formattedStrings); // Output: ['hello', 'WORLD', 'javascript', 'IS', 'fun']

  /* 
  Explanation:
  'processArray' Function: The 'processArray' function remains the same as in the previous task.

    New 'formatArrayStrings' Function:

        Function Declaration: The formatArrayStrings function is declared to take two arrays as arguments: an array of strings and an array of numbers.

            Length Check: A check is added to ensure both arrays are of the same length. If not, an error is thrown.

                Array Mapping: The map method is used to create a new array by applying a function to each element of the string array, using the corresponding element from the number array.

                    Condition Check: Inside the mapping function, a check is performed to see if the number is even or odd.

                    Even Numbers: If the number is even (num % 2 === 0), the entire string is capitalized using toUpperCase().

                    Odd Numbers: If the number is odd, the entire string is converted to lowercase using toLowerCase().
                    
                Return the New Array: The result of the map operation is the new array with the formatted strings, which is then returned. 
  */
  
/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
const getLength = (numbers) => {
  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
const getSum = (numbers) => {
  const initialVal = 0;
  return numbers.reduce(
    (accumulator, currentVal) => accumulator + currentVal,
    initialVal
  );
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
const getMean = (numbers) => {
  return getSum(numbers) / getLength(numbers);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
const getMin = (numbers) => {
  if(numbers.length > 0) {
    let the_min = numbers[0];
    for(let i = 1; i < numbers.length; i++) {
      if(numbers[i] < the_min) {
        the_min = numbers[i];
      }
    }
    return the_min;
  } else {
    return null;
  }
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
const getMax = (numbers) => {
  if(numbers.length > 0) {
    let the_max = numbers[0];
    for(let i = 1; i < numbers.length; i++) {
      if(numbers[i] > the_max) {
        the_max = numbers[i];
      }
    }
    return the_max;
  } else {
    return null;
  }
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
const getRange = (numbers) => {
  return getMax(numbers) - getMin(numbers);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
const getEvens = (numbers) => {
  const evenArray = [];
  for(let i = 0; i < numbers.length; i++) {
    if(Math.abs(numbers[i]) % 2 === 0) {
      evenArray.push(numbers[i]);
    }
  }
  return evenArray;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
const getOdds = (numbers) => {
  const oddArray = [];
  for(let i = 0; i < numbers.length; i++) {
    if(Math.abs(numbers[i]) % 2 === 1) {
      oddArray.push(numbers[i]);
    }
  }
  return oddArray;
}

// === READ BUT DO NOT EDIT THE CODE BELOW ===

/**
 * @param {string} commaSeparatedNumbers
 * @returns {number[]} the string converted into an array of numbers
 */
function convertStringToNumbers(commaSeparatedNumbers) {
  // Split the string of numbers into an array of strings.
  const strings = commaSeparatedNumbers.split(",");

  // Convert the array of strings into an array of numbers
  const numbers = [];
  for (const s of strings) {
    const number = parseInt(s);
    numbers.push(number);
  }
  return numbers;
}

/**
 * Prints some descriptive statistics about the provided numbers.
 * @param {number[]} numbers
 */
function describeNumbers(numbers) {
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
}

const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "28,-15,30,975,400"
);
const numbers = convertStringToNumbers(userInputString);
describeNumbers(numbers);

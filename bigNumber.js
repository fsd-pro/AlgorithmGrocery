/**
 * This big number algorithm calculates the addition of two string-format integers
 * 
 * Eg: add('9999', '1') => '10000'
 * 
 * @since 01/05/2021 (mm/dd/yyyy)
 */

'use strict';

const add = (num1, num2) => {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let retVal = '';

  while (i >= 0 || j >= 0) {
    let x = 0;
    let y = 0;
    let sum = 0;

    // three ways to convert string to number
    // 1. utilize + operator, eg: +'3' => 3
    // 2. let the string number minus '0', eg: '3' - '0' => 3
    // 3. parseInt('3', 10) => 3

    if (i >= 0) {
      x = +num1[i]; // + operator converts string to number
      i--;
    }

    if (j >= 0) {
      y = +num2[j]; // + operator converts string to number
      j--;
    }

    sum = x + y + carry;

    // key logic:
    // if sum of two digits is greater than 10, then we carry 1 to its preceding figure manipulation
    // if sum of two digits is less than 10, then we carry 0 to its preceding figure manipulation
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }

    // eg: 2 + '' = '2'; 1 + '2' = '12'
    retVal = sum + retVal;
  }

  // if we still have a carry, prepend it to retVal
  // eg: 1 + '566' = '1566';
  if (carry) {
    retVal = carry + retVal;
  }

  return retVal;
};

//---------------
// TEST SECTION
//---------------
const sum = add('999', '3');
console.log(`sum: ${sum}`);

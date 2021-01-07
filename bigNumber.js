/**
 * This big number algorithm calculates the addition of two string-format integers
 * 
 * Eg: add('9999', '1') => 10000
 * 
 * @since 01/05/2021 - mm/dd/yyyy
 */

'use strict';

const add = (num1, num2) => {
  return num1 + num2;
};

//---------------
// TEST SECTION
//---------------
const sum = add(1, 3);
console.log(`sum: ${sum}`);
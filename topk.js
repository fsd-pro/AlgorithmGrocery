'use strict';

/**
 * Function to search in top vector for element
 */
const find = (arr = [], el) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return i;
    }
  }
  return -1;
};

/**
 * Main function that implements top k algorithm
 * 
 * @param {*} arr 
 * @param {*} n length of the array
 * @param {*} k length of top k elements
 */
const topK = (arr = [], n, k) => {
  // array to keep track of frequency
  let freq = new Map();
  for (let i = 0; i < k + 1; i++) {
    freq.set(i, 0);
  }

  // fill array fill 0
  // let top = [];
  // top.length = k + 1;
  // top.fill(0);

  // this is the replacement of the above code,
  // [].fill does not support in IE, therefore we need to use babel to convert it
  // eg: Array(length).fill(0);
  let top = Array(k + 1).fill(0);

  // iterate till the end of stream
  for (let m = 0; m < n; m++) {
    // increase the frequency
    if (freq.has(arr[m])) {
      freq.set(arr[m], freq.get(arr[m]) + 1);
    } else {
      freq.set(arr[m], 1);
    }

    // store that element in top vector
    top[k] = arr[m];
  
    // search in top vector for same element
    let i = find(top, arr[m]);
    i--;

    // traverse from the position of element to zero,
    // that is to say, iterate top in reverse order
    while (i >= 0) {
      // compare the frequency and swap if higher frequency
      // element is stored next to it
      if (freq.get(top[i]) < freq.get(top[i + 1])) {
        let temp1 = top[i];
        top[i] = top[i + 1];
        top[i + 1] = temp1;
      } else if (
        freq.get(top[i]) === freq.get(top[i + 1]) &&
        top[i] > top[i + 1]
      ) { // if frequency is same compare the elements and swap if next element is high
        let temp2 = top[i];
        top[i] = top[i + 1];
        top[i + 1] = temp2;
      } else {
        break;
      }

      i--;
    }

    // for (let j = 0; j < k && top[j] !== 0; j++) {
    //   console.log(top[j] + ' ');
    // }
    // console.log();
  }
  
  // return top k elements
  return top.length > 0 && top.slice(0, k);
};

//--------------
// TEST SECTION
//--------------
let k = 3;
let arr = [5, 2, 1, 3, 2, 2, 3];
let n = arr.length;

console.log('Origina Array: ');
console.log(arr);

let newArr = topK(arr, n, k);
console.log('New Array: ');
console.log(newArr);
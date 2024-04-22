class DynamicArray {
  constructor() {
    this.capacity = 2;
    this.length = 0;
    this.arr = new Array(2);
  }

  // Insert n in the last position of the array
  pushback(n) {
    if (this.length == this.capacity) {
      this.resize();
    }

    // insert at next empty position
    this.arr[this.length] = n;
    this.length++;
  }

  resize() {
    // Create new array of double capacity
    this.capacity = 2 * this.capacity;
    const newArr = new Array(this.capacity);

    // Copy elements to newArr
    for (let i = 0; i < this.length; i++) {
      newArr[i] = this.arr[i];
    }
    this.arr = newArr;
  }

  // Remove the last element in the array
  popback() {
    if (this.length > 0) {
      this.length--;
    }
  }

  // Get value at i-th index
  get(i) {
    if (i < this.length) {
      return this.arr[i];
    }
    // Here we would throw an out of bounds exception
    return;
  }

  // Insert n at i-th index
  insert(i, n) {
    if (i < this.length) {
      this.arr[i] = n;
      return;
    }
    return;
    // Here we would throw an out of bounds exception
  }

  print() {
    let s = "";
    for (let i = 0; i < this.length; i++) {
      s += this.arr[i] + " ";
    }
    console.log(s);
  }
}

const arr = new DynamicArray();

console.log(arr);
arr.pushback(5);
console.log(arr);
arr.pushback(3);
console.log(arr);
arr.print();

// Array concatenation
//

//https://leetcode.com/problems/concatenation-of-array/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length * 2; i++) {
    res.push(nums[i % nums.length]);
  }
  return res;
};

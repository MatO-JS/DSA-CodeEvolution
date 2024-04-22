//* Two sum
//*Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

/*

//*







*/

//You can return the answer in any order. */
/**
 *
 *
 * Brute Force - Linear Search
 * Time O(N^2) | Space O(1)
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = (nums, target) => {
  for (let curr = 0; curr < nums.length; curr++) {
    /* Time O(N) */
    const complement = target - nums[curr];

    for (let next = curr + 1; next < nums.length; next++) {
      /* Time O(N) */
      const num = nums[next];

      const isTarget = num === complement;
      if (isTarget) return [curr, next];
    }
  }

  return [-1, -1];
};

/**
 * Hash Map - 2 Pass
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
  const map = getMap(nums); /* Time O(N) | Space O(N) */

  return getSum(nums, target, map); /* Time O(N) */
};

const getMap = (nums, map = new Map()) => {
  for (let index = 0; index < nums.length; index++) {
    /* Time O(N) */
    map.set(nums[index], index); /* Space O(N) */
  }

  return map;
};

const getSum = (nums, target, map) => {
  for (let index = 0; index < nums.length; index++) {
    /* Time O(N) */
    const complement = target - nums[index];
    const sumIndex = map.get(complement);

    const isTarget = map.has(complement) && map.get(complement) !== index;
    if (isTarget) return [index, sumIndex];
  }

  return [-1, -1];
};

/**
 * Hash Map - 1 Pass
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target, map = new Map()) => {
  for (let index = 0; index < nums.length; index++) {
    /* Time O(N) */
    const num = nums[index];
    const complement = target - num;
    const sumIndex = map.get(complement);

    const isTarget = map.has(complement);
    if (isTarget) return [index, sumIndex];

    map.set(num, index); /* Space O(N) */
  }

  return [-1, -1];
};

console.log(twoSum([2, 3, 4, 7, 5], 5));

// Two sum algorithm source : https://www.youtube.com/watch?v=Ivyh3V4QolA

var twoSum = function (nums, target) {
  const previousValues = {};
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const neededValue = target - currentNumber;
    const index2 = previousValues[neededValue];
    if (index2 != null) {
      return [index2, index];
    } else {
      previousValues[current];
    }
  }
};

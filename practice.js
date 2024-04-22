// contains duplicate

const containsDuplicate = (arr, newSet = new Set()) => {
  for (let i of arr) {
    if (newSet.has(i)) return true;
    newSet.add(i);
  }
  return false;
};

const ans = containsDuplicate([3, 15, 2, 75, 12, 5]);

console.log(ans);

// two sum

const twoSum = (nums, target, map = new Map()) => {
  for (let index = 0; index < nums.length; index++) {
    let num = nums[index];
    let compliment = target - num;
    let sumIndex = map.get(compliment);
    let isTarget = map.has(compliment);
    if (isTarget) {
      retrun[(index, sumIndex)];
    }

    map.set(sumIndex, index);
  }

  return [-1, -1];
};

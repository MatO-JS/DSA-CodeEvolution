// Visit www.neon.rip for more content!

class PrefixSum {
  constructor(nums) {
    this.prefix = new Array();
    let total = 0;
    for (let n of nums) {
      total += n;
      this.prefix.push(total);
    }
  }

  rangeSum(left, right) {
    let preRight = this.prefix[right];
    let preLeft = left > 0 ? this.prefix[left - 1] : 0;
    return preRight - preLeft;
  }
}

const prefix = new PrefixSum([4, 5, 9, 10, 2, 5, 7]);
console.log(prefix);
console.log(prefix.rangeSum(1, 3));

// Time complexity O (log n)
// Space complexity O (n)

var pathInZigZagTree = function(label) {
  const depth = Math.floor(Math.log2(label));
  const arr = [label];
  const reverseArr = [];

  for (let i = depth; i>=1; i--) {
      const left = Math.pow(2, i - 1);
      const right = Math.pow(2, i) - 1;
      const value = left + (right - parseInt(arr[arr.length - 1] / 2));
      arr.push(value);
  }

  for (let i = arr.length - 1; i >= 0; i--) {
      reverseArr.push(arr[i]);
  }

  return reverseArr;
};
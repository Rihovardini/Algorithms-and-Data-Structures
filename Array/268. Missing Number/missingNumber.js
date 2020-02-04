// Time complexity O (N)

// Space complexity O (1)

var missingNumber = function(nums) {
    let sumInput = 0, sum = 0;
    
    for (let i=0; i<nums.length; i++) {
        sumInput +=nums[i];
    }
    
    for (let i=0; i<nums.length+1; i++) {
        sum+=i;
    }
    
    return sum-sumInput;
};
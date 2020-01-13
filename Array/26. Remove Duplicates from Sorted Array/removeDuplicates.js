var removeDuplicates = function(nums) {
    let count = 0;
    
    while(nums.length && count !== nums.length - 1) {
        if (nums[count] === nums[count + 1]) {
            nums.splice(count, 1);
            count--;
        }
        
        count++;
    }
    
    return nums.length;
};
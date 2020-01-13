var findNumbers = function(nums) {
    let count = 0;
    
    for(let i=0; i < nums.length; i++) {
        const { length } =  `${nums[i]}`;
        
        if (length % 2 === 0) {
            count++;
        }
    }
    
    return count;
};
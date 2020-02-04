// Time & Space complexity O (N)

var containsNearbyDuplicate = function(nums, k) {
    const hash = {};
    
    for (let i=0; i<nums.length; i++) {
        const num = nums[i];
        const condition = hash.hasOwnProperty(num) && (i - hash[num] <=k); 
        
        if(condition) {
            return true;
        }
        
        hash[num] = i;
    }
    
    return false;
};
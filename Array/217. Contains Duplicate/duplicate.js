/**
 *  Time and Space Complexity  - O(n)
 */

var containsDuplicate = function(nums) {
    if(nums.length === 0) return false;
    
    const hash = {};
    
    for (let i=0; i<nums.length; i++) {
        if(hash[nums[i]]) {
            return true;
        }
        
        hash[nums[i]] = true;
    }
    
    return false;
};
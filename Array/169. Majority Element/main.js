 // Time and space complexity  - O (n)

 var majorityElement1 = function(nums) {
      const hash = {};
      
      for (const num of nums) {
          if (hash[num]) {
              hash[num]++;
          } else {
              hash[num] = 1;
          }
      }

      for (const key in hash) {
                if(hash[key] > (nums.length/2)) return key;
            }
            
    return null;        
  };


  // Time complexity - O (n)
 // Space complexity - O (1)

  var majorityElement = function(nums) {
        let majority = null;
        let count = 0;
        
        for (const num of nums) {
            if (count === 0) {
                majority = num;
            }
            
        count += (num === majority) ? 1 : -1;       
        }
        
        return majority;
    };
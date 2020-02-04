// Time complexity O (n)

// Space complexity O (1)

var rotate = function(nums, k) {
    let rotate = k % nums.length, count = 0;
    
    if(rotate === 0) return nums;
    
    for (let i=0; count<nums.length; i++) {
      let start = i;
      let startElement = nums[i];  
      
      do {
          let next = (k+start)%nums.length;
          let nextElement = nums[next]; // 5
          nums[next]=startElement; 
          startElement = nextElement;
          count++;
          start = next;
      } while(start !==i);
       
    }
    
    return nums;
};
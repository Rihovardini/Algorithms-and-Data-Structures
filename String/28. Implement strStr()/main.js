 // Time complexity - O (n)
 // Space complexity - O (m)

 var strStr = function(haystack, needle) {
  if (needle.length === 0) return 0;
  if (haystack.length === 0) return -1;
  
  const table = getTablePattern(needle);
  let i = 0, j = 0;
  
  while (i < haystack.length) {
      if (haystack[i] === needle[j]) {
          i++;
          j++;
      }
      
      if (j == needle.length) return i - table.length;
      
      if (i < haystack.length && haystack[i] !== needle[j]) {
          
          if (j !== 0) {
              j = table[j - 1];
          } else {
              i++;
          }
      }
  }
  
  return -1;
};


function getTablePattern(str) {
  let start = 0;
  let next = 1;
  const arr = [0];
  
  while(next < str.length) {
      if(str[start] === str[next]) {
          start++;
          arr[next] = start;
          next++;
      } else {
          if(start !== 0) {
              start = arr[start - 1];
          } else {
              arr[next] = start;
              next++;
          }
      }
  }
  
  return arr;
}
// Time and space complexity is O (n)

var lengthOfLongestSubstring = function(s) {
  const hash = {};
  let max = 0, prevDuplicate = 0, count = 0;
  
  for (let i = 0; i < s.length; i++) {
      const symbol = s[i];
      const hasSymbol = hash.hasOwnProperty(symbol);
      
      if (!hasSymbol || prevDuplicate > hash[symbol]) {
              count++;
              hash[symbol] = i;
      } else {
          count = i - hash[symbol];
          prevDuplicate = hash[symbol];
          hash[symbol] = i;
      }
      
      max = Math.max(max, count);
  }
  
  return max;
};
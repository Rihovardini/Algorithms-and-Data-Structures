 // Time and space complexity  - O (n)

 var kidsWithCandies = function(candies, extraCandies) {
  const max = Math.max(...candies);
  
  return candies.map(candy => candy + extraCandies >= max);
};
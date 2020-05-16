 // Time complexity - O (n + m)
 // Space complexity - O (1)

// Searching from the top right corner cell, to the bottom left corner cell. 
// If the current cell is negative, it means that all numbers under this one is also negative, so count += columnLength - i;


var countNegatives = function(grid) {
  const columnLength = grid.length;
  const rowLength = grid[0].length;
  let i = 0;
  let j = rowLength - 1;
  let count = 0;
  
  while (j >= 0 && i < columnLength) {
      if (grid[i][j] < 0) {
          j--;
          count += columnLength - i;
      } else {
          i++;
      } 
  }
  
  return count;
};
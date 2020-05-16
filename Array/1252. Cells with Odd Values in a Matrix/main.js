 // Time complexity - O (n * m + L)
 // Space complexity - O (n + m)

 /**
  *  The idea behind this solution is just to count row and column increment separately and than we can get [i][j] element by adding row[i] + col[j]
  */

var oddCells = function(n, m, indices) {
  const row = new Array(n).fill(0);
  const col = new Array(m).fill(0);
  
  for (const position of indices) {
      const [r, c] =  position;
      row[r]++;
      col[c]++;
  }
  
  return getMatrixOddValues(row, col);
};


function getMatrixOddValues(row, col) {
  let count = 0;
  for (let i = 0; i < row.length; i++) {
      for (let j = 0; j < col.length; j++) {
          const num = row[i] + col[j];
          
          if (num % 2 !== 0) {
              count++;
          }
      }
  }
  return count;
}
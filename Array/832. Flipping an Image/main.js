 // Time complexity - O (n * m)
 // Space complexity - O (1)

var flipAndInvertImage = function(A) {
  for (let i = 0; i < A.length; i++) {
      const mid = Math.floor(A[i].length / 2);
      
      if (A[i].length % 2 !== 0) {
          A[i][mid] = A[i][mid] ^ 1;
      }
      
      for (let j = 0; j < mid; j++) {
          const lastIndex = A[i].length - j - 1;
          const temp = A[i][j] ^ 1;
          A[i][j] = A[i][lastIndex] ^ 1;
          A[i][lastIndex] = temp;
      }
  }
  
  return A;
};
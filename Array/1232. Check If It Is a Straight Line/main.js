 // Time complexity - O (n)
 // Space complexity - O (1)

/*
 Math solution.
 Just checking if slopes is equal beetwen diff coordinates.
*/ 
var checkStraightLine = function(coordinates) {
  const [x1, y1] = coordinates[0];
  const [x2, y2] = coordinates[1];
  
  const xDiff = x2 - x1;
  const yDiff = y2 - y1;
  
  for (let i = 1; i < coordinates.length; i++) {
      const [xI, yI] = coordinates[i];
      
      if(xDiff * (yI - y1) !== yDiff * (xI - x1)) return false;
  }
  
  return true;
};
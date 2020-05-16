 // Time complexity - O (n)
 // Space complexity - O (1)

var minTimeToVisitAllPoints = function(points) {
  let time = 0;
  
  for (let i = 1; i < points.length; i++) {
      const [x, y] = points[i];
      const [x0, y0] = points[i - 1];
      
      const diffX = Math.abs(x - x0);
      const diffY = Math.abs(y - y0);
      time += (Math.max(diffX, diffY));
  }
  
  return time;
};
// Time & space complexity O(n)
// ?? Needs impovement in space complexity


const hasGroupsSizeX = function(deck) {
    const hash = {};
  
    for (let i=0; i< deck.length; i++) {
        const number = deck[i];
        
        if (hash.hasOwnProperty(number)) {
            hash[number]++;
        } else {
          hash[number] = 1;
        }
    }
  
    const values = Object.values(hash);
    const commonGsd = gsdFromArray(values);  
   
    
    return commonGsd > 1;
  }
  
  const gsdFromArray = arr => {
    let first = arr[0];
  
    for (let i=1; i<arr.length; i++) {
      let common = gsd(first, arr[i]);
      first = common;
    }
  
    return first;
  }
  
  const gsd = (a,b) => {
    while (a%b > 0) {
      const temp = a%b;
      a = b;
      b = temp;
    }
  
    return b;
  }
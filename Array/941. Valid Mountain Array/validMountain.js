// Time complexity O (n)

// Space complexity O (1)

var validMountainArray = function(A) {
    let count1 = 0;
    let count2 = A.length - 1; //7
    
    while (count1 <= count2 && A[count1]<A[count1+1]) {
        count1++; // 4
    }
    
    if(count1===count2 || count1 === 0) {
        return false;
    }
    
    while (count2>0 && A[count2]<A[count2-1]) {
        count2--; 
    }
    
    return count1 === count2;
};
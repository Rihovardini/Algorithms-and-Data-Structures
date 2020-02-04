// Time complexity O (n)

// Space complexity O (1)

var canPlaceFlowers = function(arr, n) {
    for(let i=0; i<arr.length && n!==0; i++) {
        const canBePlanted = arr[i] === 0 && arr[i-1] !==1 && arr[i+1] !== 1;
        if (canBePlanted) {
            arr[i] = 1;
            n--;
        }
    }
    
    return !n
};
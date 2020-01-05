// Time complexity O (n)
// Space complexity O (1) 

var rotateRight = function(head, k) {
    let curr = head, length = 1, count;
    
    if (head === null) return head;
    
    while (curr.next !== null) {
        length++;
        curr = curr.next;
    }
    
    count = length - (k % length);
    curr.next = head;
    curr = curr.next;
    
    if (count === 0) return head;
    
    while (count !== 1) {
        count--;
        curr = curr.next;
    }
    
    let result = curr.next;
    curr.next = null;
    
    return result;
};
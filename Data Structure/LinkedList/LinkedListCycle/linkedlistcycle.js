// 141. Linked List Cycle

// O (n) - time and space complexity

var hasCycle = function(head) {
    let currNode = head;
    let count = 0;
    
    while(currNode) {
        if(currNode.hasOwnProperty('count')){
            return true;
        }
        
        currNode.count = count;
        currNode = currNode.next;
        count++;
    } 
    
    return false;
};


// Time - O(n)
// Space - O(1)

function hasCycle (head) {
    if (!(head && head.next)) {
        return false;
    }
    
    let slow = head;
    let fast = head.next;
    
    while (slow !== fast) {
        
        if (!(fast && fast.next)) {
            return false;
        }
        
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return true;
} 
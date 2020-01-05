/**
 * O (n) - time complexity
 * O (1) - space complexity
 */
var reorderList = function(head) {
    if (head === null || head.next === null) return head;  
      
    let slow = head, fast = head.next, left = head, right = null;  
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let middle = slow.next;
    slow.next = null;
    
    while (middle !== null) {
        let next = middle.next;
        middle.next = right;
        right = middle;
        middle = next; 
    }
      
    while (left !== null && right !== null) {
        let leftNext = left.next;
        let rightNext = right.next; 
        left.next = right;
        right.next = leftNext;      
        right = rightNext;
        left = leftNext;
    }
      
    return head;  
  }
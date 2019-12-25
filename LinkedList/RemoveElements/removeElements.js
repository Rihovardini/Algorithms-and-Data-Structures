// 203. Remove Linked List Elements

// Remove all elements from a linked list of integers that have value val.

// time - O(n), space - O(1)

var removeElements = function(head, val) {
    let prevNode = {val: null, next: head};
    let currNode = prevNode.next;
    let mem = prevNode;
    
    while (currNode) {
     if (currNode.val === val) {
         prevNode.next = currNode.next;
     } else {
         prevNode = currNode;          
     }
      
     currNode = currNode.next;
     }
    
    return mem.next;
};

// time and space O(n) for recursive

function removeElements(head, val) {
    if(head === null) return null;
    head.next = removeElements(head.next, val);
    return head.val === val ? head.next : head;
}
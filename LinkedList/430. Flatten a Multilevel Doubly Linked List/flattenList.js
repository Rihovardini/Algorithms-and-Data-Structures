// Flatten Linkend list using recursion
// Time complexity O (n)
// Space complexity O (1)

const flatten = function(head, isRecursive = false) {
    
    if (head === null) return head;
    
    let curr = head, next = null, prev = null;
    
    while (curr !== null) {
        next = curr.next;
        
        if (curr.child) {
            const lastChild = flatten(curr.child, true);
            curr.next = curr.child;
            curr.next.prev = curr;
            
            if (next !== null) {
                lastChild.next = next;
                lastChild.next.prev = lastChild;
            }
            
            curr.child = null;
        }
        
        prev = curr;
        curr = next;
    }
    
    if (isRecursive) return prev;
    
    return head;
};
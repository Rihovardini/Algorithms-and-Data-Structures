// Solved using dummy node
// Time complexity  O(n)
// Space complexity O (1)

var deleteDuplicates = function(l1) { 
    if (head === null || head.next === null) return head;

    let curr = l1, valueToRemove = null, prev = { val: null, next: l1 };

    const dummy = prev;

    while (curr) {
        const nextValue = curr.next ? curr.next.val : null;

        if (curr.val === nextValue) {
            valueToRemove = curr.val; 
        }

        if (curr.val === valueToRemove) { 
            prev.next = curr.next;
        } else {
            prev = curr;
        }

        curr = curr.next;
    }

    return dummy.next;
};
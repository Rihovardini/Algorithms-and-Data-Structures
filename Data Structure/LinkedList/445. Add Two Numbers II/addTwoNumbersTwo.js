// Solution using stack
// Time complexity O (n or m) depends on size of lists
// Space O (n + m)

var addTwoNumbers = function(l1, l2) { 
    const stack1 = [], stack2 = [];
    let curr = new Node(null), next = null;
    let addition = 0;
    
    while (l1 || l2) {
        if (l1 !== null) {
            stack1.push(l1.val);
            l1 = l1.next;
        }
        
        if (l2 !== null) {
            stack2.push(l2.val);
            l2 = l2.next;
        }
    }

    while (stack1.length > 0 || stack2.length > 0 || addition > 0) {
        const val1 = stack1.length > 0 ? stack1.pop() : 0;
        const val2 = stack2.length > 0 ? stack2.pop() : 0;
        let sum = val1 + val2 + addition;
        addition = (sum%10 === sum) ? 0 : 1;
        sum = sum % 10;
        curr.val = sum;
        next = curr;
        curr = new Node(null);
        curr.next = next;
    }
    
    return curr.next;
};

function Node(val) {
   this.val = val;
   this.next = null;
}

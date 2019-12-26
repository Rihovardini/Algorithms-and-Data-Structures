// Time O(n^2) 
// Space O (n)

// 1 solution

function nextLargerNodes(head) {
    const arr = [];
    let curr = head;
     
     while (curr) {
         const larger = getNextLarger(curr.next, curr.val);
         arr.push(larger);
         curr = curr.next;
     }
     
     return arr;
 };
 
 
 function getNextLarger(node, val) {
     while (node) {
         if (node.val > val) {
             return node.val;
         }
         
         node = node.next;
     }
     
     return 0;
 }
 
// 2 solution using stack
// Time O (n)
// Space O (n)

function nextLargerNodes(head) {
    const arr = [], stack = [0];
  
    for (let node = head; node!==null; node = node.next) {
      arr.push(node.val);
    }
  
    for (let i=1; i < arr.length; i++) {   
        while(stack.length && arr[stack[stack.length-1]] < arr[i]) {
          const topIndex = stack.pop();
          arr[topIndex]=arr[i];
        }
  
        stack.push(i);
    }
  
    while (stack.length) {
      const topIndex = stack.pop();
      arr[topIndex] = 0;
    }
  
    return arr;
  }
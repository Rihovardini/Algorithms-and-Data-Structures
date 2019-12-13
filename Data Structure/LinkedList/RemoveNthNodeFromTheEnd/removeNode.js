function removeNthFromEnd(head, n) {
    let currNode = head;
    let prevNode = null;
    let size = 1;
    let count = 1;
  
    while (currNode) {
        currNode = currNode.next;
        size++;
    }
    
    currNode = head;
  
    while (currNode) {
        const index =  size - count;
        if(index === n) {
          if (prevNode === null) {
            return currNode.next;
          }
  
          prevNode.next = currNode.next;
          return head;
        }
  
        count++;
        prevNode = currNode;
        currNode = currNode.next;
    }
  };
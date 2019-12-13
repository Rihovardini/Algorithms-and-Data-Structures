function mergeTwoLists(l1, l2) {
    if (!(l1 || l2)) {
        return l1 || l2;
    }
    
    let list = new ListNode(null);
    const head = list;
    
    while (l1 && l2) {
        const val1 = l1.val;
        const val2 = l2.val;
        
        if (val1 < val2) {
            list.next = new ListNode(val1);
            list = list.next;
            l1 = l1.next;
        }
        
        if (val1 >= val2) {
            list.next = new ListNode(val2);
            list = list.next;
            l2 = l2.next;
        }
    }
    
    list.next = l1 || l2;  
    return head.next;
};

function recursiveMerge(l1, l2) {
    if (!(l1 && l2)) {
        return l1 || l2;
    }

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
}
  
function ListNode(val) {
    this.val = val;
    this.next = null;
 }
// 234. Palindrome Linked List

// Given a singly linked list, determine if it is a palindrome.

// time O(n), space O(1)

var isPalindrome = function(head) {
    if (head == null || head.next == null) return true  
      
    let slow = head;
    let fast = head;
    let list = head;
    let prev = null, next = null;
    
    // get the mid element
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
      
    // reverse list
    while (slow) {
        next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }


    // check is palindrome
    
    while (prev) {
        if (list.val !== prev.val) {
            return false;
        }
        
        list = list.next;
        prev = prev.next;
    }
    
    return true;
  };
  
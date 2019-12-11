// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:
//   Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
//   Output: 7 -> 0 -> 8
//   Explanation: 342 + 465 = 807.

function addTwoNumbers(list1, list2) {
    let result = { val: null, next: null };
    let reference = result;
    let addition = 0;
    
    while(list1 || list2) {
      let value1 = list1 ? list1.val : 0;
      let value2 = list2 ? list2.val: 0;
      let sum = value1 + value2 + addition ;
      addition = sum < 10 ? 0 : 1;
      sum = sum % 10;
      
      result.next = { val: sum, next: null };
      result = result.next;
  
      list1 = list1 ? list1.next : null;
      list2 = list2 ? list2.next : null;
    }
  
    if (addition === 1) {
      result.next = { val: addition, next: null };
    }
  
    return reference.next;
}
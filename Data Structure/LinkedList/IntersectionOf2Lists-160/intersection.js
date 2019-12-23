// Solution based on Lists size
// Time O(n or m) depends on A or B lists size
// Space O(1)

function getIntersectionNode (headA, headB) {
    let countA = 0, countB = 0;
    let currA = headA, currB = headB;
       
    if (!(headA && headB)) return null;
    
    while (currA || currB) {
        if (currA) {
            countA++;
            currA = currA.next;
         }
         
        if (currB) {
            countB++;
            currB = currB.next;
         }
     }
     
     currA = headA, currB = headB;  
       
     while (countA !== countB) {
         if(countA > countB) {
             countA--;
             currA = currA.next;
          } else {
            countB--; 
            currB = currB.next;           
          }
     }
             
     while (currA || currB) {
         if (currA === currB) {
             return currA;
         }
         
         currA = currA.next;
         currB = currB.next;
     }  
       
     return null;  
   };

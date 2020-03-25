/**
 *  Time and Space Complexity  - O(n)
 *  
 */
var isValid = function(s) {
    const parentheses = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    const stack = [];
    
    for (let i=0; i<s.length; i++) {
        const symbol = parentheses[s[i]];
        
        if (symbol) {
            const last = stack.pop();
            
            if(last !== symbol) {
                return false;
            }
            
            
        } else {
            stack.push(s[i]);
        }
    }
    
    return stack.length === 0;
};
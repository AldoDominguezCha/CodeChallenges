/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    
    let start = null;
    let previousNode = null;
    let currentNode = null;
    let currentVal = 0;
    
    for (
            let firstCurrent = l1, secondCurrent = l2, carryover = 0; 
            firstCurrent || secondCurrent || carryover; 
            firstCurrent = firstCurrent?.next, secondCurrent = secondCurrent?.next) {
        currentVal = (firstCurrent?.val || 0) + (secondCurrent?.val || 0) + carryover;
        carryover = Math.floor(currentVal / 10);
        
        currentNode = new ListNode(currentVal % 10);
        
        if (!start) {
            start = currentNode;
        }
        
        if(previousNode) {
            previousNode.next = currentNode;
        }
        
        previousNode = currentNode;
    }
    
    return start;
    
};
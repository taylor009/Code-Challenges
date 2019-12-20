/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
    let mergedList = new ListNode();
    let l3 = mergedList;
    if(!l1 && !l2) return null;
    // Loop through both lists if they have values
    while(l1 && l2 ) {
        if(l1.val < l2.val){
            l3.next = l1;
            l1 = l1.next;
        } else {
            l3.next = l2;
            l2 = l2.next;
        }
        // move l3 to its next position so that it points to the last node of merged list.
        l3 = l3.next;
    }
    l3.next = l1 || l2;

    return mergedList.next;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 我第一次的写法
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var currNode1 = l1;
    var currNode2 = l2;
    var l3 = new ListNode(0);
    var currNode3 = l3;
    while(currNode1 !== null && currNode2 !== null) {
        if (currNode1.val <= currNode2.val) {
            currNode3.next = new ListNode(currNode1.val);
            currNode1 = currNode1.next;
        } else {
            currNode3.next = new ListNode(currNode2.val);
            currNode2 = currNode2.next;
        }
        currNode3 = currNode3.next;
    }
    if (currNode1 !== null) {
        currNode3.next = new ListNode(currNode1.val);
        currNode3.next.next = currNode1.next;
    } else if (currNode2 !== null) {
        currNode3.next = new ListNode(currNode2.val);
        currNode3.next.next = currNode2.next;
    }
    return l3.next;
};

/**
     * Definition for singly-linked list.
     * function ListNode(val, next) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.next = (next===undefined ? null : next)
     * }
     */
    /** 
     * 官方
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    var mergeTwoLists1 = function(l1, l2) {
        if(l1 === null) {
            return l2;
        } else if (l2 === null) {
            return l1;
        } else if (l1.val < l2.val) {
            l1.next = mergeTwoLists1(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeTwoLists1(l1, l2.next);
            return l2;
        }
    };
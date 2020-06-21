/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    let nums = [] 
    let  preorderFun = (node) => {
        if (node) {
            nums.push(node.val)
            for (var i = 0; i < node.children.length; i ++) {
                preorderFun(node.children[i])
            }
        }
    }

    preorderFun(root)
    return nums
};
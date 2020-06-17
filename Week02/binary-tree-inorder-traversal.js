/**
 * 普通递归
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var nums = []
    let traversal = (node) => {
        if (node) {
            traversal(node.left)
            nums.push(node.val);
            traversal(node.right)
        }
    }
    traversal(root)
    return nums
};
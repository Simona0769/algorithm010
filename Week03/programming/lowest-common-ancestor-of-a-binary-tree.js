/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 普通递归
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let ans;
    let helper = (node, p, q) => {
        if (!node) {
            return
        }
        let lson = helper(node.left, p, q)
        let rson = helper(node.right, p, q)
        if (((lson && rson) || node.val === p.val || node.val === q.val ) && (lson || rson)) {
            ans = node
        }
        return lson || rson || (node.val === p.val || node.val === q.val)
    }
    helper(root, p, q)

    return ans
};

/**
 * 分治回溯法
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let helper = (node, p, q) => {
        if (!node) {
            return node
        }
        if (node.val === p.val || node.val === q.val) {
            return node
        }
        let l = helper(node.left, p, q)
        let r = helper(node.right, p, q)
        if (l && r) {
            return node
        }
        if (l) {
            return l
        }
        if (r) {
            return r
        }
    }

    return helper(root, p, q)
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let root;
    let map = new Map();
    for(let i = 0; i < inorder.length; i ++) {
        map.set(inorder[i], i)
    }

    let helper = (preorder, inorder, pre_left, pre_right, in_left, in_right ) => {
        if (pre_left > pre_right || in_left > in_right) {
            return null
        }
        let _root = preorder[pre_left]
        let _inorder_root_index = map.get(_root);
        let _node = new TreeNode(_root)
        let _l = _inorder_root_index - in_left
        _node.left = helper(preorder, inorder, pre_left + 1, pre_left + _l, in_left, _inorder_root_index - 1 )
        _node.right = helper(preorder, inorder, pre_left + _l + 1, pre_right, _inorder_root_index + 1, in_right)
        return _node
    }
    root = helper(preorder, inorder, 0, preorder.length - 1, 0, inorder.length - 1)
    return root 
};
# 第二周学习笔记
## 哈希表、映射、集合的实现与特性
### Hash table
* 定义
  * 哈希表也叫散列表，是根据关键码值（key value）而直接进行访问的数据结构。  
  * 通过把关键码值映射到表中一个位置来访问记录，以加快查找的速度。这个映射函数叫做散列函数（Hash Function)，存放记录的数组叫哈希表（或散列表）
* 哈希碰撞（Hash Collisions）
  * 对于不同的要存储的数据，经过哈希函数之后得到一个相同的值，这就是哈希碰撞
  * 解决方法：拉链式解决冲突法
* 工程实践
  * 缓存（LRU Cache）
  * 键值对存储（Redis）

## 树、二叉树、二叉搜索树的实现和特性
### 树 Tree
>LinkedList是特殊话的tree  
>Tree是特殊化的Graph
* 代码实现
```
class TreeNode {
  contructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}
```

* 二叉树的遍历
  1. 前序(Pre-order): 根-左-右
  2. 中序(In-order): 左-根-右
  3. 后序(Post-order): 左-右-根

### 二叉搜索树 Binary Search Tree
* 定义  
  二叉搜索树，也称二叉排序树、有序二叉树（Order Binary Tree）、排序二叉树（Sorted Binary Tree），是指一颗空树或者具有下列性质的二叉树：  
  1. 左子树上**所有节点**的值均小于他的根节点的值
  2. 右子树上**所有节点**的值均大于他的根节点的值
  3. 以此类推：左右子树也分别为二叉查找树（重复性）
  *中序遍历：生序遍历*

* 常见操作
  1. 查询：O(logn)
  2. 插入新节点: O(logn)
  3. 删除:O(logn)

* 遍历
```
// 前序遍历
let preOrderTraverse = (node, cb) {
  if (node) {
    cb(node.val)
    preOrderTraverse(node.left, cb)
    preOrderTraverse(node.right, cb)

  }
}
// 中序遍历
let inOrderTraverse = (node, cb) {
  if (node) {
    inOrderTraverse(node.left, cb)
    cb(node.val)
    inOrderTraverse(node.right, cb)
  }
}
// 后序遍历
let postOrderTraverse = (node, cb) {
  if (node) {
    postOrderTraverse(node.left, cb)
    postOrderTraverse(node.right, cb)
    cb(node.val)
  }
}
```

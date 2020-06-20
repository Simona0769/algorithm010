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

## 堆和二叉树的实现和特性
### 堆 Heap
* 定义  
可以迅速找到一堆数中的最大或者最小值
* 分类 
  * 大顶堆或者大根堆： 根节点最大的堆
  * 小顶堆或者小根堆： 根节点最小的堆

* 常见实现： 二叉堆、斐波拉契堆
* 常见操作（假设是大顶堆）
  * find-max：O(1)
  * delete-max: O(logN)
  * insert(create): O(logN) or O(1)

* 二叉堆性质
  * 实现： 通过完全二叉树实现  
  *完全二叉树是指除了叶子结点外，其余子节点都是满的*
  *不是二叉搜索树* 
  * 特性： 例如二叉堆（大顶）
    1. 是一颗完全树
    2. 树中任意节点的值总是 >= 其子节点的值；
  * 性质
    1. 根节点（堆顶元素）是： a[0],
    2. 索引为i的左孩子的索引是： 2 * i + 1；
    3. 索引为i的右孩子的索引是： 2 * i + 2;
    4. 索引为i的父节点的索引是： floor((i - 1) / 2);

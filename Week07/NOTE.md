# 第七周学习笔记
## 字典数和并查集
### 字典树 Trie
* 定义  
    又称单词查找或键树，是一种树形结构
* 应用  
  用于统计和排序大量的字符串
* 基本性质  
    1. 节点本身不存完整单词
    2. 从根节点到某一节点，路径上经过的字符连接起来，为该节点对应的字符
    3. 每个节点的所有子节点路径代表的字符都不相同
* 核心思想
    1. 核心思想：空间换时间
    2. 利用字符串的公共前缀来降低查询的开销以达到提高效率的目的
* 字典树的实现（js实现）
```
var TrieNode = function () {
    this.next = {}
    this.isEnd = false
}
var Trie = function() {
    this.root = new TrieNode()
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if (!word) {
        return false
    }

    let node = this.root
    for(let i = 0; i < word.length; i++) {
        if (!node.next[word[i]]) {
            node.next[word[i]] = new TrieNode()
        }
        node = node.next[word[i]]
    }
    node.isEnd = true
    return true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    if (!word) {
        return false
    }
    let node = this.root
    for(let i = 0; i < word.length; i++) {
        if (node.next[word[i]]) {
            node = node.next[word[i]]
        } else {
            return false
        }
    }
    return node.isEnd
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    if (!prefix) {
        return false
    }
    let node = this.root 
    for(let i = 0; i < prefix.length; i++) {
        if (node.next[prefix[i]]) {
            node = node.next[prefix[i]]
        } else {
            return false
        }
    }
    return true
};
```

### 并查集
* 适用场景  
    * 组团，配对问题
    * Group or not？
* 基本操作  
    1. makeSet(s)
    2. unionSet(x, y)
    3. find(x)
* 代码模版 js实现
```
class UnionFind {
    constructor(n = 0) {
        this.count = n
        this.parent = []
        for(let i = 0; i < n; i++) {
            this.parent[i] = i
        }
    }
    find(p) {
        while(p != this.parent[p]) {
            this.parent[p] = this.parent[this.parent[p]]
            p = parent[p]
        }
        return p;
    }
    union(p, q) {
        let rootP = this.find(p)
        let rootQ = this.find(q)
        if(rootP === rootQ) {
            return
        }
        parent[rootP] = rootQ
        count --
    }
}
```

## 高级搜索
* 剪枝
* 双向BFS
```
```
* 启发式搜索 A* 
    * 估价函数h(n):用来评估哪些节点最有希望的是一个我们要找的节点，h(n)会返回一个非负实数，也可以认为是从节点n到目标路径的估计成本

## AVL树和红黑树的
### AVL树
* 平衡的二叉搜索树
* 平衡因子 Balance Factor：它的左子树的高度减去它的右子树的高度（有时候相反）  
balance factor = { -1, 0, 1}
* 通过旋转操作来进行平衡（四种）
    1. 左旋
    2. 右旋
    3. 左右旋
    4. 右左旋
* 不足：节点需要存储额外信息，且调整次数频繁

## 红黑树 Red-black Tree
* 近似平衡的二叉搜索树，它能够确保任何一个节点的左右子树的高度差小于两倍。具体来说满足以下条件的二叉搜索树
    1. 每个节点要么是红色要么是黑色
    2. 根节点是黑色
    3. 每个叶子节点（NIL节点，空节点）是黑色
    4. 不能有相邻的两个红色节点
    5. 从任一节点到其每个叶子的所有路径都包含相同数目的黑色节点  
    *关键特性：从根到叶子的最长的可能路径不多于最短的可能路径的两倍长*
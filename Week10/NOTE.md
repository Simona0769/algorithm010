# 毕业总结
## 技能收获
1. 数据结构和算法的基本知识点收获
    1. 时间复杂度和空间复杂度
    2. 数据结构
        1. 数组，链表，栈， 队列，双端队列，集合，映射
        2. 树，图，二叉搜索树，堆，并查集，字典树
    3. 算法
        1. 基础：分支，循环，递归
        2. 高级：
            1. 搜索：
                1. 深度优先：前中后序
                2. 广度优先
                3. A*
            2. 动态规划
            3. 二分查找
            4. 贪心算法
            5. 排序
                1. 比较类： 
                    1. 交换排序：冒泡排序，快速排序
                    2. 插入排序： 简单插入排序，希尔排序
                    3. 选择排序：简单选择排序，堆排序
                    4. 归并排序： 二路归并排序，多路归并排序
                2. 非比较类排序：
                    1. 计数排序
                    2. 桶排序
                    3. 基数排序
2. 代码模版  
    *递归代码模板*
    ```
    const recur = (level, param) => {
    // terminator
    if (level > MAX_LEVEL) {
        // process result
        return
    }
    // process current logic
    process(level, param)
    // drill down
    recur(level + 1, newParams)
    // restore current status
    }

    ```
    *分治代码模板*
    ```
    const divide_conquer(problem, param1, param2, ...params) => {
    // recursion terminator
    if (!problem) {
        return
    }
    // prepare data
    let data = prepare_data(problem)
    let subproblems = split_problem(problem, data)
    // conquer subproblems
    const subresult1 = divide_conquer(subproblems[0], p1, ...)
    const subresult2 = divide_conquer(subproblems[1], p1, ...)
    const subresult3 = divide_conquer(subproblems[2], p1, ...)
    ...
    // process and generate the final result
    result = process_result(subresult1, subresult2, subresult3, ...)
    // revert the current level status
    }
    ```
    *DFS 代码模板*
    ```
    // 递归写法 
    //JavaScript
    let visited = new Set()
    function dfs(node, visited) {
        if (node in visited) {
            return
        }
        visited.add(node)
        // process current node here
        for (let i = 0; i < node.children.length; i ++) {
            if (!visited.has(node.children[i])) {
                dfs(node.children[i], visited)
            }
        }
    }
    // 非递归写法
    function dfs(tree) {
        if (tree.root === null) {
            return []
        }
        const [visited, stack] = [[], [tree.root]]
        while(stack.length > 0) {
            node = stack.pop()
            visited.push(node)

            process(node)
            nodes = generate_related_nodes(node)
            stach.push(nodes)
            // other process work
        }
    }
    ```
    *BFS代码模板*
    ```
    function bfs(graph, start, end) {
        queue = []
        queue.push(start)
        
        while queue: 
        node = queue.pop()
        visited.add(node)
        process(node)
        nodes = generate_related_nodes(node)
        queue.push(nodes)
        // other processing work
    }       
    ```
    *二分法代码模板*
    ```
    let left = 0
    let right = array.length - 1
    while(left < = right) {
        const mid = left + (right - left) / 2
        if (array[mid] === target) {
            break or return result
        } else if (array[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    ```
    *LRU Cache 代码实现*
    ```
    /**
    * @param {number} capacity
    */
    var LRUCache = function(capacity) {
        this.size = capacity
        this.cache = new Map()
    };

    /** 
    * @param {number} key
    * @return {number}
    */
    LRUCache.prototype.get = function(key) {
        if (this.cache.has(key)) {
            const temp = this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, temp)
            return temp
        }
        return -1
    };

    /** 
    * @param {number} key 
    * @param {number} value
    * @return {void}
    */
    LRUCache.prototype.put = function(key, value) {
        if(this.cache.has(key)) {
            this.cache.delete(key)
        } else {
            if (this.cache.size >= this.size) {
                this.cache.delete(this.cache.keys().next().value)
            } 
        }
        this.cache.set(key, value)
        
    };

    /**
    * Your LRUCache object will be instantiated and called as such:
    * var obj = new LRUCache(capacity)
    * var param_1 = obj.get(key)
    * obj.put(key,value)
    */
    ```
    *Trie代码模板*
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
    *并查集代码实现*
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
    ```

3. 刷题技巧收获
    1. 五毒神掌
    2. 不要死磕
4. 思维转换
    1. 升维，空间换时间
    2. 寻找重复子问题
5. 养成刷题习惯，锻炼思维。

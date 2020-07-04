# 第四周学习笔记
## 深度优先搜索 depth first search
* 实现：递归，栈
* 代码实现
  * 递归写法
    ```
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
    ```
  * 非递归写法
    ```
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
* 
## 广度优先搜索 breadth first search
* 实现： 队列
* 代码实现
  ```
  function bfs(graph, start, end) {
      queue = []
      queue.push(start)
      visited.add(start)

      while queue: 
      node = queue.pop()
      visited.add(node)
      process(node)
      nodes = generate_related_nodes(node)
      queue.push(nodes)
      // other processing work
  }
  ```

## 贪心算法的实现和特性
* 定义
    贪心算法（Greedy）是一种在每一步选择中都采取当前状态下最好或最优（即最有利）的选择，从而希望导致结果是全局最好或最优的算法  
    *贪心u啊算法和动态规划的不同在于它对每个子问题的解决方案都做出选择，不能回退。动态规划则会保存以前的运算结果，并根据以前的结果对当前进行选择，有回退功能*  
* 区别
    * 贪心：当下做局部最优判断
    * 回溯：能够回退
    * 动态规划：最优判断 + 回退
* 实际适用场景
  * 最优化问题，例如：图中的最小生成树、华夫曼编码
  * 辅助运算或者求结果不是特别精确的问题  

* 编码适用场景  
  问题能够分解成子问题来解决，子问题最优解能递推到最终问题的最优解。这种子问题最优解称为最优子结构

## 二分查找
* 前提条件
    1. 目标函数单调性（单调递增或者递减）
    2. 存在上下界（bounded）
    3. 能够通过索引访问（index accessible)

* 代码模版
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
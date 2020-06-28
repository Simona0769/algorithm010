# 递归的实现、特性以及思维要点
## 递归 Recursion
* 特性
    * 向下进入到不同的递归层；向上又回到原来一层
    * 通过参数进行不同层函数的传递变量
    * 每一层递归层的执行环境都是一份拷贝

* 代码模版
```
function recursion(level, param1, param2, ...) {
    // 递归终结条件 recursion terminator
    if(level > MAC_LEVEL) {
        // process_result
        return
    }
    // 处理当层逻辑 process logic in current level
    process(level, data, ...)

    // 下探到下一层 drill down
    recursion(level + 1, p1, ...)

    // 如果需要，清理当前层的状态 reverse the current level status if needed
}
```

* 思维要点 
    1. 不要人肉进行递归
    2. 找到最近最简的方法，将其拆解成为可重复解决的问题（重复子问题）
    3. 数学归纳法

## 分治、回溯的实现和特性
* 本质：递归
### 分治
* 代码模版：
```
// 分治代码模版
function divide_conquer(proplem, ...param) {
    // recursion terminator
    if(problem  === null) {
        print_result
        return
    }

    // prepare data 
    data = prepare_data(problem)
    subproblems = split_problem(problem, data)
    // conquer subproblems
    subresult1 = divide_conquer(subproblems[0], p1, p2, ...)
    subresult2 = divide_conquer(subproblems[1], p1, p2, ...)
    subresult3 = divide_conquer(subproblems[2], p1, p2, ...)
    ...
    // process and generate the final result
    result = process_result(subresult1, subresult2, subresult3, ...)

    // revert the current level statue
}
```

### 回溯 Backtracking
* 定义
    * 采用试错的思想，分步去解决一个问题。在分步的过程中，如果不能达到有效的答案，那么将取消上一步甚至是上几步的计算。
    * 采用递归的方法实现
    * 可能出现两种结果
        * 找到一个正确解
        * 找不到解
    * 最坏的情况下，时间复杂度为O(2^n)
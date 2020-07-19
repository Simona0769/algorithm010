# 第六周学习笔记
## 动态规划 Dynamic Programming
* 本质： 分治 + 最优子结构
* 关键点：
    * 动态规划和递归或者分治没有根本上的区别（关键看有无最优的子结构）
    * 共性： 找到重复子问题
    * 差异性：最优子结构、中途可以淘汰次优解
* 计算路径解题关键点：
    1. 最优子结构(分治)  
    `opt[n] = best_of(opt[n - 1], opt[n - 2], ...)`
    2. 储存中间状态：opt[i]
    3. 递推公式（状态转移方程或DP方程）
    ```
    Fib: opt[i] = opt[i - 1] + opt[i - 2]
    二维路径: opt[i, j] = opt[i + 1][j] + opt[i]opt[j + 1](判断a[i,j]是否是空地)
    ```

## 递归代码模版
```
const recursion = (level, params) =>{
   // recursion terminator
   if(level > MAX_LEVEL){
     process_result
     return 
   }
   // process current level
   process(level, params)
   //drill down
   recursion(level+1, params)
   //clean current level status if needed
   
}
```

## 分治代码模版
```
const divide_conquer = (problem, params) => {

  // recursion terminator
  if (problem == null) {
    process_result
    return
  } 

  // process current problem

  subproblems = split_problem(problem, data)
  subresult1 = divide_conquer(subproblem[0], p1)
  subresult2 = divide_conquer(subproblem[1], p1)
  subresult3 = divide_conquer(subproblem[2], p1)
  ...

  // merge
  result = process_result(subresult1, subresult2, subresult3)

  // revert the current level status

}
```
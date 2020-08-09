# 第九周学习笔记
## 高级动态规划
### 最长子序列 Longest common sequence
dp[i][j] = dp[i-1][j-1] (if s1[i-1] == s[j-1])  
else dp[i][j] = max(dp[i-1][j], dp[i][j-1])
### 最长子串 Longest common substring
dp[i][j] = dp[i-1][j-1] + 1 (if s1[si[i-1] == s2[j-1]])  
else dp[i][j] = 0
### 编辑距离
* 如果word1[i]与word2[j]相同，显然dp[i][j] = dp[i-1][j-1]
* 如果word1[i]与word2[j]不同，那么dp[i][j]可以通过
    1. 在dp[i-1][j-1]的基础上做replace操作达到目的
    2. 在dp[i-1][j]的基础上做insert操作达到目的
    3. 在dp[i][j-1]的基础上做delete操作达到目的
    取三者最小情况即可

## 字符串匹配算法
1. 暴力法 brute force
2. Rabin-Karp算法  
    1. 假设子串的长度为M(pat), 目标字符串的长度为N(txt)
    2. 计算子串的hash值hash_pat
    3. 计算目标字符串txt中每个长度为M的子串的hash值(共需要计算N-M+1次)
    4. 比较hash值: 如果hash值不同，字符串必然不匹配；如果hash值相同，则还需要通过朴素算法再次判断
3. KMP算法

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const tl1 = text1.length
    const tl2 = text2.length
    const dp = []
    // 初始化二维数组
    for(let i = 0; i <= tl1; i ++) {
        dp[i] = new Array(tl2 + 1).fill(0)
    }
    for(let i = 1; i < tl1 + 1; i++) {
        for(let j = 1; j < tl2 + 1; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j - 1])
            }
        }
    }
    return dp[tl1][tl2]
};
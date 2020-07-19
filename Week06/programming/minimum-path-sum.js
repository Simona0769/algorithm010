/**
 * 1. 分治 sub[i, j] = min(sub[i - 1, j], sub[i, j - 1]) + a[i,j]
 * 2. 状态数组 f[i,j]
 * 3. dp方程 f[i, j] = min(f[i - 1, j], f[i, j - 1]
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const [m, n] = [grid.length, grid[0].length]
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j ++) {
            if (i === 0 && j === 0) {
             continue
            }
            if (i === 0) {
                grid[i][j] += grid[0][j - 1]
                continue
            }
            if (j === 0) {
                grid[i][j] += grid[i - 1][j]
                continue
            }
            grid[i][j] += Math.min(grid[i - 1][j],grid[i][j - 1])
        }
    }
    return grid[m - 1][n - 1]
};
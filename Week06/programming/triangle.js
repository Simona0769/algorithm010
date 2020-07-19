/**
 * 1. 分治 sub(i,j) = min(sub(i + 1, j), sub(i + 1, j + 1)) + a[i ,j]
 * 2. 状态数组 f[i,j]
 * 3. dp方程 f[i, i] = min(f[i + 1][j], f[i + 1][j + 1]) + a[i,j]
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    for(let i = triangle.length - 2; i >= 0; i--) {
        for(let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i+1][j+1])
        }
    }
    return triangle[0][0]
};
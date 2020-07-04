/**
 * 深度优先-递归
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let result = 0;

    if (!grid || grid.length <= 0) {
        return 0
    }
    const nr = grid.length
    const nc = grid[0].length

    const dfsHelper = (grid, r, c) => {
        
        if (r < 0 || c < 0 || r >=nr || c >= nc || grid[r][c] === '0') {
            return
        }

        grid[r][c] = '0'
        dfsHelper(grid, r, c - 1)
        dfsHelper(grid, r, c + 1)
        dfsHelper(grid, r - 1, c)
        dfsHelper(grid, r + 1, c)
    }

    for (let i = 0; i < nr; i ++) {
        for (let j = 0; j < nc; j ++) {
            if (grid[i][j] === '1') {
                ++result;
                dfsHelper(grid, i, j)
            }
        }
    }

    return result

};

/**
 * 深度优先-迭代
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let result = 0;

    if (!grid || grid.length <= 0) {
        return 0
    }
    const nr = grid.length
    const nc = grid[0].length

    const dfsHelper = (grid, r, c) => {
        const visited = new Map()
        const stack = []
        if (grid[r][c] === '1') {
            stack.push({r, c})
        }

        while(stack.length > 0) {
            const node = stack.pop()
            const r = node.r
            const c = node.c
            visited.set(`${r}-${c}`, true)
            grid[r][c] = '0'

            if (r - 1 >= 0 && grid[r - 1][c] === '1' && !visited.has(`${r - 1}-${c}`)) {
                stack.push({ r: r - 1, c})
            }
            if ( r + 1 < nr && grid[r + 1][c] === '1' && !visited.has(`${r + 1}-${c}`)) {
                stack.push({ r: r + 1, c})
            }
            if (c - 1 >= 0 && grid[r][c - 1] === '1' && !visited.has(`${r}-${c - 1}`)) {
                stack.push({ r, c: c - 1})
            }
            if ( c + 1 < nc && grid[r][c + 1] === '1' && !visited.has(`${r}-${c + 1}`)) {
                stack.push({ r, c: c + 1})
            }
        }
    }

    for (let i = 0; i < nr; i ++) {
        for (let j = 0; j < nc; j ++) {
            if (grid[i][j] === '1') {
                ++result;
                dfsHelper(grid, i, j)
            }
        }
    }

    return result

};

/**
 * 广度优先 -- 不知道为什么总是超时
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let result = 0
    if (!grid || grid.length <= 0) {
        return result
    }
    const nr = grid.length
    const nc = grid[0].length
    const bfsHelper = (grid, r, c) => {
        const queue = []
        if (grid[r][c] === '1') {
            queue.push({r, c})
        }

        while(queue.length > 0) {
            const node = queue.shift()
            const {r, c} = node
            // visited.set(`${r}-${c}`, true)
            grid[r][c] = '0'
            if (r - 1 >= 0 && grid[r - 1][c] === '1') {
                queue.push({ r: r - 1, c})
            }
            if ( r + 1 < nr && grid[r + 1][c] === '1' ) {
                queue.push({ r: r + 1, c})
            }
            if (c - 1 >= 0 && grid[r][c - 1] === '1' ) {
                queue.push({ r, c: c - 1})
            }
            if ( c + 1 < nc && grid[r][c + 1] === '1') {
                queue.push({ r, c: c + 1})
            }
        }
    }
   for(let i = 0; i < nr; i ++) {
       for(let j = 0; j < nc; j ++) {
           if (grid[i][j] === '1') {
                ++result
                bfsHelper(grid, i, j)
           }
       }
   }
    return result
};
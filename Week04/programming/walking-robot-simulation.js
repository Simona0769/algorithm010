/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    const dx = [0, 1, 0, -1]
    const dy = [1, 0, -1, 0]
    let di = x = y = 0
    const obstaclesMap = new Map()
    for(let i = 0; i < obstacles.length; i ++) {
        obstaclesMap.set(`${obstacles[i][0]}-${obstacles[i][1]}`, true)
    }
    let res = 0
    commands.forEach(command => {
        if (command === -2) {
            di = (di + 3) % 4
        } else if (command === -1) {
            di = (di + 1) % 4
        } else {
            for(let j = 1; j <= command; j ++) {
                const _x = x + dx[di]
                const _y = y + dy[di]
                if (!obstaclesMap.has(`${_x}-${_y}`)) {
                    x = _x
                    y = _y
                    res = Math.max(res, x*x + y*y)
                }
            }
        }
    })

    return res
};
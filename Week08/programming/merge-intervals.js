/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const res = []
    intervals.sort((a, b) => a[0] - b[0])
    if (intervals.length  > 0) {
        res.push(intervals[0])
    }
    for (let i = 1; i < intervals.length; i ++) {
        const l = res.length;
        if (intervals[i][0] > res[l - 1][1]) {
            res.push(intervals[i])
        } else if (intervals[i][1] >=  res[l - 1][1]) {
            res[l - 1][1] = intervals[i][1]
        }
    }
    return res
};
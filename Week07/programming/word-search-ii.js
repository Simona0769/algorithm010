/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
// Trie 数据结构实现
var TrieNode = function() {
    this.next = {}
    this.isEnd = false
}
var Trie = function() {
    this.root = new TrieNode()
}
Trie.prototype.insert = function(word) {
    if(!word) {
        return false
    }
    let node = this.root
    for(let i = 0; i < word.length; i++) {
        if (!node.next[word[i]]) {
            node.next[word[i]] = new TrieNode()
        }
        node = node.next[word[i]]
    }
    node.isEnd = true
    return true
}
Trie.prototype.search = function(word) {
    if(!word) {
        return false
    }
    let node = this.root
    for(let i = 0; i < word.length; i++) {
        if(node.next[word[i]]) {
            node = node.next[word[i]]
        } else {
            return false
        }
    }
    return node.isEnd
}
Trie.prototype.searchPrefix = function(prefix) {
    if(!prefix) {
        return false
    }
    let node = this.root
    for(let i = 0; i < prefix.length; i++) {
        if (node.next[prefix[i]]) {
            node = node.next[prefix[i]]
        } else {
            return false
        }
    }
    return true
}
 

var findWords = function(board, words) {
    var trie = new Trie()
    // 初始化Trie树
    for(let i = 0; i < words.length; i++) {
        trie.insert(words[i])
    }
    // 初始化变量
    const [m, n] = [board.length, board[0].length]
    // 四联通
    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, -1, 1]
    const res = []
    var dfs = (i, j, curStr) => {
        const restore = board[i][j]
        curStr += restore
        
        if (trie.search(curStr) && res.indexOf(curStr) === -1) {
            res.push(curStr)
        }
        if (!trie.searchPrefix(curStr)) {
            return
        }

        board[i][j] = '@'
        for(let k = 0; k < 4; k ++) {
            const [x, y] = [i + dx[k], j + dy[k]]
            if (x >= 0 && x < m && y >= 0 && y < n && board[x][y] !== '@') {
                dfs(x,y, curStr)
            }
        }
        board[i][j] = restore
    }

    for (let i = 0; i < m; i++) {
        for(let j = 0; j < n; j ++) {
            dfs(i, j, '')
        }
    }
    return res
};
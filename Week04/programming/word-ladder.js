/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const L = beginWord.length
   const allComboDict = new Map()
   // 预处理
   wordList.forEach(word => {
       for (let i = 0; i < word.length; i ++) {
           let newWord = `${word.substring(0, i)}*${word.substring(i + 1, L)}`
           let transtions = allComboDict.has(newWord) ? allComboDict.get(newWord) : []
           transtions.push(word)
           allComboDict.set(newWord, transtions)
       }
   })
   // 广度优先 queue
   const queue = []
   queue.push({str: beginWord, level: 1})
   const visited = new Map()
   visited.set(beginWord, true)

   while(queue.length > 0) {
       let _node = queue.shift()
       let _word = _node.str
       let _level = _node.level
       for(let i = 0; i < L; i ++) {
           let _newWord = `${_word.substring(0, i)}*${_word.substring(i + 1, L)}`
           let _words = allComboDict.get(_newWord)|| []
           for (let j = 0; j < _words.length; j ++) {
               let _transWord = _words[j]
               if (_transWord === endWord) {
                   return _level + 1
               }

               if (!visited.has(_transWord)) {
                   visited.set(_transWord, true)
                   queue.push({str: _transWord, level: _level + 1})
               }
           }
       }
   }
   return 0
};

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const L = beginWord.length
   const allComboDict = new Map()
   if (wordList.indexOf(endWord) === -1 ) {
       return 0
   }
   // 预处理
   wordList.forEach(word => {
       for(let i = 0; i < word.length; i ++) {
           const newWord = `${word.substring(0, i)}*${word.substring(i + 1, L)}`
           const transitions = allComboDict.get(newWord) || []
           transitions.push(word)
           allComboDict.set(newWord, transitions)
       }
   })

   let visitedWordNode = (queue, visited, otherVisited) => {
       let node = queue.shift()
       let word = node.word
       let level = node.level

       for (let i = 0; i < L; i ++) {
           let newWord = `${word.substring(0, i)}*${word.substring(i + 1, L)}`
           let words = allComboDict.get(newWord) || []
           for (let j = 0; j < words.length; j ++) {
               let _word = words[j]
                if (otherVisited.has(_word)) {
                    return level + otherVisited.get(_word)
                }
    
                if (!visited.has(_word)) {
                    visited.set(_word, level + 1)
                    queue.push({word: _word, level: level + 1 })
                }
           }
       }

       return -1
   }

   // 双向BFS
   const qBegin = []
   const qEnd = []
   qBegin.push({word: beginWord, level: 1})
   qEnd.push({word: endWord, level: 1})

   const visitedBegin = new Map()
   visitedBegin.set(beginWord, 1)
   const visitedEnd = new Map()
   visitedEnd.set(endWord, 1)

   while(qBegin.length > 0 && qEnd.length > 0) {
       let ans = visitedWordNode(qBegin, visitedBegin, visitedEnd)
       if (ans > -1) {
           return ans
       }
       ans = visitedWordNode(qEnd, visitedEnd, visitedBegin)
       if (ans > -1) {
        return ans
    }
   }

   return 0
    
};
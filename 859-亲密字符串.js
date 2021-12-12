/**
 * 题号：859
 * 题目描述：https://leetcode-cn.com/problems/buddy-strings/
 */

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

 const buddyStrings = function(s, goal) {
  // 字符长度不相等
  if(s.length !== goal.length) return false

  if(s === goal) { 
    // 字符串相等，需要看26个小写英文字母里，是否有出现两次以上的字母

    // 哈希表, 存对应字母出现的次数
    const map = new Map()

    // 遍历s字符串
    for(const val of s) {
      if(map.has(val)) {
        // 如果哈希表里已经存在该字母，说明有出现两次以上的字母，返回true
        return true
      } else {
        // 哈希表里没有，则往哈希表里添加
        map.set(val, 1)
      }
    }

    return false
  } else {
    // 字符串不相等的情况下，s与goal应该有且只有两个位置的字符是不一样的，才是亲密字符串

    // 两个指针记录两个位置的字符串
    let first = -1, second = -1

    // 遍历s与goal，找不同的位置
    for(let i in s) {
      // 相同位置字符相同，跳出本次循环
      if(s[i] === goal[i]) continue

      // 代码到了这里说明 这个位置的字符不相同
      if(first === -1) {
        // 第一次不同位置存
        first = i
      } else if(second === -1) {
        // 第二次不同位置存
        second = i
      } else {
        // 说明出现了两次以上不同位置，就不是亲密字符串了
        return false
      }
    }

    // 到了这里说明只有两个位置的字符是不同的
    return s[first] === goal[second] && s[second] === goal[first]

  }

};
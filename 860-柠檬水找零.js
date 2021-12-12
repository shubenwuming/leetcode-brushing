/**
 * 题号：860
 * leetcode地址：https://leetcode-cn.com/problems/lemonade-change/
 */


/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  // 5元、10元计数
  let count5 = 0
  let count10 = 0

  for(const val of bills) {
    // 遇到5元放进口袋，无需找钱
    if(val === 5) count5++

    // 遇到10元
    if(val === 10) {
      // 兜里有没有5元，找不开就关门，好家伙
      if(count5 < 1) return false
      // 兜里有5元，找给客人5元收下10元
      count5--
      count10++
    }

    // 遇到20元，这里贪心，先找10元再找5元。
    if(val === 20) {
      // 没有5元，无论如何也找不开，那今天就收摊了
      if(count5 < 1) return false

      // 有5元的前提下，看看有没有10元
      if(count10) {
        // 有10元，那就找客人一张5元一张10元
        count5--
        count10--
      } else {
        // 没有10元，兜里的5元也找不开，那就关门
        if(count5 < 3) return false
        // 兜里5元大大的多，那就找客人3张5元
        count5 -= 3
      }

    }
  }

  // 干了一天真好，客人的钱都能找开
  return true
};
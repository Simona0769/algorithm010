/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let [five, ten] = [0, 0]
    for(let i = 0; i < bills.length; i ++) {
        const bill = bills[i]
        if (bill === 5) {
            five ++
        } else if (bill === 10) {
            if (five === 0) {
                return false
            } else {
                five--
                ten++
            }
        } else {
            if (five > 0 && ten > 0) {
                five--
                ten--
            } else if (five >= 3) {
                five -= 3
            } else {
                return false
            }
        }
        
    }

    return true
};
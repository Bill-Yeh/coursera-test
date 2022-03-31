// if (條件) {
//     當我們條件成立要做的事情
// } else {
//     當我們條件沒有成立要做的事情
// }

//true or false (布林值)
if (2 > 1) {
    console.log('正解')
} else {
    console.log('錯誤')
}

// + - * / 算術運算子
// &&(and) ||(or) !(not) 邏輯運算子

// &&是兩邊都該是true，結果才是true
let conditoin = true && true
console.log('condition', conditoin)

// ||是兩邊只要有一邊是true，結果就是true
let conditoin2 = false || true
console.log('condition2', conditoin2)

// !把結果反向
let conditoin3 = !(true && false) //先做括號內，在反向
console.log('condition3', conditoin3)

// 相等比較運算: 相等(Equality)(==)，完全一致(Identity)(===)。不相等(Inequality)(!=)，不完全一致(Non-identity)(!==)。

// 關係比較運算: 大於(>)，小於(<)，大於等於(>=)，小於等於(<=)
let scoreA = 80
let socreB = 100
if (scoreA < socreB) {
    console.log('A獲勝')
} else {
    console.log('B獲勝')
}

//延伸結構
let level = 8
if (level > 8) {
    console.log('頭獎')
} else if (level === 8) {
    console.log('二獎') //前面的條件先滿足了，因此後面的條件就不考慮
} else if (level < 8) {
    console.log('三獎')
} else {
    console.log('安慰獎')
}

// switch case:用於判斷情況有很多種不同的回傳值的組合情況，最常被使用的是在完全一致相等值(===)比較的情況下
//範例1
const x = 10
switch (true) {
    case (x > 100):
        console.log('x > 100')
        break
    case (x < 100 && x > 50):
        console.log('x < 100 && x >50')
        break
    default:
        console.log('x < 50') //正解
        break
}

//範例2
const y = 10
switch (y) {
    case 100:
        console.log('y is 100')
        break
    case 50:
        console.log('y is 50')
        break
    case 10:
        console.log('y is 10') //正解
        break
    default:
        console.log('無解')
        break
}

//範例3  因為少了break，所以直執行到出現break或是switch整個語句的結尾，這會出現不正確的結果
const z = 50
switch (z) {
    case 100:
        console.log('z is 100')
        break
    case 50:
        console.log('z is 50')
            //這邊少一個break
    case 10:
        console.log('z is 10')
        break
    default:
        console.log('z')
        break
}
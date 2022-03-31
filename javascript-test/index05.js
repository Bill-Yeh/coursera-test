//typeof 查詢變數型態
let x = '20.4'
console.log(typeof x)

//將字串轉換成數值(整數)
console.log(parseInt('20.4'))

//將字串轉換成數值(浮點數)
console.log(parseFloat('20.4'))

//將數值,日期轉換成字串 → 採用toString
let i = 5
let f = 6
let g = new Date()

console.log(i.toString())
console.log(f.toString())
console.log(g)
console.log(g.toString()) //GMT+0800 台北標準時間
console.log(g.toLocaleString()) //當地時間

function IsValidAge() {
    var age = parseInt(document.getElementById('age').value);
    if (isNaN(age)) {
        alert('年齡必須是數值')
    } else {
        alert(age);
    }
}

// 匯率轉換
function Convet2TWD() {
    var usd = parseInt(document.getElementById('USD').value)
    if (isNaN(usd)) {
        alert('美金必須是數值');
    } else {
        document.getElementById('TWD').value = (usd * 28.5).toFixed(2);
    }
}

//三元運算子 ==> 可用於取代if else的判斷，較簡單方便
let a = 10
let b = 20

function Max(value1, value2) {
    return value1 > value2 ? value1 : value2
}

console.log(Max(a, b))
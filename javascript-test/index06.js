//String 物件功能

//charAt(位置):傳回所指定位置的字元
let str = 'Taiwan'
console.log(str.charAt(0))

//indexOf(字元):傳回字元第一次出現的位置
console.log(str.indexOf('T'))

//lastIndexOf(字元):傳回字元最後出現的位置
console.log(str.lastIndexOf('T'))

//substr(開始位置,取幾個字元)
console.log(str.substr(2, 3)) //iwa

//substring(開始位置,結束位置)
console.log(str.substring(2, 3)) //i

//replace(原字串, 新字串):取代字串內容
let str1 = str.replace('Taiwan', 'Japan')
console.log(str1)

//toLowerCase()/toUpperCase():將字串轉小寫/大寫
let str2 = str1.toLowerCase()
console.log(str2)

//Date物件
let x = new Date(2022, 1, 20)
let date = x.getDate()
console.log(date)

//製作日期表單
function Holiday() {
    var selectDate = document.getElementById('selectDate').value
    var d = new Date(selectDate)
    var weekday = d.getDay()
    if (weekday > 0 && weekday < 6) {
        alert('非假日')
    } else {
        alert('假日')
    }
}
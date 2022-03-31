//array 物件

//使用join()將陣列的元素串聯成字串
var array = ['kobe', 'jordan', 'curry', 'duncan']
var string = array.join('+')
console.log(string)

//for 迴圈取出陣列元素
var x = ['kobe', 'jordan', 'iverson', 'curry']
for (var y = 0; y < 4; y++) {
    console.log('y:', x[y])
}

//forEach 取出陣列元素
var Fe = ['台北', '桃園', '台中', '台南']
Fe.forEach(function(item) {
    console.log(item)
})
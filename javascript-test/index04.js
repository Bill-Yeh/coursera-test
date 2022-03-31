//迴圈控制

//for迴圈
// for (statement 1; statement 2; statement 3) {
//     // code block to be executed
//   }
// for (let i = 0; i < 5; i++) {
//     console.log('i=', i)
// }

var x = ['kobe', 'jordan', 'iverson', 'curry']
for (var y = 0; y < 4; y++) {
    console.log('y:', x[y])
}

// for in 用法 → 取陣列的編號
for (var p in x) {
    console.log(p);
}
// for of 用法 → 取陣列的內容
for (var p of x) {
    console.log(p);
}

// while迴圈

//前測試迴圈
// while (條件) {
//     要執行的事情
// }


//後測試迴圈 do...while
// do {
//     要執行的事情
// } while(條件)

// var x = ['kobe', 'jordan', 'iverson', 'curry']
// let mvp = 0
// while (x) {
//     if (mvp === 3) {
//         x = false
//     }
//     console.log(mvp), mvp++
// }
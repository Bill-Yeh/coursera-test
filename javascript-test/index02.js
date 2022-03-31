//array 陣列
let classA = ['小明', '小黑', '小黃']
console.log('入職前:', classA)

classA.push('小白')
console.log('入職後:', classA)
console.log(classA.length) //長度
    //將陣列中的值，單獨顯示出來
console.log('經理', classA[0]) //index=0
console.log('組長', classA[1])
console.log('職員', classA[2])
console.log('部屬', classA[3])

//object 物件
const card = {
    name: 'Yeh-Bill',
    age: '24',
    phone: '09xxxxxxxxx'
}

console.log('名子', card.name, '年齡', card.age) //.= card的name;card的年齡

const post = {
    image: 'https://xxxxx.jpg',
    describe: '下雨天好討厭',
    date: '2022/02/22',
    comment: '對阿超煩的'
}

const post2 = {
    image: 'https://xxxxx.jpg',
    describe: '下雨天好討厭',
    date: '2022/02/23',
    comment: '對阿超煩的'
}

//post+post2
const wall = {
    post,
    post2
}

console.log('貼文', wall)
//1 What is the output of the following code? --
const a = (0.1 + 0.2) * 10
const b = 1 + 2
console.log(a == b) // false, a = 3.0000000000000004 b = 3

//2 What is the output of the following code? --
let i = 1
for (; i < 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0)
}
// output 3 3

//3 What is the output of the following code? ++
let obj = 'foo'
;(function test() {
  console.log(obj)

  try {
    let obj = 'bar'
    throw obj
  } catch (e) {
    console.log(e)
  }
  console.log(obj)
})()
//foo
//bar
//foo

//4 ++
setTimeout(() => {
  console.log('1')
  Promise.resolve().then(() => {
    console.log('2')
  })
}, 0)

Promise.resolve().then(() => {
  Promise.resolve().then(() => {
    console.log('3')
  })
  console.log('4')

  setTimeout(() => {
    Promise.resolve().then(() => {
      console.log('5')
    })
    setTimeout(() => {
      console.log('6')
    }, 0)

    console.log('7')
  }, 0)
})

//output 4 3 1 2 7 5 6

//5 --
const client = { value: 0 }
const a = (x = { ...client }) => {
  x.value += 2
  return x
}
const b = (x = { ...client }) => {
  x.value -= 1
  return x
}
a(client)
b()
console.log(client.value)

//output 2

//6 ++
// Найдите от 0 до 4 ложных утверждений
// 1. map не изменяет исходный массив
// 2. for in перебирает ключи, for of перебирает значения
// 3. массивы сравниваются по значениям
// 4. К прототипу объекта можно получить доступ через Object.getPrototypeOf

// the answer3

//TS

//7 --
type Data = string
let data: Data
function f(t: typeof data) {
  type Data = number
  let x = t
}
f(data)
console.log(typeof x)

// answer undefined, because x is not defined in out the function

//8 ++
type Status = 'a' | 'b'
let t: Status = 'a'
function check<T extends string>(value: T) {
  let t: T = value
  console.log(t)
}
check('b')
console.log(t)

// output b a

//9 --
// Найдите от 0 до 4 правдивых утверждений
// 1. переменная let x: never может принимать значение null
// 2. any это строгий тип он защищает от ошибок
// 3. typeof null в typescript даст null
// 4. в typescript нельзя описать переменную без указания типа

// all 4 are wrong

//10 --
// Найдите от 0 до 4 правдивых утверждений
// 5. константа в typescript гарантирует неизменяемость объекта (нет только ссылки на объект)
// 6. typescript не поддерживает классы с приватными полями
// 7. файл ts не может содержать обычный js
// 8. массив number[] и тип Array<number> одно и тоже

// 8 верно

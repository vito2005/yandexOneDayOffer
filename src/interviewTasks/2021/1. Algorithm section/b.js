// 1.

/*
Дан массив строк, нужно сгруппировать в нем анаграммы.
Важно, что это нужно сделать максимально эффективно по памяти и времени.
Слово X является анаграммой слова Y, если оно может быть 
получено из другого перестановкой букв.
*/

groupAnagrams(['сон', 'нос', 'сорт', 'трос', 'торт', 'рост'])
// возвращает
/*
[
  ['сон', 'нос'],
  ['сорт', 'трос', 'рост'],
  ['торт']
]
*/

function groupAnagrams(list) {
  const map = new Map()

  list.forEach((str) => {
    const mapKey = str.split('').sort().join('')

    if (!map.has(mapKey)) {
      map.set(mapKey, [str])
    } else {
      map.get(mapKey).push(str)
    }
  })

  return Array.from(map.values())
}

// 2.

/**
 * flatten.
 *
 * Дан массив, в котором могут храниться любые типы данных.
 * Нужно реализовать функцию, которая разворачивает вложенные массивы в исходный массив.
 * Данные остальных типов должны остаться без изменений.
 * Решение должно учитывать любую вложенность элементов (т.е. не должно содержать рекурсивные вызовы).
 * Встроенный метод Array.flat() использовать нельзя
 */

// pop/push

const res = flatten([
  1,
  'any [complex] string',
  null,
  function () {},
  [1, 2, [3, '4'], 0],
  [],
  { a: 1 },
])
// возвращает
//      [1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]
flatten([0, [1, [2, 3]], 4]) // [0, 1, 2, 3, 4]
flatten([[1, 5]]) // [1, 5]
console.log(res)
/*
list = [1, [2, 3]]
arr = [[2, 3], 1]
result = []

el = 1
arr = [[2,3]]
result = [1]

el = [2, 3]
arr = []
result = [1]


*/

function flatten(list) {
  const arr = [list]
  const result = []

  while (arr.length) {
    const el = arr.pop()
    if (Array.isArray(el)) {
      for (let i = el.length - 1; i >= 0; i--) {
        arr.push(el[i])
      }
    } else {
      result.push(el)
    }
  }

  return result
}

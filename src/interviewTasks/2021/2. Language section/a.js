// Есть функция asyncAuth(callback) ,
// которая принимает функцию-обработчик,
// в которую может быть передана ошибка (1-м аргументом) или необходимые данные (2-м аргументом).

// Необходимо написать функцию auth , которая выполняет asyncAuth , но возвращает Promise .

// asyncAuth(callback)

asyncAuth((err, data) => {
  if (err) {
    console.error(err)
  } else {
    console.log(data)
  }
})

function auth() {
  return new Promise((resolve, reject) => {
    asyncAuth((err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

auth()
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

// На базе auth написать функцию tryAuth(N) ,
// которая при возникновении ошибок делает дополнительно N попыток, чтобы получить данные.

function tryAuth(n) {
  return auth()
    .then((res) => {
      return res
    })
    .catch((err) => {
      if (n) {
        n--
        return tryAuth(n)
      } else {
        throw err
      }
    })
}

tryAuth(1)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

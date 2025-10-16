// Approach: 1
var promiseAll = async function (functions) {
  return new Promise((res, rej) => {
    let len = functions.length,
      ct = 0
    const ans = new Array(len)
    for (let ind = 0; ind < len; ++ind) {
      functions[ind]()
        .then((val) => {
          ans[ind] = val
          ct++
          if (ct === len) res(ans)
        })
        .catch((err) => rej(err))
    }
  })
}

function parallelExecution(funcs, callback) {
  let len = funcs.length,
    ct = 0
  const ans = new Array(len)
  for (let ind = 0; ind < len; ++ind) {
    const asyncFunc = funcs[ind]
    asyncFunc((result) => {
      ans[ind] = result
      ct++
      if (ct === len) {
        callback(ans)
      }
    })
  }
}

// Approach: 2
var promiseAll = async function (functions) {
  return new Promise(async (res, rej) => {
    let len = functions.length,
      ct = 0
    const ans = new Array(len)
    functions.forEach(async (func, ind) => {
      try {
        let val = await func()
        ans[ind] = val
        ct++
        if (ct === len) res(ans)
      } catch (err) {
        rej(err)
      }
    })
  })
}

// recursion
function repeatRequest(url, tryCount, callback) {
  function repeat() {
    asyncFetch(url, (result, error) => {
      if (error) {
        if (tryCount > 0) {
          tryCount -= 1
          setTimeout(repeat, 1000)
        } else {
          callback(undefined, error)
        }
      } else if (result) {
        callback(result)
      }
    })
  }
  repeat()
}

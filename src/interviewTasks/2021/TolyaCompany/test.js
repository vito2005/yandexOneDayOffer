function bind(func, context) {
  return function () {
    return func.apply(context, arguments)
  }
}

const a = {}

//////////

repRequest('http://example.com/', 3)

function repRequest(url, tryCount) {
  function repeat() {
    return fetch(url)
      .then((res) => {
        return res
      })
      .catch((err) => {
        if (tryCount > 0) {
          tryCount -= 1
          return new Promise((resolve) => {
            setTimeout(resolve, 1000)
          }).then(() => repeat())
        } else {
          throw err
        }
      })
  }

  return repeat()
}

async function repRequest(url, tryCount) {
  let response
  while (tryCount) {}
  try {
    response = await fetch(url)
  } catch (err) {
    tryCount -= 1

    return new Promise((resolve) => {
      setTimeout(() => {
        repRequest(url, tryCount)
      }, 1000)
    })
  }
}

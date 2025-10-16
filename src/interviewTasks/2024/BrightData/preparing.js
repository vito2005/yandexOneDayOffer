function processData(data) {
  // Simulate a time-consuming synchronous task
  for (let i = 0; i < 1e4; i++) {}
  return data * 2
}

function processDataAsync(data, callback) {
  setTimeout(() => {
    const result = processData(data)
    callback(result)
  }, 200)
}

// recurcive call
function processDataRecursively(data, callback) {
  if (data <= 0) {
    return callback(0)
  }

  processDataAsync(data, (result) => {
    processDataRecursively(result / 2 - 1, (finalResult) => {
      callback(finalResult)
    })
  })
}

// parallel execution
function processDataInParallel(dataArray, callback) {
  const results = []
  let completed = 0

  dataArray.forEach((data) => {
    processDataAsync(data, (result) => {
      results[dataArray.indexOf(data)] = result
      completed++

      if (completed === dataArray.length) {
        callback(results)
      }
    })
  })
}

// chunks
function processDataInChunks(dataArray, chunkSize, callback) {
  const chunks = []
  let index = 0

  while (index < dataArray.length) {
    chunks.push(dataArray.slice(index, index + chunkSize))
    index += chunkSize
  }

  let completed = 0
  const results = []

  chunks.forEach((chunk) => {
    processDataInParallel(chunk, (chunkResult) => {
      results.push(...chunkResult)
      completed++

      if (completed === chunks.length) {
        callback(results)
      }
    })
  })
}

// processDataRecursively(5, (result) => {
//   console.log('Recursive result:', result)
// })

// processDataInParallel([1, 2, 3, 4, 5], (result) => {
//   console.log('Parallel result:', result)
// })

processDataInChunks([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, (result) => {
  console.log('Chunks result:', result)
})

// processDataAsync(5, (result) => {
//   console.log('Async result:', result)
// })

// Context:

// API 1.0
// computes the fizzled value
// function fizzle(v: number) -> number;

// boggles two values together
// function boggle(v1: number, v2: number) -> number;

// API 2.0
// All functions have been converted to be asynchronous (callback based) to
// take advantage of file reads, network requests, etc

// a callback should be a function that looks like this:
// function(result: number){ ... }

// computes the fizzled value
// function fizzle(v: number, cb: callback);

// boggles two values together
// function boggle(num v1: number, num v2: number, cb: callback);

//Code example:
//API1:
// console.log(‘Fizzle result:’, fizzle(10)); // prints ‘Fizzle result: X’
//API2:
// fizzle(10, fr=>console.log(‘Fizzle result:’, fr)); // prints ‘Fizzle result: X’

//Task 1:
// You need to recreate this API 1.0 synchronous 'calculate' function as an
// asynchronous (callback based) function.
// Assume fizzle and boggle have already been converted to API 2.0 for you

function calculate1(input) {
  let qux = fizzle(input)
  while (qux < input) qux += boggle(input, qux)
  return qux
}
function calculate2(input, cb) {
  // your code here

  function recursionCalc(val, callback) {
    if (val < input) {
      boggles(input, val, (res) => {
        val += res
        recursionCalc(val)
      })
    } else {
      callback(val)
    }
  }
  fizzle(input, (qux) => {
    recursionCalc(qux, (finalRes) => cb(finalRes))
  })
}
function calculate1(input) {
  return fizzle(input) / boggle(input, 0)
}

// can you optimize calculate to finish as quickly as possible?
function calculate2(input, cb) {
  const results = {}
  const funcs = [fizzle, boggle]

  funcs.forEach((func) => {
    if (func.name == 'fizzle') {
      func(input, (qux) => {
        results.fizzle = qux
        if (results.boggle != undefined) {
          cb(results.fizzle / results.boggle)
        }
      })
    } else {
      func(input, 0, (res) => {
        results.boggle = res
        if (results.fizzle != undefined) {
          cb(results.fizzle / results.boggle)
        }
      })
    }
  })
}

calculate2(100, console.log)

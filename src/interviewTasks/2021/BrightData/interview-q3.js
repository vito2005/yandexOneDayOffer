// Task 2.1
// Now update the `Deferred` so that this code also outputs the same thing but with 2 sec delay between first and second callback.
// Don't use async/await or Promise.

// class Deferred {
//   constructor() {
//     this.queue = []
//   }

//   resolve(data) {
//     for (let i = 0; i < this.queue.length; i++) {
//       let callback = this.queue[i]
//       if (data instanceof Deferred) {
//         data.queue = this.queue.slice(i)
//         break
//       } else {
//         data = callback(data)
//       }
//     }
//   }

//   then(callback) {
//     this.queue.push(callback)
//     return this
//   }
// }

// var d = new Deferred()
// d.then(function (res) {
//   console.log('1 ', res)
//   var d1 = new Deferred()
//   setTimeout(function () {
//     d1.resolve('a')
//   }, 2000)
//   return d1
// })
// d.then(function (res) {
//   console.log('2 ', res)
//   return 'b'
// })

// d.then(function (res) {
//   console.log('3 ', res)
//   var d1 = new Deferred()
//   setTimeout(function () {
//     d1.resolve('c')
//   }, 2000)
//   return d1
// })

// d.then(function (res) {
//   console.log('3 ', res)
//   return 'c'
// })
// d.resolve('hello')

// output of usage example
// 1 hello
// 2s later.. the rest should be printed
// 2 a
// 3 b
// =============

// Write the class "Deferred"

// output of usage example
// 1 hello
// 1.5s later.. the rest should be printed
// 2 a
// 3 b
// =============

class Deferred {
  constructor() {
    this.queue = []
    this.errorHandler = () => {}
  }

  then(callback) {
    this.queue.push(callback)
    return this
  }

  resolve(data) {
    try {
      for (let i = 0; i < this.queue.length; i++) {
        let callback = this.queue[i]
        if (data instanceof Deferred) {
          const callbacks = this.queue.slice(i)
          callbacks.forEach((c) => {
            data.then(c)
          })
          break
        } else {
          data = callback(data)
        }
      }
    } catch (error) {
      this.errorHandler(error)
    }
  }

  catch(callback) {
    this.errorHandler = callback
    return this
  }
}

// usage example
var d = new Deferred()
d.then(function (res) {
  console.log('1 ', res)
  var d1 = new Deferred()
  setTimeout(function () {
    d1.resolve('a')
  }, 1500)
  return d1
})
d.then(function (res) {
  console.log('2 ', res)
  return 'b'
})
d.then(function (res) {
  console.log('3 ', res)
  return 'c'
})

d.catch(function (res) {
  console.log('4 exception caught: ', res)
})
// at this point, nothing is printed to console (yet)
d.resolve('hello')

class Deferred {
  constructor() {
    this.queue = []
    this.errorHandler = () => {}
  }

  resolve(data) {
    try {
      for (let i = 0; i < this.queue.length; i++) {
        const callback = this.queue[i]
        if (data instanceof Deferred) {
          data.queue = this.queue.slice(i)
          data.errorHandler = this.errorHandler
          break
        } else {
          data = callback(data)
        }
      }
    } catch (error) {
      this.errorHandler(error.message)
    }
  }

  then(callback) {
    this.queue.push(callback)
    return this
  }

  catch(callback) {
    this.errorHandler = callback
    return this
  }
}
var d = new Deferred()
d.then(function (res) {
  console.log(1, res)
  var d1 = new Deferred()
  setTimeout(function () {
    d1.resolve('a')
  }, 2000)
  return d1
})

d.then(function (res) {
  console.log(2, res)
  throw new Error('surprise')
  return 'b'
})

d.then(function (res) {
  console.log(3, res)
  return 'c'
})

d.catch(function (res) {
  console.log('4 exception caught: ', res)
})

d.resolve('hello')

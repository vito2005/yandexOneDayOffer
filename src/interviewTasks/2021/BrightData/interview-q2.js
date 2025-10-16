// it was smth to write your own promise class

function noop() {}
class MyPromise {
  constructor(executor) {
    this.queue = []
    this.errorHandler = noop
    this.finallyHandler = noop

    try {
      executor.call(null, this.onResolve.bind(this), this.onReject.bind(this))
    } catch (e) {
      this.errorHandler(e)
    } finally {
      this.finallyHandler()
    }
  }

  onResolve(data) {
    this.queue.forEach((callback) => {
      data = callback(data)
    })
    this.finallyHandler()
  }

  onReject(error) {
    this.errorHandler(error)
    this.finallyHandler()
  }

  then(fn) {
    this.queue.push(fn)
    return this
  }

  catch(fn) {
    this.errorHandler = fn
    return this
  }

  finally(fn) {
    this.finallyHandler = fn
    return this
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('done')
    // reject('Some Error')
  }, 1000)
})

promise
  .then((some) => some.toUpperCase())
  .then((title) => console.log('title', title))
  .catch((error) => console.log('error', error))
  .finally(() => console.log('finally'))

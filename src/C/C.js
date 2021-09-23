class Worker {
  successCount = 0
  failedCount = 1
  tasks = []
  timeSpent = 0
  taskManager

  constructor(id, taskManager) {
    this.id = id
    this.taskManager = taskManager
    this.report = { successCount: 0, failedCount: 0, tasks: [], timeSpent: 0 }
  }

  doJob(tasks) {
    const task = tasks.shift()
    const start = Date.now()
    if (!task || tasks.lengt) {
      return
    }
    return task
      .job()
      .then(() => {
        this.report.successCount++
      })
      .catch(() => {
        this.report.failedCount++
      })
      .finally(() => {
        const jobTime = Date.now() - start
        this.report.timeSpent += jobTime
        this.report.tasks.push(task.id)
        if (tasks.length) {
          return this.doJob(tasks)
        }
        return
      })
  }
}

class TaskManager {
  tasksPull = []
  freeWorkers = []

  constructor(
    N // общее число роботов-исполнителей (от 1 до 1024)
  ) {
    for (let i = 0; i < N; i++) {
      const worker = new Worker(i)
      this.freeWorkers.push(worker)
    }
  }
  // Добавление задачи в очередь
  addToQueue(
    task // задача для исполнения, см. формат выше
  ) {
    if (!this.tasksPull[task.priority]) {
      this.tasksPull[task.priority] = []
    }
    const pTasks = this.tasksPull[task.priority]
    pTasks.push(task)
  }

  // Promise, который запускает процесс выполнения задач и выдаёт список отчётов
  async run() {
    this.allTasks = this.tasksPull.reduce((acc, tasks) => {
      if (tasks) {
        acc = [...tasks, ...acc]
      }
      return acc
    }, [])

    const ps = this.freeWorkers.map((w) => {
      return w.doJob(this.allTasks)
    })

    return Promise.all(ps).then(() => {
      return this.freeWorkers.map((w) => {
        return w.report
      })
    })
  }
}

module.exports = { TaskManager }

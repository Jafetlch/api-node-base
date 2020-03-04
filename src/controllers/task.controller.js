import Task from '@root/models/Task'
import { generateUUID } from '@root/helpers/generateUUID'

export const createTask = async (req, res, next) => {
  const body = req.body
  if (!body.name || !body.projectId) return next(new Error('Invalid body!'))

  const { name, done, projectId } = body
  try {
    const newTask = await Task.create({
      id: generateUUID(),
      name,
      done,
      projectId
    })

    return res.json(newTask)
  } catch (e) {
    return next(e)
  }
}

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll()

    return res.json(tasks)
  } catch (e) {
    return next(e)
  }
}

export const getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.taskId)
    if (!task) return next(new Error('Theres not task with that ID'))

    return res.json(task)
  } catch (e) {
    return next(e)
  }
}

export const updateTask = async (req, res, next) => {
  try {
    const body = req.body
    const task = await Task.findByPk(req.params.taskId)
    if (!task) return next(new Error('Theres not task with that ID'))

    /*
    await Task.update(
      {
        name,
        done,
        projectId
      },
      {
        where: { id: req.params.taskId }
      }
    )
    */
    const { name, done, projectId } = body
    await task.update({
      name,
      done,
      projectId
    })

    return res.json(task)
  } catch (e) {
    return next(e)
  }
}

export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.taskId)
    if (!task) return next(new Error('Invalid task ID'))
    await task.destroy()

    return res.end()
  } catch (e) {
    return next(e)
  }
}

export const getTaskByProjectId = async (req, res, next) => {
  try {
    const tasks = await Task.findAll({
      where: { projectId: req.params.projectId }
    })

    return res.json(tasks)
  } catch (e) {
    return next(e)
  }
}

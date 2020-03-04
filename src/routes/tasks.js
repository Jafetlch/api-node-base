import { Router } from 'express'

import {
  createTask,
  getTasks,
  getTaskById,
  deleteTask,
  updateTask,
  getTaskByProjectId
} from '@root/controllers/task.controller'
const router = Router()

router.post('/', createTask)
router.get('/', getTasks)
router.get('/:taskId', getTaskById)
router.delete('/:taskId', deleteTask)
router.put('/:taskId', updateTask)

router.get('/project/:projectId', getTaskByProjectId)

export default router

import { Router } from 'express'
import {
  createProject,
  getProjects,
  getProjectById,
  deleteProject,
  updateProject,
  getAllTaskProject
} from '@root/controllers/project.controller'

const router = Router()

router.post('/', createProject)
router.get('/', getProjects)
router.get('/:projectId', getProjectById)
router.delete('/:projectId', deleteProject)
router.put('/:projectId', updateProject)
router.put('/:projectId', updateProject)

router.get('/task/all', getAllTaskProject)

export default router

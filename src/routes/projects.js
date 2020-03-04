import { Router } from 'express'
import {
  createProject,
  getProjects,
  getProjectById,
  deleteProject,
  updateProject
} from '@root/controllers/project.controller.js'

const router = Router()

router.post('/', createProject)
router.get('/', getProjects)
router.get('/:projectId', getProjectById)
router.delete('/:projectId', deleteProject)
router.put('/:projectId', updateProject)
router.put('/:projectId', updateProject)

export default router

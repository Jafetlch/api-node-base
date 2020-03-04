import Project from '@root/models/Project'
import { generateUUID } from '@root/helpers/generateUUID'

export const createProject = async (req, res, next) => {
  const body = req.body
  if (!body.name || !body.priority) return next(new Error('Invalid body!'))
  const { name, priority, description, deliverydate } = body
  try {
    const newProject = await Project.create({
      id: generateUUID(),
      name,
      priority,
      description,
      deliverydate
    })

    return res.json(newProject)
  } catch (e) {
    return next(e)
  }
}

export const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.findAll()

    return res.json(projects)
  } catch (e) {
    return next(e)
  }
}

export const getProjectById = async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.projectId)
    if (!project) return next(new Error('Theres not project with that ID'))

    return res.json(project)
  } catch (e) {
    return next(e)
  }
}

export const updateProject = async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.projectId)
    if (!project) return next(new Error('Theres not project with that ID'))

    const { name, priority, description, deliverydate } = req.body
    project.update({
      name,
      priority,
      description,
      deliverydate
    })

    return res.json(project)
  } catch (e) {
    return next(e)
  }
}

export const deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.projectId)
    if (!project) return next(new Error('Invalid project ID'))
    await project.destroy()

    return res.end()
  } catch (e) {
    return next(e)
  }
}

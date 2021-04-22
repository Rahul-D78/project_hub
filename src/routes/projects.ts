import { Router } from 'express'
import { addProject, deleteProject, getProjectBySlug, getProjects, updateProject } from "../controllers/projects"
const route = Router()

route.get('/', async(req, res) => {
    try {
        const projects = await getProjects();
        res.status(200).send(projects)     
    } catch (e) {
        res.status(500).send(`error fetching all the project ${e}`)
    }
});

route.get('/:slug', async(req, res) => {
    try {
        const project = await getProjectBySlug(req.params.slug);
        res.status(200).send(project);
    } catch (e) {
        res.status(500).send(`error getting the project ${e}`);
    }
});

route.post('/', async(req, res) => {
    try {
        const project = await addProject(req.body);
        res.status(200).send(project);
    } catch (e) {
        res.status(500).send(`error posting the project ${e}`);
    }
});

route.patch('/:slug', async(req, res) => {
    try {
        const project = await updateProject(req.body, req.params.slug);
        res.status(200).send(project);
    } catch (e) {
         res.status(500).send(`error the project ${e}`);
    }
});

route.delete('/:slug',async (req, res) => {
    try {
        const project = await deleteProject(req.params.slug);
        res.status(200).send(project);
    } catch (e) {
         res.status(500).send(`error the project ${e}`);
    }
})

export const projectRoute = route; 
import { getRepository } from "typeorm";
import { Project } from "../entities/Projects";
import { slugify } from "../utils/stringUtils";

interface projectData {
    body: string,
    title: string,
    tags: string[]
}

export async function getProjects(): Promise<Project[]> {
    try {
      const repo = getRepository(Project);
      const project = await repo.find();
      
      if(!project) throw new Error("No Project found");
      return project;
    } catch (e) {
        throw e;
    };
};

export async function getProjectBySlug(slug: string): Promise<Project> {
    try {

        const repo = getRepository(Project);
        const project = await repo.findOne(slug);

        if(!project) throw new Error("user with this slug does not exists");

        return project;
    } catch (e) {
        throw e;
    }
};

export async function addProject(data: projectData): Promise<Project> {
    try {
        const repo = getRepository(Project)
        const project = repo.save(new Project(
            await slugify(data.title),
            data.body,
            data.title,
            data.tags
        ));
        return project
    } catch (e) {
        throw e;
    }
}

export async function updateProject(data: projectData, slug: string): Promise<Project> {
    try {
        const repo = getRepository(Project);
        const project = await repo.findOne(slug);
        
        if(!project) throw new Error("No Project with this slug exists");

        (data.body != undefined) ? (data.body) = (project.body) : project.body;
        (data.title != undefined) ? (data.title) = (project.title) : project?.title;
        (data.tags != undefined) ? (data.tags) = (project.tags!) : project?.tags;

        const updatedData = await repo.save(project);
        return updatedData;
    } catch (e) {
        throw e
    }
}

export async function deleteProject(slug: string): Promise<Project> {
    try {
        const repo = getRepository(Project);
        const project = await repo.findOne(slug);

        if(!project) throw new Error("Project with this slug not exists");
        const deletedProject = await repo.remove(project);

        return deletedProject;
    } catch (e) {
        throw e
    }
}
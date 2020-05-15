'use strict'

const Project = use('App/Models/Project')
const AuthServices = use('App/Services/AuthServices')

class ProjectController {

    //index controller
    async index({ auth }) {
        //uses the auth provider to get the User JWT
        const user = await auth.getUser()
        //fetches the data and returns the projects based on that user
        return await user.projects().fetch()
    }

    //create projects controller
    async create({ auth, request }) {
        //uses the auth provider to get the User JWT
        const user = await auth.getUser()
        //parses the data from the frontend
        const { title } = request.all()
        //creates a new project based on the user and the parsed data
        const project = new Project()
        //creates a json object
        project.fill({
            title
        })
        //associates the user with the project that was created
        await user.projects().save(project)
        //sends to the DB
        return project
    }

    //destroy project item controller
    async destroy({ auth, request, params }) {
        //uses the auth provider to get the User JWT
        const user = await auth.getUser()
        //gets the id from the params
        const { id } = params
        //gets the project item by the id
        const project = await Project.find(id)
        //validates if the user has access to the item
        //if the user doesn't, send an error
        AuthServices.verifyPermission(project, user)
        //if the user does, it deletes the item
        await project.delete()
        return project
    }

    //update project item controller
    async update({ auth, request, params }) {
        //uses the auth provider to get the User JWT
        const user = await auth.getUser()
        //gets the id from the params
        const { id } = params
        //gets the project item by the id
        const project = await Project.find(id)
        //validates if the user has access to the item
        //if the user doesn't, send an error
        AuthServices.verifyPermission(project, user)
        //if the user does, it updates the item
        project.merge(request.only('title'))
        await project.save()
        return project
    }
}

module.exports = ProjectController

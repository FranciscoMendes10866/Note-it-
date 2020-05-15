'use strict'

const Project = use('App/Models/Project')
const Task = use('App/Models/Task')
const AuthServices = use('App/Services/AuthServices')

class TaskController {

    async index({ auth, request, params }) {
        //uses the auth provider to get the User JWT
        const user = await auth.getUser()
        //gets the id from the params
        const { id } = params
        //gets the project item by the id
        const project = await Project.find(id)
        //verifies if the user has access to the project
        AuthServices.verifyPermission(project, user)
        //return all the tasks associated with a particular project_id
        return await project.tasks().fetch()
    }

    //create tasks controller
    async create({ auth, request, params }) {
        //uses the auth provider to get the User JWT
        const user = await auth.getUser()
        //parses the data from the frontend
        const { description } = request.all()
        //gets the id from the params
        const { id } = params
        //gets the project item by the id
        const project = await Project.find(id)
        //verifies if the user has access to the project
        AuthServices.verifyPermission(project, user)
        //creates a task if the user has access to the project
        const task = new Task()
        task.fill({
            description
        })
        //associates the task with the project
        await project.tasks().save(task)
        return task
    }


    //destroy task item controller
    async destroy({ auth, request, params }) {
        //uses the auth provider to get the User JWT
        const user = await auth.getUser()
        //gets the id from the params
        const { id } = params
        //gets the project item by the id
        const task = await Task.find(id)
        //fetches the projects
        const project = await task.project().fetch()
        //validates if the user has access to the item
        //if the user doesn't, send an error
        AuthServices.verifyPermission(project, user)
        //if the user does, it deletes the item
        await task.delete()
        return task
    }


    //update task item controller
    async update({ auth, request, params }) {
        //uses the auth provider to get the User JWT
        const user = await auth.getUser()
        //gets the id from the params
        const { id } = params
        //gets the project item by the id
        const task = await Task.find(id)
        const project = await task.project().fetch()
        //validates if the user has access to the item
        //if the user doesn't, send an error
        AuthServices.verifyPermission(project, user)
        //if the user does, it updates the item
        task.merge(request.all())
        await task.save()
        return task
    }
}

module.exports = TaskController

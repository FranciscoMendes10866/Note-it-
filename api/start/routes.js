'use strict'

const UserController = require('../app/Controllers/Http/UserController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  //users
  //route to create an account
  Route.post('auth/register', 'UserController.register')
  //route to log in an existing user
  Route.post('auth/login', 'UserController.login')

  //projects
  //gets all the projects related to a certain user
  Route.get('projects', 'ProjectController.index').middleware('auth')
  //gets all the projects related to a certain user
  Route.post('projects', 'ProjectController.create').middleware('auth')
  //deletes a single project
  Route.delete('projects/:id', 'ProjectController.destroy').middleware('auth')
  //updates a single project
  Route.put('projects/:id', 'ProjectController.update').middleware('auth')

  //tasks
  //creates a single task
  Route.post('projects/:id/tasks', 'TaskController.create').middleware('auth')
  //gets the tasks related to a project
  Route.get('projects/:id/tasks', 'TaskController.index').middleware('auth')
  //deletes a task related to a project
  Route.delete('tasks/:id', 'TaskController.destroy').middleware('auth')
  //updates a task related to a project
  Route.put('tasks/:id', 'TaskController.update').middleware('auth')
})
  .prefix('api/v1')

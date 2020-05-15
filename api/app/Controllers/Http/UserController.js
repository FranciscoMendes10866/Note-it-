'use strict'

const User = use('App/Models/User')

class UserController {

    //register controller
    async register({ request }) {
        //parses the data from the frontend
        const { email, password, username } = request.all()
        //create method based on the User Model
        const user = await User.create({
            email,
            password,
            username
        })
        //submits the data
        return user
    }

    //login controller
    async login({ request, auth }) {
        //parses the data from the frontend
        const { email, password } = request.all()
        //uses the auth provider to login the user
        const token = await auth.attempt(email, password)
        //validates the data
        return token
    }
}

module.exports = UserController

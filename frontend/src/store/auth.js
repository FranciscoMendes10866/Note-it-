import AdonisApi from '../server/AdonisApi'
import router from '../router/index'

export default {
    namespaced: true,
    state: {
        //Submit Email
        websiteName: 'Note it!',
        //login init states
        loginEmail: null,
        loginPassword: null,
        loginError: null,
        //register init states
        email: null,
        password: null,
        username: null,
        registerError: null,
        //token
        token: null,
    },
    actions: {
        //logout function
        logout({ commit }) {
            commit('setToken', null);
            router.push('/login');
        },
        //register function
        register({ commit, state }) {
            return AdonisApi().post('/auth/register', {
                email: state.email,
                password: state.password,
                username: state.username,
            })
                .then(() => {
                    router.push('/login')
                })
                .catch(() => {
                    commit('setRegisterError')
                })
        },
        //login function
        login({ commit, state }) {
            return AdonisApi().post('/auth/login', {
                email: state.loginEmail,
                password: state.loginPassword,
            })
                .then(({ data }) => {
                    commit('setToken', data.token)
                    router.push('/dashboard')
                })
                .catch(() => {
                    commit('setLoginError')
                })
        },
    },
    getters: {
        isLoggedIn(state) {
            return !!state.token
        },
    },
    mutations: {
        //token
        setToken(state, token) {
            state.token = token
            console.log(token)
        },
        //register
        setEmail(state, email) {
            state.email = email
        },
        setPassword(state, password) {
            state.password = password
        },
        setUsername(state, username) {
            state.username = username
        },
        setRegisterError(state, error) {
            state.registerError = error
        },
        //login
        setLoginEmail(state, loginEmail) {
            state.loginEmail = loginEmail
        },
        setLoginPassword(state, loginPassword) {
            state.loginPassword = loginPassword
        },
        setLoginError(state, error) {
            state.loginError = error
        }
    },
}
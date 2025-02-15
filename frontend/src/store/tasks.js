import Vue from 'vue';
import AdonisApi from '../server/AdonisApi';

export default {
    namespaced: true,
    state: {
        tasks: [],
        newTaskName: null,
    },
    actions: {
        saveTask({ commit }, task) {
            return AdonisApi().put(`tasks/${task.id}`, task)
            .then(() => {
                commit('unsetEditMode', task);
            });
        },
        deleteTask({ commit }, task) {
            return AdonisApi().delete(`tasks/${task.id}`)
                .then(() => {
                    commit('removeTask', task);
                });
        },
        fetchTasksForProject({ commit }, project) {
            return AdonisApi().get(`projects/${project.id}/tasks`)
                .then(({ data }) => {
                    commit('setTasks', data);
                });
        },
        createTask({ commit, state, rootState }) {
            return AdonisApi().post(`/projects/${rootState.projects.currentProject.id}/tasks`, {
                description: state.newTaskName,
            })
                .then(({ data }) => {
                    commit('appendTask', data);
                    commit('setNewTaskName', null);
                });
        },
    },
    getters: {
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
        setNewTaskName(state, newTaskName) {
            state.newTaskName = newTaskName;
        },
        appendTask(state, task) {
            state.tasks.push(task);
        },
        setTaskDescription(state, { task, description }) {
            task.description = description;
        },
        setEditMode(state, task) {
            Vue.set(task, 'isEditMode', true);
        },
        unsetEditMode(state, task) {
            Vue.set(task, 'isEditMode', false);
        },
        removeTask(state, task) {
            state.tasks.splice(state.tasks.indexOf(task), 1);
        }
    },
};
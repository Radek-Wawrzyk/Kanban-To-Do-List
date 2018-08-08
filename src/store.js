import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 0,
        title: "Eat healthy food",
        description: "Eat fucking food, cause food is very importantin your life, have a nice diet and what is more importantdo not eat junk food, fast food is good enought, however burgers from MC are fucking unhealthy.",
        date: "08-08-2018",
        done: false
      },
      {
        id: 1,
        title: "Eat healthy food",
        description: "Eat fucking food, cause food is very importantin your life, have a nice diet and what is more importantdo not eat junk food, fast food is good enought, however burgers from MC are fucking unhealthy.",
        date: "08-08-2018",
        done: false
      },
      {
        id: 2,
        title: "Eat healthy food",
        description: "Eat fucking food, cause food is very importantin your life, have a nice diet and what is more importantdo not eat junk food, fast food is good enought, however burgers from MC are fucking unhealthy.",
        date: "08-08-2018",
        done: true
      }
    ]
  },
  getters: {
    tasks: state => {
      return state.tasks;
    },
    doneTasks: state => {
      return state.tasks.filter(task => task.done == true);
    },
    openTasks: state => {
      return state.tasks.filter(task => task.done == false);
    }
  },
  mutations: {
    addTask: (state, task) => {
      state.tasks.push(task);
    },
    deleteTask: (state, taskId) => {
      state.tasks.forEach((task, index) => {
        if (task.id === taskId) {
          state.tasks.splice(index, 1);
        }
      })
    }
  },
  actions: {
    addTask: (event, task) => {
      event.commit("addTask", task);
    },
    deleteTask: (event, taskId) => {
      event.commit("deleteTask", taskId);
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 0,
        title: "Wash dishes",
        description: "After return i have to wash dishes, cause my mother yelling at me, and it's annoying ",
        date: "08-08-2018",
        done: false,
        subTasks: [
          {
            id: 234,
            name: "Back to home",
            done: false,
            edit: false
          },
          {
            id: 235,
            name: "Wash dishes",
            done: false,
            edit: false
          }
        ]
      },
      {
        id: 1,
        title: "Clean my room",
        description: "My room is not tidy - it's fucking mess! I must clean all the faps piece of paper",
        date: "08-08-2018",
        done: false,
        subTasks: [
          {
            id: 236,
            name: "Back to home",
            done: false,
            edit: false
          },
          {
            id: 237,
            name: "Tidy my mess room",
            done: false,
            edit: false
          }
        ]
      },
      {
        id: 2,
        title: "Slay all jews on the world",
        description: "Jews are not have rights to life, they should be eliminated as fast it's possible ",
        date: "08-08-2018",
        done: true,
        subTasks: [
          {
            id: 238,
            name: "Prepare plan for jews anihilation",
            done: false,
            edit: false
          },
          {
            id: 239,
            name: "execute the plan",
            done: false,
            edit: false
          }
        ]
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
    },
    editTask: (state, task) => {
      let currentTask = state.tasks.find(item => item.title = task.title);
      
      currentTask = task;
    }
  },
  actions: {
    addTask: (event, task) => {
      event.commit("addTask", task);
    },
    deleteTask: (event, taskId) => {
      event.commit("deleteTask", taskId);
    },
    editTask: (event, task) => {
      event.commit("editTask", task);
    }
  }
})

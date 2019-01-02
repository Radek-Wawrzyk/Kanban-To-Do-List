import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 0,
        title: "Wash dishes",
        description: "After return to my home, I must to wash dishes",
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
        description: "My room is not tidy - it's mess!",
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
        title: "Wach Star Wars saga and chillout",
        description: "",
        date: "08-08-2018",
        done: true,
        subTasks: [
          {
            id: 238,
            name: "Prepare plan for great time",
            done: false,
            edit: false
          },
          {
            id: 239,
            name: "execute order 66",
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
    deleteSubTask: (state, taskName) => {
      state.tasks.forEach(task => {
        task.subTasks.forEach((item, index) => {
          if (item.name === taskName) {
            task.subTasks.splice(index, 1);
          }
        })
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
    deleteSubTask: (event, taskName) => {
      event.commit("deleteSubTask", taskName);
    },
    editTask: (event, task) => {
      event.commit("editTask", task);
    }
  }
})

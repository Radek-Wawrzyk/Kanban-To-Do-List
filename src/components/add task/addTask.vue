<template>
  <transition name="fade">
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">New Task</p>
          <button class="delete" aria-label="close" @click="close"></button>
        </header>
        <section class="modal-card-body">
          <form class="form">
            <div class="field">
              <label class="label">Title</label>
              <div class="control">
                <input class="input" type="text" placeholder="Title" v-model="task.title">
              </div>
            </div>
            <div class="field">
              <label class="label">Description</label>
              <div class="control">
                <textarea class="textarea" type="text" placeholder="Description" v-model="task.description"></textarea>
              </div>
            </div>
           <div class="field">
              <label class="label">Subtasks</label>
            </div>
            <div class="field has-addons">
              <div class="control add-sub-task">
                <input class="input" type="text" placeholder="Add task" v-model="task.subTask" @keyup.enter="addSubTask">
              </div>
              <div class="control">
                <button type="button" class="button is-primary" @click="addSubTask">Add task</button>
              </div>
            </div>
            <ul class="sub-task-list">
              <subTask class="field" v-for="(subTask, index) in task.subTasks" :key="index" :subTask="subTask"></subTask>
            </ul>
          </form>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-primary" @click="addTask">Create Task</button>
          <button class="button" @click="close">Cancel</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>

import subTask from "./sub task/subTask.vue"

export default {
  name: "AddTask",
  components: {
    subTask
  },
  data() {
    return {
      task: {
        title: "",
        description: "",
        date: new Date(),
        subTask: "",
        done: false,
        subTasks: []
      }
    }
  },
  methods: {
    addSubTask() {
      if (this.task.subTask.length > 0) {
        
        const subtask = {
          name: this.task.subTask,
          done: false,
          edit: false
        };
        this.task.subTasks.push(subtask);
        this.task.subTask = "";
      }
    },
    close() {
      this.$router.go(-1);
    },
    addTask() {
      if (this.task.title.length > 1) {
        this.$store.dispatch("addTask",this.task)
        this.close();
      }
    }
  }
}

</script>
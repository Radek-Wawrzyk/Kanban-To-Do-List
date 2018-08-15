<template>
  <transition name="fade">
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            Edit Task
            <button class="button button-accept" :class="{'done': task.done}" @click="done">
              <span class="icon is-small">
                <i class="fas fa-check"></i>
              </span>
              <span>Done</span>
           </button>
          </p>
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
        <footer class="modal-card-foot modal-edit">
          <div class="buttons-group">
            <button class="button is-primary" @click="editTask">Edit task</button>
            <button class="button" @click="close">Cancel</button>
          </div>
          <button class="button is-danger is-right" @click="deleteTask">Delete</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>

import subTask from "./sub task/subTask.vue"

export default {
  name: "editTask",
  components: {
    subTask
  },
  data() {
    return {
      task: {}
    }
  },
  methods: {
    close() {
      this.$router.go(-1);
    },
    editTask() {
      this.$store.dispatch("editTask", this.task).then(this.close);
    },
    done() {
      this.task.done =! this.task.done;
    },
    addSubTask() {
      if (this.task.subTask.length > 0) {
        
        const subtask = {
          name: this.task.subTask,
          done: false,
        };
        this.task.subTasks.push(subtask);
        this.task.subTask = "";
      }
    },
    deleteTask() {
      this.$store.dispatch("deleteTask", this.task.id).then(this.close());
    }
  },
  created: function() {
    let task = this.$store.state.tasks.find(task => task.title === this.$route.params.title);
    this.task = task;
  }
}

</script>

<style lang="scss" src="./editTask.scss"  />
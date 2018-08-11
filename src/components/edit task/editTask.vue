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
              <label class="label">Subtask</label>
              <input class="input" type="text" placeholder="Add task" v-model="task.subTask" @keyup.enter="addSubTask">
            </div>
            <ul class="sub-task-list">
              <li class="field" v-for="task in task.subTasks" :key="task.name">
                <div class="sub-task">
                  <div class="sub-task-left">
                    <button class="sub-task-checkbox" :class="{'is-active': task.done}" type="button" @click="task.done =! task.done">
                      <span class="fas fa-check"></span>
                    </button>
                    <p class="sub-task-name" :class="{'is-active': task.done}">{{task.name}}</p>
                  </div>
                  <div class="sub-task-right">
                    <span class="fas fa-pencil-alt" @click="task.edit =! task.edit"></span>
                  </div>
                </div>
                <div class="control" v-if="task.xd">
                  <input class="input" type="text" v-model="task.name">
                </div>
              </li>
            </ul>
          </form>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-primary" @click="editTask">Edit task</button>
          <button class="button" @click="close">Cancel</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: "editTask",
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
    }
  },
  created: function() {
    let task = this.$store.state.tasks.find(task => task.title === this.$route.params.title);
    this.task = task;
  }
}

</script>

<style lang="scss" src="./editTask.scss"  />
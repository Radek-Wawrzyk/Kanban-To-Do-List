<template>
  <transition name="fade">
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Edit Task</p>
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
              <ul>
                <li v-for="task in task.subList" :key="task.name" @click="task.edit = true">
                  <input class="input" type="text" v-model="task.name">
                </li>
              </ul>
            </div>
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
  name: "AddTask",
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
    }
  },
  created: function() {
    let task = this.$store.state.tasks.find(task => task.title === this.$route.params.title);
    this.task = task;
  }
}

</script>
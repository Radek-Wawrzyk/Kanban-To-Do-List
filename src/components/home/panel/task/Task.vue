<template>
  <li class="item" :key="task.id">
    <header class="item-header">
      <h4 class="item-title subtitle is-5">{{task.title}}</h4>
      <div class="item-settings">
        <button class="delete" @click="deleteTask"></button>
      </div>  
    </header>
    <p class="is-small item-sub-counter" v-if="task.subTasks.length > 0">{{doneSubTasks.length}} of {{task.subTasks.length}}</p>
    <p class="item-description">{{task.description}}</p>
    <router-link :to="`edit-task/${task.title}`" class="item-button button is-primary">Edit</router-link>
  </li>
</template>

<script>

export default {
  name: "Task",
  props: {
    "task": Object
  },
  methods: {
    deleteTask() {
      this.$store.dispatch("deleteTask", this.task.id);
    }
  },
  computed: {
    doneSubTasks() {
      return this.task.subTasks.filter(task => task.done == true);
    }
  }
}

</script>

<style lang="scss" src="./task.scss" scoped />
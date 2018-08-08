<template>
  <li class="item" :key="task.id">
    <h4 class="item-title subtitle is-5">
      {{task.title}}
      <button class="delete" @click="deleteTask"></button>
    </h4>
    <p class="item-description">{{task.description}}</p>
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
  }
}

</script>

<style lang="scss" src="./task.scss" scoped />
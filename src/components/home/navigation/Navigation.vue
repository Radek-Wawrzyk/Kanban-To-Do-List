<template>
  <nav class="navigation">
    <h1 class="navigation-logo">
      <span>Kanban</span> ToDoList
    </h1>
    <div  class="navigation-panel">
      <p class="navigation-panel-user">Fan Node.js</p>
      <button class="navigation-panel-btn">
        <span class="btn-plus">+</span>
        <span class="btn-content">new Task</span>
      </button>
    </div>
  </nav>
</template>

<script>
  
export default {
  name: "Navigation"
}

</script>

<style lang="scss" src="./navigation.scss"/>
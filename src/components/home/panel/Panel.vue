<template>
  <script



  <div id="toDoBox">
    <div id="toDoList-input">
      <h1>
        ToDoList
      </h1>
      <div class="inputGroup">
        <input type="text" class="input-todo" placeholder="    New task">
        <button class="button">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
    <div id="ToDoList-items">
      <ul class="ToDoList">
        <li class="ToDoListItem"><p>Uratować psa</p>  <i class="fas fa-check"></i></li>
        <li class="ToDoListItem"><p>Zjeść bananka</p>  <i class="fas fa-check"></i></li>
        <li class="ToDoListItem"><p>Przeprogramować deski</p>  <i class="fas fa-check"></i></li>
      </ul>
    </div>
  </div>
</template>

<script>

import axios from "axios"

export default {
  name: 'Home',
  data() {
    return {
      msg: "Kanban Todolist"
    }
  }
}

</script>

<style lang="scss" src="./panel.scss" scoped />

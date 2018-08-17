<template>
  <div class="sub-task">
    <div class="sub-task-left">
      <button class="sub-task-checkbox" :class="{'is-active': subTask.done}" type="button" @click="subTask.done =! subTask.done, subTask.edit = false">
        <span class="fas fa-check"></span>
      </button>
      <p class="sub-task-name" :class="{'is-active': subTask.done}">{{subTask.name}}</p>
    </div>
    <div class="sub-task-right">
      <span class="fas fa-pencil-alt" @click="subTask.edit =! subTask.edit"></span>
      <span class="far fa-trash-alt" @click="deleteSubTask"></span>
    </div>
    <div class="field has-addons" v-if="subTask.edit">
      <div class="control sub-task-edit" >
        <input class="input" type="text" v-model="subTask.name">
      </div>
      <div class="control">
        <button type="button" class="button fas fa-check" @click="subTask.edit = false"></button>
      </div>
    </div>    
  </div>
</template>

<script>

export default {
  name: "subTask",
  props: {
    "subTask": Object
  },
  methods: {
    deleteSubTask() {
      this.$emit("deleteSubTask", this.subTask.name);
    }
  }
}

</script>


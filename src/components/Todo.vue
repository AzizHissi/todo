<template>
  <div>
      <li class="list-group-item">
      <div class="form-group form-inline m-0">
          <div class="col-1"><input v-model="todo.completed" v-on:click="is_Completed()" type="checkbox" class="checkbox" id=""></div>
          <div v-bind:class="{
            'is-completed':todo.completed ,
            'col-6 text-left':true
            }">{{todo.title}}</div>
          <div class="col-5 text-right ">
              <button v-on:click="updateTodo()" class="btn btn-warning btn-sm ml-1">Modifier</button>
              <button v-on:click="deleteTodo()" class="btn btn-danger btn-sm ml-1">Supprimer</button>
            </div>
            </div>
      </li>
 
  </div>
</template>

<script>
export default {
props:['todo'],
methods:{
  deleteTodo(){
 this.$emit('deleteToDo',this.todo.id)
},
is_Completed(){
  
  this.$emit('is_Completed',this.todo)
},
updateTodo(){
  this.$emit('updateTodo',this.todo)
}
  }
 
}

</script>

<style>
.is-completed{
 text-decoration: line-through;
}
</style>
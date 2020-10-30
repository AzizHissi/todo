<template>
<div class="container">
 
  <div class="w-75 text-center  justify-content-center align-items-center  p-3">
      <div class="card mt-3 " >
      <input type="text"  v-model="title" class="form-control m-1"  id="">
    
     <ul class="list-group list-group-flush" v-for="todo in filteredList" :key="todo.id">
         <todo :todo="todo"/>
     </ul>
      </div>
  </div>
      
</div>

</template>

<script>
import Todo from '../components/Todo.vue';
import axios from 'axios'
export default {
components:{
'todo':Todo
},
data(){
    return{
Todos:[],
title:''
    }
},
methods:{
     GetData(){
      axios.get('http://localhost:3000/todos')
      .then(req => this.Todos = req.data)
      .catch(err => console.log(err));
    },
   
},
created(){
  
   /* this.filteredList(),*/
      this.GetData();
    
       
      },
  computed: {
    filteredList() {
      return this.Todos.filter(todo => {
        return todo.title.toLowerCase().includes(this.title.toLowerCase())
      })
    }
}}
  

</script>

<style>

</style>
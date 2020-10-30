<template>
<div class="container">
  <div class="text-center row  justify-content-center align-items-center">
<div class="card mt-3" >
  
  <div class="card-body">
    <h5 class="card-title">Liste des taches faire</h5>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit, Non iure dolor molestiae labore.</p>
    <div class="form-group m-0">
     
      <input  v-model="title" type="text" class="form-control mt-1"/>
      <button v-show="!edit_status" v-on:click="AddTodo()" class="btn btn-success mt-1 form-control">Ajouter</button>
      <div v-show="edit_status" class="form-inline form-group m-0">
       <span class="col-9 m-0"> <button  v-on:click="UpDateT()" class="btn btn-warning col-12 m-0 mt-1 ">Enregistrer</button></span>
        <span class="col-3 m-0"><button  v-on:click="ClearTitle()" class="btn btn-info col-12 m-0 mt-1">Annuler</button></span></div>
       
    </div>
  </div>
  <ul class="list-group list-group-flush" v-for="todo in Todos" :key="todo.id">
  <todo :todo="todo"
        v-on:deleteToDo="DeleteTodo"
        v-on:is_Completed="is_Completed"
        v-on:updateTodo="updateTodo"/>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link"><i class="fab fa-facebook fa-2x"></i></a>
    <a href="#" class="card-link"><i class="fab fa-instagram fa-2x text-danger"></i></a>
    <a href="#" class="card-link"><i class="fab fa-twitter fa-2x"></i></a>
    <a href="https://wa.me/0633071446" class="card-link"><i class="fab fa-whatsapp fa-2x text-success"></i></a>
  </div>
</div>
</div>

</div>
</template>

<script>
import Todo from '../components/Todo.vue';
import axios from 'axios'
export default {
 
components:{
  'todo':Todo,
},
data(){
  return {
    title:null,
    Todos :[],
    todo:{id:null,title:null,completed:null},
    edit_status:false,
   
    
    
  }
 
}, 
methods:{
    GetData(){
      axios.get('http://localhost:3000/todos')
      .then(req => this.Todos = req.data)
      .catch(err => console.log(err));
    },
    DeleteTodo(id){
      axios.delete('http://localhost:3000/todos/'+id)
      .then(()=>{this.Todos = this.Todos.filter(todo => todo.id !== id )})
      .catch(err => console.log(err));
    },
    is_Completed(td){
    
     let todo = {
       ...this.todo,
       completed:!td.completed,
       title:td.title,
      
     }
         axios.put('http://localhost:3000/todos/'+td.id,todo)
        .then(() => {
          
        })
    },
    updateTodo(td){
   this.title = td.title;
     this.todo.title = td.title;
      this.todo.completed = td.completed;
      this.todo.id = td.id;
      this.edit_status = true;
      
    },
    ClearTitle(){
      this.title = null;
       this.edit_status = false;
    },
    UpDateT(){
        this.todo.title = this.title;
        axios.put('http://localhost:3000/todos/'+this.todo.id,this.todo)
        .then(() => {
          this.GetData()
          this.title = '';
          this.edit_status = false;
        })
    },
    AddTodo(){
         let newTodo = {
          title :this.title,
          completed:false
        }
        axios.post('http://localhost:3000/todos',newTodo)
        .then(res => {this.Todos = [res.data,...this.Todos];this.title = '';})
       
      }
    
  },
  created(){
    this.GetData()
   
  },
  computed: {
    filteredList() {
      return this.Todos.filter(todo => {
        return todo.title.toLowerCase().includes(this.title.toLowerCase())
      })
    }
  }

}

</script>

<style>

</style>
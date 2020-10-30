<template>
  <div >
    
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><i><span class="fab fa-edge"></span></i></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#"><router-link to="/">Todos</router-link> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><router-link to="/Search">Search</router-link></a>
      </li>
      </ul>
    
  </div>
</nav>

  <router-view v-on:childinit="onChildInit"></router-view>
   
  </div>
</template>
<script>
//import 'bulma/css/bulma.min.css'
import  'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
export default {
  
  data(){
    return{
     
    }
  },
}
</script>
<style>

</style>

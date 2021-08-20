<template>
<div id="app">
  <header id="header">
    
      <div id="logotipo">
        <img src="./assets/cripto.png">
        <strong><h1>Cryptonita</h1></strong>
      </div>
  </header>
  

      <div id="nav">
        <router-link to="/">Home</router-link> |        
        <router-link to="/login">Login</router-link> |        
        <router-link to="/nuevaCompra">Compra</router-link> |
        <router-link to="/nuevaVenta">Venta</router-link> |
        <router-link to="/estadoActual">Estado Actual</router-link> |
        <router-link to="/resultados">Resultados</router-link> |
        <router-link to="/precioCriptos">Precios Cripto</router-link> |        
        <router-link to="/about">About</router-link>      
        
      </div>        

      <div id="content">
        <router-view/>        
      </div>

      <footer>Teo Chiappero - Trabajo final Laboratorio III - 2021</footer>
</div>  
      <!-- //Problemas: Fecha cuando es <10 sale sin el cero                  
                   //Hacer services para llevar apiClient
                   //Muchos decimales en rdos o estado actual
                   // Ocultar menus cuando no hay cesion iniciada
                   -->

</template>

<script>
import axios from 'axios'
import store from './store'


export default {
  name: 'App',
  data(){
    return {
      
      
    }
  },
  mounted(){
    
  },
  methods: {
    

  }    
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  font-size: 18px;
  color: #2c3e50;
  color:gold;
}
#nav a.router-link-exact-active {
  color:coral;
}

#logotipo img{
  position: relative;  
  top: 96px;
  right: 550px;
  margin: 10px;
  width: 150px;

}
#header {
  background-color:gold;
  height:100px;
}

#header h1{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 45px;
  position: relative;
  bottom:120px;

  
}

#content{
    width:1212px;
    min-height: 400px;
    margin: 0 auto;
    margin-bottom: 30px;  
    margin-top: 30px;    
    text-align: center;
    border: 2px solid #ccc;
}

footer{
    width: auto;
    background-color:#232823 ;
    border: 1px solid #333;
    color: #d1d4d1;
    text-align: center;
    padding-top: 10px;
    margin: 0 auto;
    padding-bottom: 10px;
    box-shadow: 0px 0px 20px gray;
}

#nav{
    width: auto;
    height: 40px;
    margin: 0 auto;
    background-color:#232823;
    border: 1px solid #333333;
    box-shadow: 0px 22px 22px gray;
    font-size: 16px;
}


form input[type ="submit"],
form input[type ="button"],
button{
    margin-top:20px;
    padding: 10px;
    padding-top: 5px;
    background-color:gold;
    color:black;
    border: 1px solid black;
}

form{
    display: block;
    text-align: center;
    
    
}

#content{
    width:1212px;
    min-height: 480px;
    margin: 0 auto;
    margin-bottom: 30px;
    margin-top: 30px;    
    text-align: center;
}


form{
    width: 40%;
    position: relative;
    left:270px;
    

}

form input{
    display:block;
    padding: 5px;
    padding-left: 0px;
    position: relative;
    left:290px;
    top:-27px;
}
form label{
    display:block;
    padding: 5px;
    padding-left: 0px;  
    
}

select{
	cursor: pointer;
  height: 42px;
	background: #f0f0f0;
	color: #7b7b7b;
	font-size: 1em;
	color:#232823;
	font-family: 'Quicksand', sans-serif;
	border:2px solid rgba(0,0,0,0.2);
  position: relative;
  transition: all 0.25s ease;
}
 
select:hover{
	background:gold;
  transition:50ms;
}



</style>

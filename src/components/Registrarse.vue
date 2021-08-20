<template>
    <div class="content">
        <h1>Registrarse</h1>
    <form @submit.prevent="Registrado">       
        
        <div class="form-group">
            <label for="nombre">Nombre</label>
            <input v-model="nombre" type="text" class="form-control">
        </div>

        <div class="form-group">
            <label for="apellido">Apellido</label>
            <input v-model="apellido" type="text" class="form-control">
        </div>

        <div class="form-group">
            <label for="usuario">Usuario</label>
            <input v-model="usuario" type="text" class="form-control">
        </div>

        <div class="form-group">
            <label for="password">Contraseña</label>
            <input v-model="password" type="password" class="form-control">
        </div>

        <div class="form-group">
            <label for="confirmPassword">Confirmar</label>
            <input v-model="confirmPassword" type="password" class="form-control">
        </div>

            <input type="submit" value="Registrarse">
    </form>  
    </div>

</template>

<script>
export default {
  name: 'Registrarse',
  data() {
      return {
          nombre: "",
          apellido: "",
          usuario: "",
          password: "",
          confirmPassword: ""
      }
  },
  methods: {   
      Registrado(){  
        const data = {
            nombre: this.nombre,
            apellido: this.apellido,
            usuario: this.usuario,
            password: this.password,
            confirmPassword: this.confirmPassword        
      };

      //users.push()    
        
    }
  }
};
</script>

<style scoped>

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

</style>
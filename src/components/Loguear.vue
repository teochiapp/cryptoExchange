<template>
    <div class="content">
        <h1>Login</h1>
    <form action="">

        <div class="form-group">
            <label for="user_id">Id</label>
            <input v-model="user_id" type="text" class="form-control">
        </div>

        <div class="form-group">
            <label for="password">Contraseña</label>
            <input v-model="password" type="password" class="form-control">
        </div>

            <input type="submit" value="Ingresar"  @click="Ingreso">

            <div class="btn-register">
                <button id="btnRegistrarse" type="button" @click="CerrarCesion">Cerrar Sesión</button>
        </div>
    </form>
    </div>

</template>

<script>


var users = {
    user_id: 'teo',
    password: ''
};

export default {
  name: 'Login',
  data() {
      return {
          apiClient:null,
          user_id: "",
          password: "",
      }
  },
  methods: {
      RedirectRegistrarse(){
        location.href="http://localhost:8080/registrarse"
      },

      Ingreso(){
        let data = {
            user_id: this.user_id,
            password: this.password
        }

        if (this.user_id === users.user_id && this.password === users.password){
            location.href = "http://localhost:8080";
            alert("Has accedido correctamente");
            //redirect home
            //this.$store.state.logueado = true;
            localStorage.setItem("user_id", this.user_id);
        }

        else{
            alert("Contraseña incorrecta");
        }

      },
      CerrarCesion(){
        localStorage.removeItem("user_id", this.user_id);       
        alert("Ha cerrado sesión correctamente")
      }

    }
}
</script>

<style scoped>

#btnRegistrarse{
    position:relative;
    left:176px;
    top:-79px;
}

#userLogged{
    position:relative;
    width:150px;
    left: 1160px;
    color:antiquewhite;
    top:-410px;
    font-size: 18px;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

}

</style>
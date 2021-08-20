<template>  
    <div>
      <h1>Historial de movimientos</h1>      
      <div id="historial" v-for="operacion in operaciones" :key="operacion._id">      

        <ul>
          <hr>

          <div id="editButtons">
            <button @click="borrarTransaccion(operacion._id)">Borrar</button>
            <button @click="editarTransaccion(operacion)">Editar</button>
          </div>

          <li>
            {{operacion.crypto_amount}} {{operacion.crypto_code}}
          </li>  

          <li>
            {{operacion.action}}
          </li>

          <li>
            {{operacion.money}}
          </li>

          <li>
            Fecha: {{operacion.datetime}}
          </li>      

          <li>
            Id de la transacción: {{operacion._id}}
          </li>      

        </ul>
      </div>
      
    </div>
</template>

<script>
import axios from 'axios'

const apiClient = axios.create({
        baseURL: 'https://laboratorio3-f36a.restdb.io/rest',
        headers: {'x-apikey': '60eb09146661365596af552f'}})
export default {
  name: 'Historial',
  data() {
      return {
        operaciones: [],   
      }
  },

  created(){
   
  },
  mounted(){    
    this.getHistorial();
  },
  methods: {    
    getHistorial(){      
      let user = localStorage.getItem("user_id");      
      apiClient.get(`/transactions?q={"user_id": "${user}"}`).then((response) => {
        this.operaciones = response.data; 
      });
    },

    borrarTransaccion(id){
      apiClient.delete('/transactions/' + id).then((response) => {
        alert("La transacción se ha borrado correctamente")        
      });
    },
    editarTransaccion(data){
      console.log(data);
      location.href="http://localhost:8080/editartransaccion";

    }

  }

}
</script>

<style scoped>

ul li{
  text-align:left;
}

#editButtons{
  position: relative;
  top:32px;
  
}

#historial{
  padding-top:10px;
}

</style>
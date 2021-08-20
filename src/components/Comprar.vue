
<template>
  <div>
      <h2>Hace tu compra de criptomonedas</h2>

      <div id="groupbox"> 
        <label>Selecciona la opción deseada:</label>
        <select name="criptomonedas" v-model="crypto_code">
            <option value="btc">Bitcoin</option>
            <option value="eth">Ethereum</option>
            <option value="usdt">Tether</option>
            
      </select>      

      <span>Seleccionado: {{ crypto_code }}</span>
      </div>

      <div id="groupbox"> 
        <label>Indica la cantidad de {{crypto_code}} a comprar:</label>
        <input v-model='crypto_amount' type="decimal">
      </div>

      <div id="groupbox">
        <label for="cantidad">Ingrese cuanto desea comprar:(ARS)</label>
        <input v-model='money' type="number">
      </div>

      <button id="btnComprar" value="comprar" @click="Compra">Comprar</button>

      <button id="btnHistorial" @click="getHistorial">Ver Historial</button>

  </div>
</template>

<script>
import axios from 'axios'

const apiClient = axios.create({
        baseURL: 'https://laboratorio3-f36a.restdb.io/rest',
        headers: {'x-apikey': '60eb09146661365596af552f'}})

export default {
  name: 'Comprar',
   data() {
      return {        
        money: "",
        crypto_code: "",
        crypto_amount:"",
        datetime: "19-07-2021 20:50",
        action: "",
        apiClient: null,
        fechaActual: "",        
      }
  },
  mounted(){

  },
  methods: {     
      Compra(){  
          let purchaseData = {              
              user_id: localStorage.getItem("user_id"),
              action: "purchase",
              crypto_code:this.crypto_code,
              crypto_amount: this.crypto_amount,
              money: this.money,
              datetime: this.getFechaActual(),              
          }

        if (localStorage.user_id == null){
          alert("Primero debe ingresar")
        }

        else{
          console.log("Todo gud")
          if (this.crypto_code == "Bitcoin"){
            this.crypto_code = "btc";
            console.log(this.crypto_code);
          }

          if (this.crypto_code == "Ethereum"){
            this.crypto_code = "eth";
            console.log(this.crypto_code);
          }

          if (this.crypto_code == "Tether"){
            this.crypto_code = "usdt";
            console.log(this.crypto_code);
            
          }
          
          alert("Ha comprado " + this.crypto_amount + " " + this.crypto_code + " por " + this.money);
          this.postApi(purchaseData);    
           
        }
          
        },

      postApi(purchaseData){
        console.log(purchaseData);
        return apiClient.post('/transactions', purchaseData)
      },

      getFechaActual(){
        const current = new Date();

        const day =  current.getDate() + '-';
        const month = (current.getMonth() + 1) + '-';
        const year = current.getFullYear();
        const hour = current.getHours() + ":";
        const minutes = current.getMinutes();

        const day2 = ((current.getDate() < 10) ? `0${current.getDate()}`: current.getDate());

        const fechaActual = day + month + year + ' ' + hour + minutes;

        return fechaActual;
      },

      getHistorial(){
        location.href="http://localhost:8080/historial"
      }




  } 
  
  
}

</script>


<style scoped>

#groupbox{
    margin: 16px;
    padding-top: 10px;
}

#btnHistorial{
  position: relative;
  left: -40px;
  top: 140px; 
  
}

#btnComprar{
  position: relative;
  left: 45px;
  top: 10px; 
  
}



</style>
<template>
  <div>
    
    <table>
      <caption>
        <h3>Resultado de nuestras inversiones</h3>
      </caption>
      <thead>
        <tr>
          <th scope="col">Criptomoneda</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Resultados (ARS)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Bitcoin</th>
          <td>{{cantidadBtc}}</td>
          <td>${{gananciaBtc}}</td>
        </tr>
        <tr>
          <th scope="row">Ethereum</th>
          <td>{{cantidadEth}}</td>
          <td>${{gananciaEth}}</td>
        </tr>

        <tr>
          <th scope="row">Tether</th>
          <td>{{cantidadUsdt}}</td>
          <td>${{gananciaUsdt}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colspan="2">Ganancias Totales $ARS</th>
          <td colspan="2">${{ gananciaBtc + gananciaEth + gananciaUsdt }}</td>
        </tr>
      </tfoot>
    </table>

    <p>
      *Estos datos corresponden al precio de venta final incluyendo las
      comisiones de transferencia y trade      
    </p>

  

    
  </div>
</template>

<script>
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://laboratorio3-f36a.restdb.io/rest",
  headers: { "x-apikey": "60eb09146661365596af552f" }
});
/*
Primero calcular diferencia de money entre compra y venta de btc... Listo
Segundo calcular el stock con la Api de criptoYa...


*/

export default {
  name: "Resultados",
  data() {
    return {
      operaciones: [],
      DiferenciaEth: 0,
      DiferenciaBtc: 0,
      DiferenciaUsdt: 0,
      cantidadBtc: 0,
      cantidadEth: 0,
      cantidadUsdt: 0, 
      gananciaBtc: 0,
      gananciaEth: 0,
      gananciaUsdt: 0, 
    };
  },

  created() {
    this.getOperaciones();
    
  },
  mounted() {
    
  },
  methods: {
    getOperaciones() {
      let user = localStorage.getItem("user_id");     
      apiClient.get(`/transactions?q={"user_id": "${user}"}`).then((response) => {
        this.operaciones = response.data;
        this.getMoneyAmount(this.operaciones);
        
      });
    },
    getMoneyAmount(operaciones) {
      for (let i = 0; i < operaciones.length; i++) {
        if (operaciones[i].action === "purchase") {
          if (operaciones[i].crypto_code === "btc"){
            this.DiferenciaBtc += parseFloat(operaciones[i].money);
            this.cantidadBtc += parseFloat(operaciones[i].crypto_amount)
          }

          if (operaciones[i].crypto_code === "eth"){
            this.DiferenciaEth += parseFloat(operaciones[i].money);
            this.cantidadEth += parseFloat(operaciones[i].crypto_amount)
          }

          if (operaciones[i].crypto_code === "usdt"){
            this.DiferenciaUsdt += parseFloat(operaciones[i].money);
            this.cantidadUsdt += parseFloat(operaciones[i].crypto_amount)
          }
        }

        if (operaciones[i].action === "sale") {
          if (operaciones[i].crypto_code === "btc"){
            this.DiferenciaBtc -= parseFloat(operaciones[i].money);
            this.cantidadBtc -= parseFloat(operaciones[i].crypto_amount)
          }

          if (operaciones[i].crypto_code === "eth"){
            this.DiferenciaEth -= parseFloat(operaciones[i].money);
            this.cantidadEth -= parseFloat(operaciones[i].crypto_amount)
          }

          if (operaciones[i].crypto_code === "usdt"){
            this.DiferenciaUsdt -= parseFloat(operaciones[i].money);
            this.cantidadUsdt -= parseFloat(operaciones[i].crypto_amount)
          }
        }        

      }
      
      // console.log(this.DiferenciaBtc, this.DiferenciaEth, this.DiferenciaUsdt);
      // console.log(this.cantidadBtc, this.cantidadEth, this.cantidadUsdt);

      this.getGananciaBtc(this.cantidadBtc, this.DiferenciaBtc);
      this.getGananciaEth(this.cantidadEth, this.DiferenciaEth);
      this.getGananciaUsdt(this.cantidadUsdt, this.DiferenciaUsdt);
      
    },
    getGananciaBtc(cantidad, diferencia) {
      let gananciaBtc = 0;
      axios
        .get("https://criptoya.com/api/argenbtc/btc/ars/1")
        .then(response => {
          this.gananciaBtc = response.data.totalBid - diferencia;
          console.log(this.gananciaBtc);
        });
    },
    getGananciaEth(cantidad, diferencia) {
      let gananciaEth = 0;
      axios
        .get("https://criptoya.com/api/buenbit/eth/ars/1")
        .then(response => {
        this.gananciaEth = response.data.totalBid  - diferencia;
        console.log(this.gananciaEth);
      });
    },
    getGananciaUsdt(cantidad, diferencia) {
      let gananciaUsdt = 0;
      axios
        .get("https://criptoya.com/api/criptofacil/usdt/ars/1")
        .then(response => {         
          this.gananciaUsdt = response.data.totalBid  - diferencia;
          console.log(this.gananciaUsdt);       
        });
    },
  }
};
</script>

<style scoped>

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid gold;
}

thead th:nth-child(1) {
  width: 40%;
}

thead th:nth-child(2) {
  width: 20%;
}

thead th:nth-child(3) {
  width: 40%;
}


th, td {
  padding: 20px;
}

html {
  font-family: 'helvetica neue', helvetica, arial, sans-serif;
}

thead th, tfoot th {
  font-family:'Trebuchet MS', 'Lucida Sans Unicode';
}

th {
  letter-spacing: 2px;
}

td {
  letter-spacing: 1px;
}

tbody td {
  text-align: center;
}

tfoot th {
  text-align: right;
}

caption {
  font-family:Arial, Helvetica, sans-serif;
  font-size: 23px;
  padding: 10px;
  letter-spacing: 1px;
}

thead, tfoot {  
  color: white;
  text-shadow: 1px 1px 1px black;
}

thead th, tfoot th, tfoot td {
  background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5));
  border: 3px solid gold;
}

tbody tr:nth-child(odd) {
  background-color:antiquewhite;
}

tbody tr:nth-child(even) {
  background-color:gold;
}


table {
  background-color:black;
}

</style>

<template>
  <div>

    <table>
      <caption>
        <h3>Tu Cartera</h3>
      </caption>
      <thead>
        <tr>
          <th scope="col">Criptomoneda</th>
          <th scope="col">Cantidad</th>
          <th scope="col">$ARS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Bitcoin</th>
          <td>{{cantidadBtc}}</td>
          <td>${{equivalenciaBtc}}</td>
        </tr>
        <tr>
          <th scope="row">Ethereum</th>
          <td>{{cantidadEth}}</td>
          <td>${{equivalenciaEth}}</td>
        </tr>

        <tr>
          <th scope="row">Tether</th>
          <td>{{cantidadUsdt}}</td>
          <td>${{equivalenciaUsdt}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colspan="2">Capital Total $ARS</th>
          <td colspan="2">${{ equivalenciaUsdt + equivalenciaBtc + equivalenciaEth }}</td>
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

export default {
  name: "EstadoActual",
  data() {
    return {
      operaciones: [],
      cantidadEth: 0,
      cantidadBtc: 0,
      cantidadUsdt: 0,
      equivalenciaBtc: 0,
      equivalenciaEth: 0,
      equivalenciaUsdt: 0,     
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
        this.getCriptoAmount(this.operaciones);         
      });
    },
    getCriptoAmount(operaciones) {
      for (let i = 0; i < operaciones.length; i++) {
        if (operaciones[i].action === "purchase") {
          if (operaciones[i].crypto_code === "btc")
            this.cantidadBtc += parseFloat(operaciones[i].crypto_amount);

          if (operaciones[i].crypto_code === "eth")
            this.cantidadEth += parseFloat(operaciones[i].crypto_amount);

          if (operaciones[i].crypto_code === "usdt")
            this.cantidadUsdt += parseFloat(operaciones[i].crypto_amount);
        }

        if (operaciones[i].action === "sale") {
          if (operaciones[i].crypto_code === "btc")
            this.cantidadBtc -= parseFloat(operaciones[i].crypto_amount);

          if (operaciones[i].crypto_code === "eth")
            this.cantidadEth -= parseFloat(operaciones[i].crypto_amount);

          if (operaciones[i].crypto_code === "usdt")
            this.cantidadUsdt -= parseFloat(operaciones[i].crypto_amount);
        }
      }

      this.getCapitalBtc(this.cantidadBtc);
      this.getCapitalEth(this.cantidadEth);
      this.getCapitalUsdt(this.cantidadUsdt);
      
    },
    getCapitalBtc(cantidad) {
      let equivalenciaBtc = 0;
      axios
        .get("https://criptoya.com/api/argenbtc/btc/ars/1")
        .then(response => {
          this.equivalenciaBtc = response.data.totalBid * cantidad;
        });
    },
    getCapitalEth(cantidad) {
      let equivalenciaEth = 0;
      axios
      .get("https://criptoya.com/api/buenbit/eth/ars/1")
      .then(response => {
        this.equivalenciaEth = response.data.totalBid * cantidad;
      });
    },
    getCapitalUsdt(cantidad) {
      let equivalenciaUsdt = 0;
      axios
        .get("https://criptoya.com/api/criptofacil/usdt/ars/1")
        .then(response => {         
          this.equivalenciaUsdt = response.data.totalBid * cantidad;          
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

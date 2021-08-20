<template>
  <div id="editarTransaccion">
        <label>Cantidad de criptomoneda</label>
        <input type="decimal">

        <p></p>

        <label>Inversión ($ARS)</label>
        <input type="number">

        <p></p>

        
        <label>Acción</label>
        <select name="action">
          <option value="purchase">Compra</option>
          <option value="sale">Venta</option>
          
        </select>
        <p></p>


        <label>Fecha</label>
        <input type="decimal">

        <p></p>

        <button>Guardar</button>
  </div>
</template>

<script>
export default {
  name: 'EditarTransaccion'
}
</script>

<style scoped>

#editarTransaccion{
    margin-top:20px;
}

input{    
    min-height:15px;
    max-width:340px;
}

</style>
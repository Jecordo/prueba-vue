<template>
  <div class="sidebar">
    <h2>Barra Lateral</h2>
    <ul>
      <li>
        <router-link to="/ContadorPrueba">Contador</router-link>
      </li>
      <li>  
        <router-link to="/ListaDeTareas">Lista de Tareas</router-link>
      </li>
      <li>  
        <router-link to="/registrar">Registrar</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
</script>

<style>
.sidebar {
  width: 200px;
  background: #ffffff;
  padding: 20px;
}
</style>
<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h2>Nombre: {{ nombre }}</h2>
    <h2>Correo: {{ correo }}</h2>
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
import { useRegistroStore } from '@/modules/registro/stores/registroStore';
import { ref, watch } from 'vue';

const registro = useRegistroStore()

const nombre = ref(registro.nombre);
const correo = ref(registro.correo.value);

watch(() => registro.nombre, (newValue) =>{
  nombre.value = newValue;
})
watch(() => registro.correo, (newValue) =>{
  correo.value = newValue;
})

</script>

<style>
.sidebar {
  width: 250px;
  background: #f0f0f0;
  padding: 30px;
}
</style>
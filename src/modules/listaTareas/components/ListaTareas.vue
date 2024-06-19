<template>
  <div>
    <h2>Lista de tareas</h2>
    <input type="text" v-model="newTarea" @keyup.enter="aggTareas">
    <ul>
      <li v-for="(tarea, index) in tareas" :key="index">
        {{tarea}}
        <button @click="borraTarea">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const tareas = ref([]);
const newTarea = ref('');

const aggTareas = () => {
  tareas.value.push(newTarea.value);
  newTarea.value = '';
} 

const borraTarea = (index) =>{
  tareas.value.splice(index, 1);
}

</script>


<style >
</style>
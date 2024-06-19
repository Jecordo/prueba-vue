

<template>
  <h1>Hola</h1>
  <h2>{{contador}}</h2>
  <button @click="incrementar">incrementar</button>
  <button @click="disminuir">disminuir</button>
</template>


<script setup>
import {ref} from "vue";

const contador = ref(0);

const incrementar = () => {
  contador.value += 1
}
const disminuir = () => {
  contador.value -= 1
}
</script>


<style scoped>

</style>

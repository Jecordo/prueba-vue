import { defineStore } from "pinia";
import { ref } from "vue";


export const useRegistroStore = defineStore('registro',() => {
  const nombre = ref('');
  const correo = ref('');

  const guardarregistro = (nombreFormu, correoFormu) => {
    nombre.value = nombreFormu;
    correo.value = correoFormu;
  }

  return {nombre, correo, guardarregistro}
})
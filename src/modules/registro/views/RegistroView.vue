<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onsubmit">
      <div class="form">
        <label for="nombre">Nombre:</label>
        <Field type="text" id="nombre" name="nombre" v-model="nombre" placeholder="Ingrese nombre"/>
        <ErrorMessage name="nombre"></ErrorMessage>
      </div>
      <div class="form">
        <label for="correo">Correo:</label>
        <Field type="email" id="correo" name="correo" v-model="correo" placeholder="Ingrese correo"/>
        <ErrorMessage name="correo"></ErrorMessage>
      </div>
      <div class="form">
        <button type="submit">Registrar</button>
      </div>
    </Form>
  </div>
</template>

<script setup>
import {Form, Field, ErrorMessage} from 'vee-validate';
import { schema } from '../schemas/validationSchema';
import { useRegistroStore } from '../stores/registroStore';
import { ref } from 'vue';

const registrarStore = useRegistroStore();

const nombre = ref('');
const correo = ref('');

const onsubmit = () =>{
  registrarStore.guardarregistro(nombre.value, correo.value)
  console.log('se encio')
}

</script>

<style scoped>
.form {
  margin-top: 20px;
}
</style>
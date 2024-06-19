<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onsubmit">
      <div class="form">
        <label for="nombre">Nombre:</label>
        <Field type="text" id="nombre" name="nombre" placeholder="Ingrese nombre"/>
        <ErrorMessage name="nombre"></ErrorMessage>
      </div>
      <div class="form">
        <label for="correo">Correo:</label>
        <Field type="email" id="correo" name="correo" placeholder="Ingrese correo"/>
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

const onsubmit = () =>{
  console.log('se encio')
}

</script>

<style scoped>
.form {
  margin-top: 20px;
}
</style>
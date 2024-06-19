<template>
<div class="container">
  <SidebarLateral></SidebarLateral>
  <div class="content">
      <router-view></router-view>
  </div>
</div>
</template>

<script setup>
import SidebarLateral from '../components/SidebarLateral.vue';
</script>


<style>
.container {
  display: flex;
}

.content{
  display: 1;
  padding: 20px;
}
</style>
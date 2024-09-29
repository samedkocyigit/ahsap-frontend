<template>
  <v-app>
    <NavBar v-if="showNavbar" />
    <router-view />
  </v-app>
</template>

<script setup>
import NavBar from "./components/layouts/NavBar.vue";
import { ref,watchEffect  } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showNavbar = ref(true)

watchEffect(() => {
  showNavbar.value = route.name !== 'AdminDashboard'
})
</script>

<style>
.container {
  max-width: calc(1440px - 130px);
  padding: 0 20px;
  width: 100%;
  margin: auto;
}
.btn {
  background: transparent;
  border: none;
  transition: 0.3s;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 100%;
}
span.icon {
  display: flex;
  align-items: center;
}
</style>

<!-- src/components/SideBar.vue -->
<template>
    <v-navigation-drawer
      app
      v-model="drawer"
      permanent
      class="side-bar"
    >
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="navigate(item.route)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const drawer = ref(true)
  const router = useRouter()
  
  const items = [
    { title: 'Ürün Ekle', route: '/admin-dashboard/add-product' },
    { title: 'Ürün Sil', route: '/admin-dashboard/delete-product' },
    { title: 'Ürün Güncelle', route: '/admin-dashboard/update-product' },
    { title: 'Ürünleri Listele', route: '/admin-dashboard/list-products' }
  ]
  
  const navigate = (route) => {
    router.push(route)
  }
  </script>
  
  <style scoped>
  .side-bar {
    width: 250px;
  }
  
  .v-list-item {
    cursor: pointer;
  }
  </style>
  
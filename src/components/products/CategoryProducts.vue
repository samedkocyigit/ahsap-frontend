<template>
  <section class="catagory-products">
    <div class="container">
      <CatagoryHeader  :tabs="tabs" />
      <div class="products">
        <SingleProduct
          v-for="(product, i) in products.data"
          :key="i"
          :product="product"
        />
      </div>
      <button class="btn">SEE ALL</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import CatagoryHeader from "./CategoryHeader.vue";
import SingleProduct from "./SingleProduct.vue";
import { getProductsApi } from '@/services/product.service'

const tabs = ref([
  "Yeni Gelenler",
  "Seçili Ürünler",
  "Çok Satanlar",
]);

const products = ref([]) // Ürünler için bir dizi ref oluşturun
const loading = ref(true)
//Backend'den product nesnesini almak için bir işlev veya API çağrısı yapın
async function fetchProduct() {
  if (products.value.length === 0) {
    try {
      const response = await getProductsApi()
      console.log("fonksiyon içi oluştu mu ",response.data.data)

      if (response.status !== 200) {
        // HTTP durum kodunu kontrol et
        throw new Error('Fetch işlemi başarısız.')
      }
      products.value = response.data.data
      console.log("hey hey ",products.value)
    } catch (error) {
      console.error('Hata:', error.message)
    } finally {
      loading.value = false // İşlem tamamlandığında loading değerini false olarak ayarla
    }
  }
}
// Sayfa yüklendiğinde backend'den product nesnesini almak için fetchProduct işlevini çağırabilirsiniz
fetchProduct()

</script>

<style scoped>
.catagory-products {
  margin-bottom: 100px;
}
.catagory-products .btn {
  height: 48px;
  background: #f8f8f8;
  border: 2px solid #f8f8f8;
  max-width: 100%;
  margin-top: 18px;
}
.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
}
@media (max-width: 969px) {
  .products {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 400px) {
  .products {
    grid-template-columns: 1fr;
  }
}
</style>

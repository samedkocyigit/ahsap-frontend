<template>
  <div class="single-product">
    <div class="img-container">
      <LzyImg :src="`../public/images/products/${photoName}`" alt="" />
      <!-- <div v-if="product.s" class="sale">-50%</div> -->
    </div>
    <div class="product-content">
      <h6 class="name">
        {{ product.name }}
      </h6>
      <div class="rating">
        <span class="price">
          {{ product.price }}
        </span>
        <span class="icon">
          <!-- <LzyImg :src="getImage(product.rating)" alt="" /> -->
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps,ref,onMounted } from "vue";
import LzyImg from "@/commons/atoms/LazyImg.vue"
const props =defineProps({
  product: {
    type: Object,
  },
});

const photoName = ref('');
onMounted(()=>{
  photoName.value = props.product.photos[0];
  console.log("ssss",photoName)
})

</script>

<style scoped>
.single-product .img-container {
  position: relative;
}
.single-product .img-container .sale {
  position: absolute;
  top: 0;
  left: 0;
  padding: 9px;
  background: #e91e63;
  right: auto;
  font-weight: 700;
  font-size: 12px;
  line-height: 13px;
  text-align: center;

  /* white */

  color: #ffffff;
}
.single-product .product-content {
  padding: 10px 0px;
}
.single-product .product-content h6 {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  opacity: 0.6;
}
.single-product .product-content .rating {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
}
.single-product .rating .price {
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
}
</style>

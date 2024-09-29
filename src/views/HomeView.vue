<template>
  <div>
    <Banner />
    <CatagoryProducts/>
    <Featured />
    <Subscribe />
    <Blogs />
    <Footer />
  </div>
</template>
<script setup>
import BannerSlider from "@/components/sliders/BannerSlider.vue";
import CatagoryProducts from "@/components/products/CategoryProducts.vue";
import { ref } from "vue";
import Featured from "@/components/Featured.vue";
import Subscribe from "@/components/subscribe.vue";
import Blogs from "@/components/Blogs.vue";
import Footer from "@/components/layouts/Footer.vue";

</script>

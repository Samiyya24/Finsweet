<script setup>
import { reactive } from "vue";
import FeaturesCard from "./Features-card.vue";
const data = reactive([
  {
    id: 1,
    img: "/icons/qalam.svg",
    title: "Uses Client First",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    id: 2,
    img: "/icons/soat.svg",
    title: "Two Free Revision Round",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    id: 3,
    img: "/icons/sms.svg",
    title: "Template Customization",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    id: 4,
    img: "/icons/qalam.svg",
    title: "24/7 Support",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    id: 5,
    img: "/icons/soat.svg",
    title: "Quick Delivery",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    id: 6,
    img: "/icons/sms.svg",
    title: "Hands-on approach",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
]);
</script>
<template>
  <section class="bg-[#F4F6FC] md:py-32 py-5">
    <div class="container text-center">
      <p class="font-medium md:mb-3">Features</p>
      <h2
        class="md:text-5xl text-2xl font-semibold text-primary md:leading-[64px] max-w-[600px] mx-auto md:mb-12 mb-5"
      >
        Design that solves problems, one product at a time
      </h2>

      <div class="md:grid lg:grid-cols-3 md:grid-cols-2 gap-8 flex flex-col">
        <div
          v-for="(product, index) in data"
          :key="index"
          
        >
          <FeaturesCard :product="product" class="hover:shadow-[0px_0px_9px_0px_#bee3f8] h-full"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>

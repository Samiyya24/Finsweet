<script setup>
import Navbar from "../components/Navbar.vue";
import PlansCard from "../components/PlansCard.vue";
import Accardion from "../components/Accardion.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Navbar />
  <PlansCard />
  <div class="container lg:flex items-start gap-20 md:text-center">
    <div class="max-md:text-center text-left max-md:mb-10 md:mb-10">
      <h3
        class="lg:text-5xl text-4xl font-semibold mb-4 leading-[94px] text-primary"
      >
        Frequently asked questions
      </h3>
      <router-link class="text-[#2405F2] bg-red-500"
        >Contact us For More Info</router-link
      >
    </div>
    <Accardion />
  </div>
  <Footer />
</template>

<style scoped></style>

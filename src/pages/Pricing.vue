<script setup>
import Navbar from "../components/Navbar.vue";
import PlansCard from "../components/PlansCard.vue";
import Accardion from "../components/Accardion.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Navbar />
  <PlansCard />
  <div class="container md:flex items-start gap-32">
    <div class="max-md:text-center max-md:mb-10">
      <h3 class="text-5xl font-semibold mb-4 leading-[64px] text-primary">
        Frequently asked questions
      </h3>
      <router-link class="text-[#2405F2] "
        >Contact us For More Info</router-link
      >
    </div>
    <Accardion />
  </div>
  <Footer />
</template>

<style scoped></style>

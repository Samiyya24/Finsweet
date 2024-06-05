<script setup>
import { reactive } from "vue";

const data = reactive([
  { img: "/img/man1.png", name: "John Smith", job: "CEO" },
  { img: "/img/man2.png", name: "Simon Adams", job: "CTO" },
  { img: "/img/man3.png", name: "Paul Jones", job: "Design Lead" },
  { img: "/img/man4.png", name: "Sara Hardin", job: "Project Manager" },
]);
</script>
<template>
  <div class="bg-[#F4F6FC] py-28">
    <div class="container text-primary text-center">
      <h2 class="md:text-5xl text-3xl font-semibold mb-12">Meet our team</h2>
      <div class="md:grid grid-cols-4 gap-8">
        <div
          class="bg-white hover:shadow-[0_10px_20px_rgba(8,_112,_184,_0.1)] py-12 px-16 max-md:mb-5"
          v-for="(item, index) in data"
          :key="index"
        >
          <img class="mb-8 mx-auto" :src="item.img" alt="" />
          <h3>{{ item.name }}</h3>
          <span>{{ item.job }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

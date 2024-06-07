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
      <div class="md:grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        <div
          class="bg-white group hover:shadow-[0_10px_20px_rgba(8,_112,_184,_0.1)] py-12 px-16 max-md:mb-5"
          v-for="(item, index) in data"
          :key="index"
        >
          <div class="relative">
            <img class="mb-8 mx-auto" :src="item.img" alt="" />
            <img
              class="mb-8 mx-auto absolute top-0 md:right-2 right-8 hidden group-hover:block"
              src="/icons/aboutHover.svg"
              alt=""
            />
            <div
              class="absolute group-hover:flex hidden p-1 gap-3 bottom-5 md:right-12 right-[75px]"
            >
              <img src="/icons/facebook.svg" alt="" />
              <img src="/icons/twitter.svg" alt="" />
              <img src="/icons/linkedin.svg" alt="" />
            </div>
          </div>
          <h3>{{ item.name }}</h3>
          <span>{{ item.job }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

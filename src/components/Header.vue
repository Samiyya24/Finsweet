<script setup>
import Navbar from "./Navbar.vue";
</script>
<template>
  <div class="bg-[#1C1E53]">
    <Navbar />
    <div
      class="container pt-24 text-white lg:flex max-md:text-center lg:py-32 gap-x-16 justify-between"
    >
      <div
        class="max-lg:mb-10 md:text-center md:flex lg:text-left md:flex-col md:items-center justify-center"
      >
        <h1
          class="lg:text-[54px] md:text-3xl lg:leading-[60px] max-md:text-3xl mb-6 max-w-lg font-semibold"
        >
          Building stellar websites for early startups
        </h1>
        <p class="font-medium text-[#BBBBCB] mb-12 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <div class="flex gap-x-10 max-lg:justify-center items-center">
          <router-link
            class="hover:bg-[#FCD980] border max-md:text-xs border-[#FCD980] hover:text-[#1B1C2B] text-[#FCD980] md:py-4 py-2 md:px-14 px-5 rounded-full cursor-pointer"
            to="/works"
          >
            View our work</router-link
          >
          <router-link
            class="flex items-center gap-x-4 cursor-pointer"
            to="/pricing"
            >View Pricing
            <svg
              class="animate-pulse"
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="m359.873 121.377l-22.627 22.627l95.997 95.997H16v32.001h417.24l-95.994 95.994l22.627 22.627L494.498 256z"
              />
            </svg>
          </router-link>
        </div>
      </div>
      <img src="/img/intro.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

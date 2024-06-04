<script setup>
import Navbar from "./Navbar.vue";
</script>
<template>
  <div class="bg-[#1C1E53]">
    <Navbar />
    <div class="container text-white flex py-32 gap-x-16">
      <div>
        <h1 class="text-[54px] mb-6 max-w-">
          Building stellar websites for early startups
        </h1>
        <p class="font-medium text-[#BBBBCB] mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <div class="flex gap-x-10 items-center">
          <button class="bg-[#FCD980] text-black py-4 px-14 rounded-full">
            View our work
          </button>
          <button class="flex items-center">
            View Pricing
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="m359.873 121.377l-22.627 22.627l95.997 95.997H16v32.001h417.24l-95.994 95.994l22.627 22.627L494.498 256z"
              />
            </svg>
          </button>
        </div>
      </div>
      <img src="/img/intro.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

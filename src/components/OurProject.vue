<script setup></script>
<template>
  <div class="container">
    <div class="flex justify-between py-14">
      <h2 class="text-5xl font-semibold text-[#282938]">View our projects</h2>
      <router-link
        class="flex items-center gap-x-4 text-[#282938] font-medium cursor-pointer"
        to="/pricing"
        >View More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 512 512"
        >
          <path
            fill="#282938"
            d="m359.873 121.377l-22.627 22.627l95.997 95.997H16v32.001h417.24l-95.994 95.994l22.627 22.627L494.498 256z"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

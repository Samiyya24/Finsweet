<script setup></script>
<template>
  <header>
    <div class="container text-white flex items-center justify-between py-10">
      <img src="/img/Logo.svg" alt="" />
      <nav class="flex items-center gap-x-10">
        <div class="flex gap-x-10">
          <router-link
            class="font-medium text-[#BBBBCB] hover:text-white cursor-pointer"
            to="/Home"
            >Home</router-link
          >
          <router-link
            class="font-medium text-[#BBBBCB] hover:text-white cursor-pointer"
            to="/About us"
            >About us</router-link
          >
          <router-link
            class="font-medium text-[#BBBBCB] hover:text-white cursor-pointer"
            to="/Pricing"
            >Pricing</router-link
          >
          <router-link
            class="font-medium text-[#BBBBCB] hover:text-white cursor-pointer"
            to="/Work"
            >Work</router-link
          >
          <router-link
            class="font-medium text-[#BBBBCB] hover:text-white cursor-pointer"
            to="/Blog"
            >Blog</router-link
          >
        </div>
        <router-link
          class="border-white/20 hover:border-white border-2 py-4 px-12 rounded-full cursor-pointer" to="/contact"
        >
          Contact us
        </router-link>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>

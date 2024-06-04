<script setup></script>
<template>
  <header>
    <div class="container text-white flex items-center justify-between py-10">
      <img src="/img/Logo.svg" alt="" />
      <nav class="flex items-center gap-x-10">
        <div class="max-md:hidden flex gap-x-10">
          <router-link
            class="anime font-medium text-[#BBBBCB] hover:text-white cursor-pointer"
            to="/Home"
            >Home</router-link
          >
          <router-link
            class="anime font-medium text-[#BBBBCB] hover:text-white cursor-pointer"
            to="/About us"
            >About us</router-link
          >
          <router-link
            class="anime font-medium text-[#BBBBCB] hover:text-white cursor-pointer"
            to="/Pricing"
            >Pricing</router-link
          >
          <router-link
            class="anime font-medium text-[#BBBBCB] hover:text-white cursor-pointer"
            to="/Work"
            >Work</router-link
          >
          <router-link
            class="anime font-medium text-[#BBBBCB] hover:text-white cursor-pointer"
            to="/Blog"
            >Blog</router-link
          >
        </div>
        <router-link
          class="border-white/20 hidden md:block hover:border-white border-2 py-4 px-12 rounded-full cursor-pointer"
          to="/contact"
        >
          Contact us
        </router-link>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.anime {
  position: relative;
  color: #bbbbcb;
  text-decoration: none;
}

.anime:hover {
  color: #fff;
}

.anime::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.anime:hover::before {
  transform: scaleX(1);
}
</style>

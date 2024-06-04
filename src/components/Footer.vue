<script setup></script>
<template>
  <footer class="bg-[#1C1E53] text-white py-24">
    <div class="container">
      <div class="md:flex gap-40">
        <div class="max-w-[400px] max-md:mb-5">
          <img class="mb-6" src="/img/Logo.svg" alt="Logo" />
          <span class="text-[#F4F6FC]/80"
            >We are always open to discuss your project and improve your online
            presence.</span
          >
        </div>
        <div >
          <h2 class="text-5xl font-semibold mb-4">Lets Talk!</h2>
          <p class="text-[#F4F6FC]/80 max-w-[360px] mb-7">
            We are always open to discuss your project, improve your online
            presence and help with your UX/UI design challenges.
          </p>
          <div class="flex gap-5 max-md:mb-5">
            <img src="/icons/facebook.svg" alt="" />
            <img src="/icons/instagram.svg" alt="" />
            <img src="/icons/linkedin.svg" alt="" />
            <img src="/icons/twitter.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="md:flex bg-[#FCD980] md:w-1/3 py-7 text-primary gap-7 px-9">
        <div class="flex flex-col">
          <span class="text-lg font-medium">Email me at</span>
          <router-link to="/">contact@website.com</router-link>
        </div>
        <div class="flex flex-col">
          <span class="text-lg font-medium">Call us</span>
          <a href="tel:0927 6277 28525">0927 6277 28525</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>

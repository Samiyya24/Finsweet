<script setup></script>
<template>
  <footer class="bg-[#1C1E53] text-white py-24">
    <div class="container">
      <div class="md:flex gap-40">
        <div class="max-w-[400px] max-md:mb-5">
          <img class="mb-6" src="/img/Logo.svg" alt="Logo" />
          <span class="text-[#F4F6FC]/80 max-md:text-sm"
            >We are always open to discuss your project and improve your online
            presence.</span
          >
        </div>
        <div>
          <h2 class="md:text-5xl text-2xl font-semibold mb-4">Lets Talk!</h2>
          <p class="text-[#F4F6FC]/80 max-w-[360px] mb-7 max-md:text-sm">
            We are always open to discuss your project, improve your online
            presence and help with your UX/UI design challenges.
          </p>
          <div class="flex gap-5 max-md:mb-5">
            <a href="https://www.facebook.com/"
              ><img src="/icons/facebook.svg" alt=""
            /></a>
            <a href="https://www.instagram.com/"
              ><img src="/icons/instagram.svg" alt=""
            /></a>
            <a href="https://www.linkedin.com/"
              ><img src="/icons/linkedin.svg" alt=""
            /></a>
            <a href="https://x.com/?lang=en"
              ><img src="/icons/twitter.svg" alt=""
            /></a>
          </div>
        </div>
      </div>
      <div
        class="md:flex bg-[#FCD980] md:w-1/3 md:py-7 py-2 text-primary gap-7 md:px-9 px-2"
      >
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

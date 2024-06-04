<template>
  <swiper
    :rewind="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <section class="max-md:text-center md:flex px-5 justify-around py-32">
        <div class="max-w-[300px]">
          <h3 class="text-4xl font-semibold text-primary">
            What our clients say about us
          </h3>
          <p class="text-primary/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </p>
        </div>
        <div>
          <p
            class="md:text-3xl text-xl text-primary mb-12 max-w-[700px] font-medium"
          >
            "The best agency we’ve worked with so far. They understand our
            product and are able to add new features with a great focus."
          </p>
          <div class="flex items-center gap-x-4 max-md:justify-center">
            <img src="/img/jenny.png" alt="Jenny" />
            <div class="text-primary">
              <p class="text-lg">Jenny Wilson</p>
              <span class="text-xs">Vice President</span>
            </div>
          </div>
        </div>
      </section>
    </swiper-slide>
    <swiper-slide>
      <section class="max-md:text-center md:flex px-5 justify-around py-32">
        <div class="max-w-[300px]">
          <h3 class="text-4xl font-semibold text-primary">
            What our clients say about us
          </h3>
          <p class="text-primary/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </p>
        </div>
        <div>
          <p
            class="md:text-3xl text-xl text-primary mb-12 max-w-[700px] font-medium"
          >
            "The best agency we’ve worked with so far. They understand our
            product and are able to add new features with a great focus."
          </p>
          <div class="flex items-center gap-x-4 max-md:justify-center">
            <img src="/img/jenny.png" alt="Jenny" />
            <div class="text-primary">
              <p class="text-lg">Jenny Wilson</p>
              <span class="text-xs">Vice President</span>
            </div>
          </div>
        </div>
      </section>
    </swiper-slide>
    <swiper-slide>
      <section class="max-md:text-center md:flex px-5 justify-around py-32">
        <div class="max-w-[300px]">
          <h3 class="text-4xl font-semibold text-primary">
            What our clients say about us
          </h3>
          <p class="text-primary/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </p>
        </div>
        <div>
          <p
            class="md:text-3xl text-xl text-primary mb-12 max-w-[700px] font-medium"
          >
            "The best agency we’ve worked with so far. They understand our
            product and are able to add new features with a great focus."
          </p>
          <div class="flex items-center gap-x-4 max-md:justify-center">
            <img src="/img/jenny.png" alt="Jenny" />
            <div class="text-primary">
              <p class="text-lg">Jenny Wilson</p>
              <span class="text-xs">Vice President</span>
            </div>
          </div>
        </div>
      </section>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const modules = [Navigation];
</script>
<style scoped>
.swiper-button-prev:after,
.swiper-button-next:after {
  font-family: swiper-icons;
  font-size: 10px;
  text-transform: none !important;
  letter-spacing: 0;
  font-variant: initial;
  line-height: 1;
}
</style>

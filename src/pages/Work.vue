<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import PortfolioCard from "../components/PortfolioCard.vue";
import { reactive, ref, computed } from "vue";

const datas = reactive([
  {
    img: "/img/img.png",
    title: "Template 1",
    info: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    button: "View Portfolio",
    design: "UI Design",
  },
  {
    img: "/img/img2.png",
    title: "Template 1",
    info: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    button: "View Portfolio",
    design: "Webflow Design",
  },
  {
    img: "/img/img3.png",
    title: "Template 1",
    info: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    button: "Read case study",
    design: "Figma Design",
  },
  {
    img: "/img/img4.png",
    title: "Template 1",
    info: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    button: "Read case study",
    design: "UI Design",
  },
  {
    img: "/img/img5.png",
    title: "Template 1",
    info: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    button: "Read case study",
    design: "Webflow Design",
  },
  {
    img: "/img/img6.png",
    title: "Template 1",
    info: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    button: "Read case study",
    design: "Figma Design",
  },
]);

const filterButton = ref("All");

const filteredData = computed(() => {
  if (filterButton.value === "All") {
    return datas;
  }
  return datas.filter((item) => item.design === filterButton.value);
});

function setFilter(button) {
  filterButton.value = button;
}
</script>

<template>
  <Navbar />
  <div class="bg-[#F4F6FC]">
    <div class="container md:pt-40 md:pb-20 pt-32 pb-10 text-center">
      <span class="text-base text-primary/90 font-medium mb-1"
        >What we created</span
      >
      <h1 class="md:text-5xl text-2xl font-semibold mb-6">
        Our Work Portfolio
      </h1>
      <p
        class="font-medium text-primary/70 mb-8 max-w-[670px] mx-auto max-md:text-sm"
      >
        We help teams create great digital products by providing them with tools
        and technology to make the design-to-code process universally
        accessible.
      </p>
      <div class="flex items-center gap-5 max-md:mb-5 justify-center">
        <a class="bg-primary p-1 rounded-full" href="https://www.facebook.com/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M9.602 21.026v-7.274H6.818a.545.545 0 0 1-.545-.545V10.33a.545.545 0 0 1 .545-.545h2.773V7a4.547 4.547 0 0 1 4.86-4.989h2.32a.556.556 0 0 1 .557.546v2.436a.557.557 0 0 1-.557.545h-1.45c-1.566 0-1.867.742-1.867 1.833v2.413h3.723a.533.533 0 0 1 .546.603l-.337 2.888a.545.545 0 0 1-.545.476h-3.364v7.274a.962.962 0 0 1-.975.974h-1.937a.961.961 0 0 1-.963-.974"
            />
          </svg>
        </a>
        <a href="https://www.instagram.com/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
            />
          </svg>
        </a>
        <a
          class="bg-primary p-1 rounded-[4px]"
          href="https://www.linkedin.com/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.88em"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path
              fill="white"
              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3M447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"
            />
          </svg>
        </a>
        <a href="https://x.com/?lang=en">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 16 16"
          >
            <path
              fill="text-primary"
              d="M16 3c-.6.3-1.2.4-1.9.5c.7-.4 1.2-1 1.4-1.8c-.6.4-1.3.6-2.1.8c-.6-.6-1.5-1-2.4-1c-1.7 0-3.2 1.5-3.2 3.3c0 .3 0 .5.1.7c-2.7-.1-5.2-1.4-6.8-3.4c-.3.5-.4 1-.4 1.7c0 1.1.6 2.1 1.5 2.7c-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1c-.2 0-.4 0-.6-.1c.4 1.3 1.6 2.3 3.1 2.3c-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5c6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="md:gap-8 gap-5 flex justify-center my-12">
      <span
        class="max-md:text-sm cursor-pointer text-primary/70 hover:text-[#2405F2]"
        @click="setFilter('All')"
        >All</span
      >
      <span
        class="max-md:text-sm cursor-pointer text-primary/70 hover:text-[#2405F2]"
        @click="setFilter('UI Design')"
        >UI Design</span
      >
      <span
        class="max-md:text-sm cursor-pointer text-primary/70 hover:text-[#2405F2]"
        @click="setFilter('Webflow Design')"
        >Webflow Design</span
      >
      <span
        class="max-md:text-sm cursor-pointer text-primary/70 hover:text-[#2405F2]"
        @click="setFilter('Figma Design')"
        >Figma Design</span
      >
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-9">
      <div v-for="(item, index) in filteredData" :key="index">
        <PortfolioCard :data="item" />
      </div>
    </div>
  </div>

  <div class="container md:py-32 py-12 text-center">
    <h2
      class="max-w-[730px] md:text-5xl text-2xl font-semibold text-primary mx-auto md:leading-[64px] mb-5"
    >
      Let's build something great together
    </h2>
    <p class="text-primary/70 max-w-[500px] mx-auto mb-10 max-md:text-sm">
      Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies
      nec dolor sit amet, scelerisque cursus purus.
    </p>
    <router-link
      to="/Contact"
      class="md:py-4 py-2 md:px-[67px] px-8 hover:bg-[#FCD980] border-2 border-[#FCD980] rounded-full"
      >Contact Us</router-link
    >
  </div>
  <Footer />
</template>

<style scoped></style>

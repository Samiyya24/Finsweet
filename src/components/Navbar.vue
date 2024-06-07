<script setup>
import { ref } from "vue";

const menu = ref(["Home", "About us", "Pricing", "Work", "Blog"]);
const menu_hambur = ref([
  "Home",
  "About us",
  "Pricing",
  "Work",
  "Blog",
  "Contact us",
]);

const link = (index) => {
  if (index === 0) {
    return "/";
  } else if (index === 1) {
    return "/about";
  } else if (index === 2) {
    return "/pricing";
  } else if (index === 3) {
    return "/work";
  } else if (index === 4) {
    return "/blog";
  }
  return "/contact";
};

const hamburger = () => {
  const back = document.getElementById("back");
  const hambur = document.getElementById("hambur");
  const hamburger = document.getElementById("hamburger");
  const left = document.getElementById("left");
  const hamMenu = document.getElementById("hamMenu");

  if (back.style.display === "none") {
    hamMenu.style.background = "#1C1E53";
    back.style.display = "block";
  } else {
    back.style.display = "none";
    hamMenu.style.background = "rgba(28, 30, 83, 0.8)";
    hamMenu.style.backdropFilter = "blur(30px)";
    hamMenu.style.webkitBackdropFilter = "blur(30px)";
  }

  if (hambur.style.right === "-100%") {
    hambur.style.right = "0px";
    hamburger.style.display = "none";
    left.style.display = "block";
  } else {
    hambur.style.right = "-100%";
    hamburger.style.display = "block";
    left.style.display = "none";
  }
};
</script>

<template>
  <div class="bg-[#1C1E53] fixed w-full z-40">
    <div
      id="hamMenu"
      class="container max-md:py-5 text-white flex md:py-[1%] w-full justify-between items-center"
    >
      <router-link to="/"
        ><img class="w-[80%]" src="/img/Logo.svg" alt="LOGO"
      /></router-link>
      <div class="flex md:gap-5 lg:gap-10 items-center">
        <router-link
          :to="link(index)"
          active-class="active-link"
          class="hidden md:block anime cursor-pointer font-medium text-[16px]"
          v-for="(item, index) in menu"
          :key="index"
          >{{ item }}</router-link
        >
        <router-link
          :to="link(5)"
          class="border-white/20 hidden md:block hover:border-white border-2 lg:py-4 md:py-2 lg:px-12 md:px-8 rounded-full cursor-pointer"
          active-class="active-link"
        >
          Contact us
        </router-link>

        <div class="md:hidden">
          <button
            id="hamburger"
            @click="hamburger()"
            class="flex justify-center items-center text-3xl text-white mb-2 px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M3.5 5a1 1 0 0 0 0 2h17a1 1 0 1 0 0-2zm-1 7a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1m0 6.001a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            id="left"
            @click="hamburger()"
            class="hidden duration-150 justify-center items-center text-3xl text-white mb-2 px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                />
                <path
                  fill="currentColor"
                  d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    id="back"
    @click="hamburger()"
    class="w-screen h-screen hidden menuBlur right-0 top-0 fixed z-20"
  ></div>

  <div
    id="hambur"
    class="w-[65%] flex -right-full duration-700 bg-[#1C1E53]/80 px-[10%] flex-col gap-6 py-[30%] h-screen items-start fixed z-30 shadow-2xl shadow-[#1C1E53]"
  >
    <router-link
      active-class="active-link"
      @click="hamburger()"
      :to="link(index)"
      class="md:block hover-underline-animation phone font-medium text-xl py-1 first:pt-3"
      v-for="(item, index) in menu_hambur"
      :key="index"
      >{{ item }}</router-link
    >
  </div>
</template>

<style scoped>
.blurred-background {
  background: rgba(28, 30, 83, 0.5);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
}

@media (max-width: 768px) {
  .blurred-background {
    background: rgba(28, 30, 83, 0.8);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
  }
}

.menuBlur {
  background: rgba(28, 30, 83, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.hover-underline-animation {
  position: relative;
  color: white;
  text-decoration: none;
}

.hover-underline-animation::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  display: block;
  margin-top: 5px;
  right: 0;
  background: white;
  transition: width 0.3s ease;
}

.hover-underline-animation:hover::after {
  width: 100%;
  left: 0;
  background: white;
}

.phone::after {
  width: 100%;
}

.phone:hover::after {
  width: 0;
}

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

.active-link {
  color: white !important;
}
</style>

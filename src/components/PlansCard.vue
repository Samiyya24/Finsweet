<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { reactive } from "vue";

const datas = reactive([
  {
    price: "$299",
    design: "Per Design",
    page: "Landing Page ",
    info: "When you’re ready to go beyond prototyping in Figma, ",
    companyBenefits: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
  },
  {
    price: "$399",
    design: "Multi Design",
    page: "Website Page ",
    info: "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.",
    companyBenefits: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
  },
  {
    price: "$499",
    design: "Per Design",
    page: "Complex Project",
    info: "When you’re ready to go beyond prototyping in Figma, ",
    companyBenefits: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
      "Assist and Help",
    ],
  },
]);
</script>

<template>
  <div class="py-72 container">
    <div class="text-center">
      <h1 class="text-5xl font-semibold text-primary mb-4">
        Our Pricing Plans
      </h1>
      <p class="font-medium text-primary/70 mb-16 max-w-[500px] mx-auto">
        When you’re ready to go beyond prototyping in Figma, Webflow is ready to
        help you bring your designs to life — without coding them.
      </p>
    </div>
    <div class="grid md:grid-cols-3 gap-9">
      <div
        v-for="(data, index) in datas"
        :key="index"
        class="bg-[#F4F6FC] py-16 px-12 rounded-xl"
        :class="index === 1 ? 'bg-[#1c1e5d] text-white' : 'bg-[#F4F6FC]'"
      >
        <div class="flex gap-2 items-center mb-5">
          <span
            :class="index === 1 ? 'text-white' : ''"
            class="text-primary text-4xl font-semibold"
            >{{ data.price }}</span
          >
          <span
            :class="index === 1 ? 'text-[#eec356]' : ''"
            class="text-[#2405F2]"
            >{{ data.design }}</span
          >
        </div>
        <h4
          :class="index === 1 ? 'text-white' : ''"
          class="text-2xl text-primary mb-2"
        >
          {{ data.page }}
        </h4>
        <p
          :class="index === 1 ? 'text-[#b2b2b2]' : ''"
          class="text-primary/70 mb-[78px]"
        >
          {{ data.info }}
        </p>

        <div class="mb-24">
          <div
            v-for="(item, index) in data.companyBenefits"
            :key="index"
            class="mb-5"
          >
            <div class="flex gap-3 items">
              <span
                ><img
                  :class="index === 1 ? 'mix-blend-luminosity' : ''"
                  :src="index > 2 ? '/icons/pink.svg' : '/icons/green.svg'"
              /></span>
              <span
                :class="item.index === 1 ? 'text-gray-100' : ''"
                class="mb-5 text-primary"
                >{{ item }}</span
              >
            </div>
          </div>
        </div>
        <router-link
          class=""
          :class="
            index === 1
              ? 'hover:bg-[#ffdc84] hover:text-primary border border-[#ffdc84] text-[#ffdc84] py-4 px-20 rounded-full'
              : 'py-4 px-20 hover:bg-primary hover:text-[#F4F6FC] border border-primary rounded-full'
          "
          >Get started</router-link
        >
      </div>
    </div>
  </div>
</template>

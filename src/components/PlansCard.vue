<script setup>
const plans = [
  {
    price: "$299",
    designType: "Per Design",
    title: "Landing Page",
    description: "When you’re ready to go beyond prototyping in Figma,",
    advantage: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
  },
  {
    price: "$399",
    designType: "Multi Design",
    title: "Website Page",
    description:
      "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.",
    advantage: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
  },
  {
    price: "$499",
    designType: "Per Design",
    title: "Complex Project",
    description: "When you’re ready to go beyond prototyping in Figma,",
    advantage: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
      "Assist and Help",
    ],
  },
];

let hover = -1;
</script>

<template>
  <div class="container pt-44 pb-36">
    <div>
      <h1 class="font-semibold text-5xl text-center mb-4">Our Pricing Plans</h1>
      <p
        class="max-w-[500px] text-center mx-auto text-primary/70 font-medium mb-16"
      >
        When you’re ready to go beyond prototyping in Figma, Webflow is ready to
        help you bring your designs to life — without coding them.
      </p>
    </div>
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-8">
      <div
        v-for="(plan, planIndex) in plans"
        :key="planIndex"
        class="py-16 px-12 text-center overflow-hidden rounded-xl relative"
        :class="[
          planIndex == 1
            ? 'bg-[#1C1E53] text-white'
            : 'bg-[#F4F6FC] text-primary',
          hover == planIndex ? 'hover-class' : '',
        ]"
        @mouseenter="hover = planIndex"
        @mouseleave="hover = -1"
      >
        <div class="flex gap-2 items-center mb-5">
          <p class="text-4xl font-semibold">{{ plan.price }}</p>
          <span class="text-4xl font-semibold" v-if="planIndex == 2">+</span>
          <span :class="planIndex == 1 ? 'text-[#FCD980]' : 'text-[#2405F2]'">
            {{ plan.designType }}
          </span>
        </div>
        <h3 class="text-xl text-left font-medium mb-2">{{ plan.title }}</h3>
        <p
          :class="[
            'mb-12 text-left',
            planIndex == 1 ? 'text-[#a6a6a6]' : 'text-primary/70',
          ]"
        >
          {{ plan.description }}
        </p>

        <div
          class="py-4"
          v-for="(item, itemIndex) in plan.advantage"
          :key="itemIndex"
        >
          <div class="flex items-center gap-3">
            <img
              :class="
                planIndex == 0 && itemIndex > 2
                  ? 'mix-blend-luminosity'
                  : 'mix-blend-normal'
              "
              :src="
                planIndex == 0 && itemIndex > 2
                  ? '/icons/pink.svg'
                  : '/icons/green.svg'
              "
              alt=""
            />

            <span>{{ item }}</span>
          </div>
        </div>
        <button
          :class="[
            'border py-4 px-16 rounded-full ',
            planIndex == 2 ? 'mt-14 ' : 'mt-[110px]',
            planIndex == 0 ? 'mt-[135px] ' : 'mt-20',

            planIndex == 1
              ? 'text-[#FCD980] border-[#FCD980] hover:bg-[#FCD980] hover:text-primary'
              : 'border-primary hover:bg-primary hover:text-white',
          ]"
        >
          <router-link to="/contact">
            {{ planIndex == 2 ? "Contact us" : "Get started" }}
          </router-link>
        </button>
        <div
          :class="
            planIndex == 1
              ? 'absolute md:w-[1100px] w-[700px] rounded-full md:h-[1100px] h-[700px] bg-white/5 md:bottom-44 md:-right-[330px] -right-[170px] max-md:-top-[100px]'
              : ''
          "
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hover-class {
  transition: background-color 0.3s, color 0.3s;
}
</style>

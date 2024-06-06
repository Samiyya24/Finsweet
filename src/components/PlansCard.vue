<template>
  <div class="container mx-auto">
    <div class="md:pt-52 pt-32 pb-10">
      <div>
        <h1 class="font-bold text-4xl text-center mb-4">Our Pricing Plans</h1>
        <p class="text-sm max-w-[450px] text-center mx-auto text-primary/70">
          When you’re ready to go beyond prototyping in Figma, Webflow is ready
          to help you bring your designs to life — without coding them.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 justify-center">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          class="rounded-lg px-8 mx-2 my-12 hover:shadow-xl"
          :class="plan.bgClass"
          @mouseover="hover = index"
          @mouseleave="hover = -1"
        >
          <div class="flex gap-8 px-6 py-8 items-center">
            <h1 class="font-bold text-4xl" :class="plan.textColor">
              {{ plan.price }}
            </h1>
            <p :class="plan.subTextColor">{{ plan.designType }}</p>
          </div>
          <div class="px-7 gap-8">
            <h1 class="font-semibold text-2xl" :class="plan.textColor">
              {{ plan.title }}
            </h1>
            <p
              :class="[
                plan.textColor,
                'text-sm max-w-[300px] my-4 text-primary/70',
              ]"
            >
              {{ plan.description }}
            </p>
            <div class="gap-4">
              <div
                v-for="(feature, featureIndex) in plan.features"
                :key="featureIndex"
                class="flex gap-4 py-3"
              >
                <img
                  :src="feature.icon"
                  alt="feature icon"
                  :class="featureIndex >= 3 ? plan.blend : ''"
                />
                <p :class="plan.textColor">{{ feature.text }}</p>
              </div>
            </div>
            <div class="justify-center mx-auto my-12">
              <router-link
                v-if="plan.buttonText === 'Get started'"
                :to="plan.buttonLink"
                class="[&.router-link-active]:text-white border rounded-full px-8 py-4"
                :class="plan.buttonClass"
              >
                {{ plan.buttonText }}
              </router-link>
              <router-link
                v-else
                :to="plan.buttonLink"
                class="[&.router-link-active]:text-white hover:text-gray-400 border rounded-full py-3 px-8"
                :class="plan.buttonClass"
              >
                {{ plan.buttonText }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const plans = [
  {
    price: "$299",
    designType: "Per Design",
    title: "Landing Page",
    description: "When you’re ready to go beyond prototyping in Figma,",
    features: [
      { icon: "/icons/green.svg", text: "All limited links" },
      { icon: "/icons/green.svg", text: "Own analytics platform" },
      { icon: "/icons/green.svg", text: "Chat support" },
      { icon: "/icons/pink.svg", text: "Optimize hashtags" },
      { icon: "/icons/pink.svg", text: "Unlimited users" },
    ],
    buttonText: "Get started",
    buttonLink: "/Home",
    bgClass: "bg-[#F4F6FC]",
    blend: "mix-blend-luminosity	",
    textColor: "text-primary",
    subTextColor: "text-[#2405F2]",
    buttonClass:
      "bg-white text-primary border border-primary hover:bg-primary hover:text-white ",
  },
  {
    price: "$399",
    designType: "Multi Design",
    title: "Website Page",
    description:
      "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.",
    features: [
      { icon: "/icons/green.svg", text: "All limited links" },
      { icon: "/icons/green.svg", text: "Own analytics platform" },
      { icon: "/icons/green.svg", text: "Chat support" },
      { icon: "/icons/green.svg", text: "Optimize hashtags" },
      { icon: "/icons/green.svg", text: "Unlimited users" },
    ],
    buttonText: "Get started",
    buttonLink: "/Home",
    bgClass: "bg-[#1C1E53]",
    textColor: "text-white",
    blend: "mix-blend-normal",
    subTextColor: "text-[#FCD980]",
    buttonClass:
      " text-[#FCD980] border border-[#FCD980] hover:bg-[#FCD980] hover:text-primary ",
  },
  {
    price: "$499 +",
    designType: "Per Design",
    title: "Complex Project",
    description: "When you’re ready to go beyond prototyping in Figma,",
    features: [
      { icon: "/icons/green.svg", text: "All limited links" },
      { icon: "/icons/green.svg", text: "Own analytics platform" },
      { icon: "/icons/green.svg", text: "Chat support" },
      { icon: "/icons/green.svg", text: "Optimize hashtags" },
      { icon: "/icons/green.svg", text: "Unlimited users" },
      { icon: "/icons/green.svg", text: "Assist and Help" },
    ],
    buttonText: "Contact us",
    buttonLink: "/Contact",
    bgClass: "bg-[#F4F6FC]",
    blend: "mix-blend-normal",
    textColor: "text-primary",
    subTextColor: "text-[#2405F2]",
    buttonClass:
      "bg-white text-primary border border-primary hover:bg-primary hover:text-white ",
  },
];

let hover = -1;
</script>

<style scoped></style>

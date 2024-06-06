<template>
  <div class="text-left">
    <img class="w-full mb-6" :src="data.img" alt="Portfolio Image" />
    <span class="font-medium mb-4 text-primary/70">{{ data.date }}</span>
    <h3 class="md:text-2xl text-xl text-primary mb-3">
      {{ data.title }}
    </h3>
    <p class="text-primary/70 mb-6 leading-7 max-md:text-sm">{{ data.info }}</p>
    <button class="text-primary flex items-center gap-4">
      {{ data.button }}
      <svg class="animate-pulse"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M.696 9.349c5.518-.03 11.165-.062 16.942-.096c-2.807-2.81-4.835-4.842-6.084-6.095c-.143-.179-.158-.554.112-.847c.27-.293.752-.281.89-.14c2.362 2.372 4.772 4.782 7.23 7.23a.65.65 0 0 1 .215.503a.645.645 0 0 1-.215.502a8382.495 8382.495 0 0 1-7.6 7.421a.742.742 0 0 1-1.014-.063c-.263-.287-.29-.588.061-.982c2.002-1.96 4.097-4.004 6.287-6.13c-5.713.038-11.321.07-16.824.097a.701.701 0 0 1-.696-.72c0-.507.388-.68.696-.68"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "PortfolioCard",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>

<script setup>
// import defineProps
const props = defineProps({
  product: Object,
});
</script>
<template>
  <div class="bg-white md:text-left p-8">
    <img class="mb-6 max-md:mx-auto" :src="product.img" alt="" />
    <h3 class="text-2xl leading-9 text-primary mb-3">{{ product.title }}</h3>
    <p class="text-primary/70 max-w-72">{{ product.text }}</p>
  </div>
</template>

<style lang="scss" scoped></style>

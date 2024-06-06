<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import OurBlog from "../components/OurBlog.vue";
import Students from "../components/Students.vue";
import { reactive, ref, computed } from "vue";

const datas = reactive([
  {
    img: "/img/blog1.png",
    date: "27 Jan 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    info: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    button: "Read More",
  },
  {
    img: "/img/blog2.png",
    date: "27 Jan 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    info: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    button: "Read More",
  },
  {
    img: "/img/blog3.png",
    date: "27 Jan 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    info: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    button: "Read More",
  },
  {
    img: "/img/blog4.png",
    date: "27 Jan 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    info: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    button: "Read More",
  },
  {
    img: "/img/blog5.png",
    date: "27 Jan 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    info: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    button: "Read More",
  },
  {
    img: "/img/blog6.png",
    date: "27 Jan 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    info: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    button: "Read More",
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
  <Students />
  <div class="container py-28 text-center">
    <h3 class="text-5xl font-semibold mb-12">Our Blog</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="(item, index) in filteredData" :key="index">
        <OurBlog :data="item" />
      </div>
    </div>
  </div>

  <Footer />
</template>

<style scoped></style>

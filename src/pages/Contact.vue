<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <Navbar />
  <div class="container text-center md:pt-48 pt-28 pb-16 md:pb-28">
    <h1 class="md:text-5xl text-2xl font-semibold text-primary mb-4">
      Contact Us
    </h1>
    <p class="text-primary/70 leading-7 max-w-[500px] mx-auto max-md:text-sm">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore.
    </p>
  </div>

  <section class="container">
    <form
      class="bg-[#F4F6FC] md:py-14 py-5 md:px-16 px-2 max-w-[1000px] rounded-xl mx-auto mb-32"
      action=""
    >
      <div class="grid md:grid-cols-2 gap-8 mb-4">
        <div>
          <label
            for="name"
            id="name"
            class="block mb-2 ring-0 leading-8 md:text-lg text-gray-900"
            >Name</label
          >
          <input
            type="text"
            id="name"
            class="bg-transparent focus:ring-gray-300 py-4 md:px-6 px-4 placeholder:text-black border border-gray-300 text-black text-sm rounded-lg block w-full"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label
            for="email"
            class="block mb-2 leading-8 md:text-lg text-gray-900"
            >Email</label
          >
          <input
            type="text"
            id="email"
            class="bg-transparent focus:ring-gray-300 py-4 md:px-6 px-4 placeholder:text-black border border-gray-300 text-black text-sm rounded-lg block w-full"
            placeholder="Enter your Email"
            required
          />
        </div>
        <div>
          <label
            for="email"
            class="block mb-2 leading-8 md:text-lg text-gray-900"
            >Subject</label
          >
          <input
            type="text"
            id="email"
            class="bg-transparent py-4 md:px-6 px-4 focus:ring-gray-300 placeholder:text-black border border-gray-300 text-black text-sm rounded-lg block w-full"
            placeholder="Provide context"
            required
          />
        </div>
        <div>
          <label
            for="email"
            class="block mb-2 leading-8 md:text-lg text-gray-900"
            >Subject</label
          >
          <input
            type="text"
            id="email"
            class="bg-transparent py-4 md:px-6 px-4 focus:ring-gray-300 placeholder:text-black border border-gray-300 text-black text-sm rounded-lg block w-full"
            placeholder="Provide context"
            required
          />
        </div>
      </div>
      <div>
        <label
          for="message"
          class="block mb-2 leading-8 md:text-lg text-gray-900"
          >Message</label
        >
        <textarea
          id="message"
          rows="4"
          class="block w-full p-5 text-sm text-black focus:ring-gray-300 focus:border-none placeholder:text-black bg-transparent rounded-lg border border-gray-300"
          placeholder="Write your  question here"
        ></textarea>
      </div>
      <button
        type="submit"
        class="md:py-4 py-2 md:px-16 px-7 border-2 border-primary rounded-full mt-12 hover:bg-primary hover:text-white"
      >
        Send Messege
      </button>
    </form>
  </section>
  <Footer />
</template>

<style lang="scss" scoped>
input:focus {
  outline: none;
  border: none;
}
</style>

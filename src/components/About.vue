<template>
  <div>
    <Header></Header>
    <div class="container mt-10 mx-auto">
      <div class="container mx-auto">
        <div
          class="
            grid-cols-2
            py-10
            lg:px-20
            md:px-10
            lg:space-y-0 lg:grid lg:gap-2 lg:grid-rows-1 lg:mx-auto
          "
        >
          <div class="self-center">
            <h1 class="text-base text-slate-400 mb-4 dark:text-white">
              Hello, I'm Olajumoke
            </h1>
            <p class="text-base text-gray-800 mb-4 dark:text-white">
              I am a curious and creative person who is passionate about solving
              problems in my community. I am eager to take on new challenges and
              learn new concepts and techniques in creating good, sustainable
              products.
            </p>
            <p class="text-base text-gray-800 dark:text-white">
              I believe it’s our collective responsibility to make each other’s
              lives better and care for the earth we’ve been given and the way I
              hope to do this is through empathy in design and innovation
            </p>
          </div>
          <img
            class="
              bg-gray-200
              object-fit
              w-72
              lg:justify-self-end
              md:mx-auto
              my-5
              lg:my-0
            "
            alt="Jumoke"
            src="@/assets/images/projet-Images/jumoke.png"
          />
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
export default {
  name: "About",

  data() {
    return {};
  },

  mounted() {},
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
</style>
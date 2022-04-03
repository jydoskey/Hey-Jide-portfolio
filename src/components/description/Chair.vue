<template>
  <div>
    <Header></Header>

    <div class="container mt-10 mx-auto">
      <div class="container mx-auto">
        <div class="px-6">
          <h1
            class="
              text-3xl
              font-bold
              capitalize
              pb-1
              block
              text-black
              dark:text-white
            "
          >
            Concept design for Chairs
          </h1>
          <h2 class="text-base font-thin pb-4 block text-slate-400">
            Sketch, Coloured Painting
          </h2>
        </div>
        <div
          class="
            grid-cols-2
            pt-0
            pb-10
            px-6
            lg:space-y-0 lg:grid lg:gap-2 lg:grid-rows-1 lg:mx-auto
          "
        >
          <p class="text-thin mt-2 px-1 text-gray-800 mb-4 dark:text-white">
            Any of various devices that hold up or support <br /><span
              class="font-bold"
            >
              - Merriam-Webster</span
            >
          </p>

          <div>
            <h1 class="text-base capitalize text-slate-400 dark:text-white">
              selected design
            </h1>
            <p class="block text-thin pt-2 text-gray-800 mb-4 dark:text-white">
              The chair frame is made of walnut wood and the seats are made of
              cotton with a black wool-like finishing
            </p>
            <h1
              class="text-base text-slate-400 mb-1 dark:text-white capitalize"
            >
              tools
            </h1>
            <p class="text-thin text-gray-800 mb-4 dark:text-white">
              Sketch, Coloured Painting
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5 mx-auto">
      <div class="container mx-auto">
        <div class="grid-cols-1 py-10 px-10 lg:space-y-0 lg:grid lg:mx-auto">
          <h1
            class="
              text-3xl
              font-bold
              capitalize
              pb-1
              block
              text-black
              dark:text-white
            "
          >
            Design sketches
          </h1>
          <img
            class="
              bg-gray-200
              object-fit
              w-full
              h-full
              lg:justify-self-end
              md:mx-auto
              mt-5
              lg:my-0
            "
            alt="Design Shelf"
            title="Design Shelf"
            src="@/assets/images/projet-Images/Chair2.jpg"
          />

          <h1
            class="
              text-3xl
              font-bold
              capitalize
              pb-1
              pt-10
              block
              text-black
              dark:text-white
            "
          >
            Coloured Painting
          </h1>
          <img
            class="
              bg-gray-200
              object-fit
              w-full
              h-full
              lg:justify-self-end
              md:mx-auto
              my-5
              lg:my-0
            "
            alt="Coloured Painting"
            title="Coloured Painting"
            src="@/assets/images/projet-Images/Chair1.jpg"
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
  name: "Chair",

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
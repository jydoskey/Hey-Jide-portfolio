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
            Concept Design for a helmet
          </h1>
          <h2 class="text-base font-thin pb-4 block text-slate-400">
            Coloured Painting, Sketch
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
            The design allows bike riders to protect themselves from sustaining
            head injuries should there be a case of an accident while riding. It
            also protects commuters from this likewise from harsh effects of the
            sun.
          </p>

          <div>
            <h1 class="text-base capitalize text-slate-400 dark:text-white">
              problem statement
            </h1>
            <p class="block text-thin pt-2 text-gray-800 mb-4 dark:text-white">
              More than 50% of commercial motor cyclists in Lagos, Nigeria, do
              not wear helmets whilst driving their bikes, neither do they have
              helmets for the passengers. This often leads to serious bodily
              harm when accidents occur.
            </p>
            <h1
              class="text-base capitalize text-slate-400 mb-1 dark:text-white"
            >
              solution
            </h1>
            <p class="text-thin text-gray-800 mb-4 dark:text-white">
              Designing stylish helmets that will encourage motor cycles to wear
              their helmets and stay protected.
            </p>
            <h1
              class="text-base text-slate-400 mb-1 dark:text-white capitalize"
            >
              tools
            </h1>
            <p class="text-thin text-gray-800 mb-4 dark:text-white">
              Coloured Painting, Sketch
            </p>
          </div>
        </div>
      </div>

      <div class="container mx-auto">
        <div
          class="
            grid-cols-2
            pt-0
            pb-10
            px-6
            lg:space-y-0 lg:grid lg:gap-2 lg:grid-rows-1 lg:mx-auto
          "
        >
          <div>
            <h1
              class="
                text-base
                font-bold
                capitalize
                text-slate-400
                dark:text-white
              "
            >
              Motor Cyclist Without their Helmets
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
              alt="Cyclist without helmet"
              title="cyclist without helmet"
              src="@/assets/images/projet-Images/okada_riders.jpg"
            />
          </div>

          <div>
            <h1
              class="
                text-base
                font-bold
                capitalize
                text-slate-400
                dark:text-white
              "
            >
              Motor Cyclist wearing colourful helmets
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
              alt="Cyclists with Helmet"
              title="Cyclists with Helmet"
              src="@/assets/images/projet-Images/BODABODA.jpg"
            />
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
            Sketch
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
            alt="Helmet Sketch"
            title="Helmet Sketch"
            src="@/assets/images/projet-Images/Helmet2.jpg"
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
            alt="Helmet Painting"
            title="Helmet Painting"
            src="@/assets/images/projet-Images/Helmet1.jpg"
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
  name: "Helmet",

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
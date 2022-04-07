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
            Concept design for hanging bookshelves
          </h1>
          <h2 class="text-base font-thin pb-4 block text-slate-400">
            Solid works & Keyshot Rendering, Sketch, Material Highlighting
          </h2>
        </div>
        <div
          class="
            grid-cols-1
            pt-0
            pb-10
            px-6
            lg:space-y-0 lg:grid lg:gap-2 lg:grid-rows-1 lg:mx-auto
          "
        >
          <div>
            <h1 class="text-base capitalize text-slate-400 dark:text-white">
              preferred material
            </h1>
            <p class="block text-thin pt-2 text-gray-800 mb-4 dark:text-white">
              The preferred material for the bookshelf series is wood in
              different variations; ash wood, mahogany wood, maple wood.
            </p>
            <h1
              class="text-base text-slate-400 mb-1 dark:text-white capitalize"
            >
              tools
            </h1>
            <p class="text-thin text-gray-800 mb-4 dark:text-white">
              Solid works & Keyshot Rendering, Sketch, Material Highlighting
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5 mx-auto">
      <div class="container mx-auto">
        <div class="grid-cols-1 py-10 px-6 lg:space-y-0 lg:grid lg:mx-auto">
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
            Design options sketches for Letters A - E
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
            alt="Design Options Shelf"
            title="Design Options Shelf"
            src="@/assets/images/projet-Images/Shelfs2.jpg"
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
            Design and material highlighting
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
            alt="Design and material highlighting"
            title="Design and material highlighting"
            src="@/assets/images/projet-Images/Shelfs3.jpg"
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
            Solidworks rendering
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
            alt="Solidworks rendering"
            title="Solidworks rendering"
            src="@/assets/images/projet-Images/Shelfs4.png"
          />
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
            Keyshot: Bookshelf A fixed to the wall with some books
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
            alt="Bookshelf A fixed to the wall with some books"
            title="Bookshelf A fixed to the wall with some books"
            src="@/assets/images/projet-Images/Shelfs5.png"
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
            Keyshot: Bookshelf B
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
            alt="Bookshelf B"
            title="Bookshelf B"
            src="@/assets/images/projet-Images/Shelfs1.png"
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
  name: "Shelf",

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
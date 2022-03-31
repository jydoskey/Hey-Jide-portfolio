<template>
  <div class="container mt-16 mx-auto">
    <div class="container mx-auto">
      <div
        class="
          grid-cols-3
          p-20
          space-y-2
          bg-blue-200
          lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3
        "
      >
        <div class="w-full rounded hover:shadow-2xl cursor-pointer figure">
          <img
            class="image-main h-full w-full"
            src="src/assets/Chair-1.PNG"
            srcset="src/assets/Chair-1.PNG"
            alt="Chair-image 1"
            title="Reading Chair"
          />
          <img
            class="image-hover h-full w-full"
            src="src/assets/Chair-2.PNG"
            srcset="src/assets/Chair-2.PNG"
            alt="Chair-image 2"
            title="Reading Chair"
          />
        </div>

        <div
          class="
            w-full
            col-span-2
            row-span-2
            rounded
            hover:shadow-2xl
            cursor-pointer
            figure
          "
        >
          <img
            class="image-main h-full w-full"
            src="src/assets/Helmet-1.PNG"
            srcset="src/assets/Helmet-1.PNG"
            alt="Helmet-image 1"
            title="Helmet"
          />
          <img
            class="image-hover h-full w-full"
            src="src/assets/Helmet-2.PNG"
            srcset="src/assets/Helmet-2.PNG"
            alt="Helmet-image 2"
            title="Helmet"
          />
        </div>
        
        <div class="w-full rounded hover:shadow-2xl cursor-pointer figure">
          <img
            class="image-main h-full w-full"
            src="src/assets/Bookshelf-1.PNG"
            srcset="src/assets/Bookshelf-1.PNG"
            alt="Bookshelf-image 1"
            title="Bookshelf"
          />
          <img
            class="image-hover h-full w-full"
            src="src/assets/Bookshelf-2.PNG"
            srcset="src/assets/Bookshelf-2.PNG"
            alt="Bookshelf-image 2"
            title="Bookshelf"
          />
        </div>

        <div class="w-full rounded hover:shadow-2xl cursor-pointer figure">
          <img
            class="image-main h-full w-full"
            src="src/assets/Bus-shelters-1.PNG"
            srcset="src/assets/Bus-shelters-1.PNG"
            alt="Bus-Shelters-image 1"
            title="Bus Shelters"
          />
          <img
            class="image-hover h-full w-full"
            src="src/assets/Bus-shelters-2.PNG"
            srcset="src/assets/Bus-shelters-2.PNG"
            alt="Bus-Shelters-image 2"
            title="Bus Shelters"
          />
        </div>

        <div class="w-full rounded hover:shadow-2xl cursor-pointer figure">
          <img
            class="image-main h-full w-full"
            src="src/assets/Fusion-1.PNG"
            srcset="src/assets/Fusion-1.PNG"
            alt="Fusion-image 1"
            title="Fusion"
          />
          <img
            class="image-hover h-full w-full"
            src="src/assets/Fusion-2.PNG"
            srcset="src/assets/Fusion-2.PNG"
            alt="Fusion-image 2"
            title="Fusion"
          />
        </div>

        <!-- <div class="w-full rounded hover:shadow-2xl cursor-pointer">
            <img class="h-full w-full" src=""
                alt="image">
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",

  data() {
    return {};
  },

  computed: {},

  mounted() {},

  methods: {},
};
</script>

<style>
/*
      Rollover Image
     */
.figure {
  position: relative;
}
.figure img.image-hover {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.2s;
}
.figure:hover img.image-hover {
  opacity: 1;
}
</style>
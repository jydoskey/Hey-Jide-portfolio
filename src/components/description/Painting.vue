<template>
  <div>
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
            Other Works
          </h1>
          <h2 class="text-base font-thin pb-4 block text-slate-400">
            Chalk on black paper
          </h2>
        </div>
      </div>

      <div class="container mt-5 mx-auto">
        <div class="container mx-auto">
          <div class="grid-cols-1 py-10 px-6 lg:space-y-0 lg:grid lg:mx-auto">
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
              alt="Eyes"
              title="Eyes"
              src="@/assets/images/projet-Images/eyes.png"
            />
          </div>
        </div>
      </div>

      <div class="container mx-auto">
        <div
          class="
            grid-cols-2
            pt-10
            pb-10
            px-6
            lg:space-y-0 lg:grid lg:gap-2 lg:grid-rows-2 lg:mx-auto
          "
        >
          <div>
            <img
              class="
                bg-gray-200
                object-fit
                w-7/12
                h-full
                lg:justify-self-end
                justify-center
                mx-auto
                mt-5
                lg:my-0
              "
              alt="Bird"
              title="Bird"
              src="@/assets/images/projet-Images/bird.png"
            />
          </div>

          <div>
            <img
              class="
                bg-gray-200
                object-fit
                w-7/12
                h-full
                lg:justify-self-end
                mx-auto
                mt-5
                lg:my-0
              "
              alt="Dog"
              title="Dog"
              src="@/assets/images/projet-Images/dog.png"
            />
          </div>

          <div>
            <img
              class="
                bg-gray-200
                object-fit
                w-7/12
                h-full
                lg:justify-self-end
                mx-auto
                mt-5
                lg:my-0
              "
              alt="Lion"
              title="Lion"
              src="@/assets/images/projet-Images/Lionchalk.jpg"
            />
          </div>

          <div>
            <img
              class="
                bg-gray-200
                object-fit
                w-7/12
                h-full
                lg:justify-self-end
                mx-auto
                mt-5
                lg:my-0
              "
              alt="Human"
              title="Human"
              src="@/assets/images/projet-Images/human.png"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Painting",

  data() {
    return {};
  },

  mounted() {},
  components: {
  },
};
</script>

<style scoped>
</style>
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
            Concept Design for Bus Shelters
          </h1>
          <h2 class="text-base font-thin pb-4 block text-slate-400">
            Solid works, Sketch
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
          <p class="text-thin mt-2 text-gray-800 mb-4 dark:text-white">
            The design allows people to protect themselves during the raining
            season (the doors can be opened for ventilation into the bus shelter
            and for people who are claustrophobic). It also protects commuters
            from the harsh effects of the sun.
          </p>

          <div>
            <h1 class="text-base font-bold capitalize text-slate-400 dark:text-white">
              problem statement
            </h1>
            <p class="block text-thin pt-2 text-gray-800 mb-4 dark:text-white">
              Inadequate number of bus shelters in the city of Lagos, Nigeria.
              The available bus shelters are usually packed and do not provide
              adequate protection from both sun and rain for commuters.
            </p>
            <h1
              class="text-base font-bold capitalize text-slate-400 mb-1 dark:text-white"
            >
              solution
            </h1>
            <p class="text-thin text-gray-800 mb-4 dark:text-white">
              Designing bus shelters for commuters in Lagos, Nigeria
            </p>
            <h1
              class="text-base font-bold text-slate-400 mb-1 dark:text-white capitalize"
            >
              tools
            </h1>
            <p class="text-thin text-gray-800 mb-4 dark:text-white">
              Solid works, Sketch
            </p>
          </div>
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
            People standing on the streets of Lagos without a bus shelter
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
            alt="Without Bus Shelter"
            title="Without Bus Shelter"
            src="@/assets/images/projet-Images/BusShelter5.jpg"
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
            Bus shelters do not protect people from Rain and Wind
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
            alt="Shelter without covering"
            title="Shelter without covering"
            src="@/assets/images/projet-Images/BusShelter6.jpg"
          />
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
            alt="Bus Shelter Sketch"
            title="Bus Shelter Sketch"
            src="@/assets/images/projet-Images/BusShelter3.png"
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
            Solidworks Rendering
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
            alt="Bus Shelter Solidworks"
            title="Bus Shelter Solidworks"
            src="@/assets/images/projet-Images/BusShelter4.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BusShelter",

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
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
            Fusion (Software Application)
          </h1>
          <h2 class="text-base font-thin pb-4 block text-slate-400">
            User research, Customer journey mapping, Flow charts, Wire framing
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
            Café One is a hybrid banking model created by Sterling Bank which
            offers a co-working space, tailored events and also functions as a
            Café.
          </p>

          <div>
            <h1 class="text-base capitalize text-slate-400 dark:text-white">
              problem statement
            </h1>
            <p class="block text-thin pt-2 text-gray-800 mb-4 dark:text-white">
              Café One has created a community filled with people with diverse
              interests. At the beginning of the COVID-19 pandemic, people were
              isolated and could not interact with their community members; Café
              One needed a way to make the interaction available virtually.
            </p>
            <h1
              class="text-base capitalize text-slate-400 mb-1 dark:text-white"
            >
              solution
            </h1>
            <p class="text-thin text-gray-800 mb-4 dark:text-white">
              Fusion is a social and business application that promotes
              innovation, community and lifestyle. It is the digital expression
              of Café One; where community meets innovation. It is a platform
              for users to connect with people of like minds or with similar
              interests, register for events and build communities
            </p>
            <h1
              class="text-base text-slate-400 mb-1 dark:text-white capitalize"
            >
              tools
            </h1>
            <p class="text-thin text-gray-800 mb-4 dark:text-white">
              User research, Customer journey mapping, Flow charts, Wire framing
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
            Project Roadmap
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
            alt="Fusion Roadmap"
            title="Fusion Roadmap"
            src="@/assets/images/projet-Images/Fusion3.png"
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
            List of communities based on interest; Joining preferred community
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
            alt="Preferred Community"
            title="Preferred Community"
            src="@/assets/images/projet-Images/Fusion22.png"
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
            Blog posts in the community; Able to register and pay for an event
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
            alt="Register and Pay"
            title="Register and Pay"
            src="@/assets/images/projet-Images/Fusion4.png"
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
  name: "Fusion",

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
<template>
  <section>
    <Header></Header>
    <div
      class="container px-6 py-8 mx-auto md:items-center block justify-center"
    >
      <h1 class="text-2xl text-gray-800 font-bold mb-4 text-center">
        Welcome! <span class="wave">👋🏾</span>
      </h1>
      <p class="text-md text-gray-800">
        I am a curious and creative person who is passionate about solving
        problems in my community. I am eager to take on new challenges and learn
        new concepts and techniques in creating good, sustainable products. I
        believe it’s our collective responsibility to make each other’s lives
        better and care for the earth we’ve been given and the way I hope to do
        this is through empathy in design and innovation
      </p>
    </div>
  </section>
</template>

<script>
import Header from "@/components/layout/Header.vue";
export default {
  name: "HeyJidePortfolioHomepage",
  data() {
    return {};
  },
  components: {
    Header,
  },
  mounted() {},

  methods: {},
};
</script>

<style>
.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
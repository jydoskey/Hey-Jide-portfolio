<template>
  <div class="container mt-16 mx-auto">
    <div class="container mx-auto">
      <div
        class="
          grid-cols-3
          p-42
          space-y-2
          lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3
        "
      >
        <!-- Bus Shelters -->
        <router-link class="figure" to="/busshelter">
          <img
            class="image-main h-full w-full bg-gray-300 mb-4"
            :src="BusShelters1"
            :srcset="BusShelters1"
            alt="BusShelters 1"
            title="BusShelters"
          />
          <img
            class="image-hover h-full w-full bg-gray-300 mb-4"
            :src="BusShelters2"
            :srcset="BusShelters2"
            alt="BusShelters"
            title="BusShelters"
          />
          <div class="header p-8">
            <div class="hero-header">
              <h1>Concept design for Bus Shelters</h1>
              <h2 class="text-xs font-thin pb-4">Solid works, Sketch</h2>
              <p class="text-sm font-light">
                The design allows people to protect themselves during the
                raining season (the doors can be opened for ventilation into the
                bus shelter and for people who are claustrophobic). It also
                protects commuters from the harsh effects of the sun.
              </p>
            </div>
          </div>
        </router-link>

        <!-- Helmet -->
        <router-link class="col-span-2 row-span-2 figure" to="/helmet">
          <img
            class="image-main h-full w-full bg-gray-300 mb-4"
            :src="Helmet1"
            :srcset="Helmet1"
            alt="Helmet-image 1"
            title="Helmet"
          />
          <img
            class="image-hover h-full w-full bg-gray-300 mb-4"
            :src="Helmet2"
            :srcset="Helmet2"
            alt="Helmet-image 2"
            title="Helmet"
          />
          <div class="header p-8">
            <div class="hero-header">
              <h1>Concept design for a Helmet</h1>
              <h2 class="text-xs font-thin pb-4">Coloured Painting, Sketch</h2>
              <p class="text-sm font-light">
                Designing stylish helmets that will encourage motor cycles to
                wear their helmets and stay protected.
              </p>
            </div>
          </div>
        </router-link>

        <!-- Fusion -->
        <router-link class="figure" to="/fusion">
          <img
            class="image-main h-full w-full bg-gray-300 mb-4"
            :src="Fusion1"
            :srcset="Fusion1"
            alt="Fusion 1"
            title="Fusion"
          />
          <img
            class="image-hover h-full w-full bg-gray-300 mb-4"
            :src="Fusion2"
            :srcset="Fusion2"
            alt="Fusion 2"
            title="Fusion"
          />
          <div class="header p-8">
            <div class="hero-header">
              <h1>Fusion (Software App)</h1>
              <h2 class="text-xs font-thin pb-4">
                User research, Customer journey mapping, Flow charts, Wire
                framing
              </h2>
              <p class="text-sm font-light">
                Fusion is a social and business application that promotes
                innovation, community and lifestyle. It is the digital
                expression of Café One; where community meets innovation. It is
                a platform for users to connect with people of like minds or
                with similar interests.
              </p>
            </div>
          </div>
        </router-link>

        <!-- Shelf -->
        <router-link class="figure" to="/shelf">
          <img
            class="image-main h-full w-full bg-gray-300 mb-4"
            :src="Bookshelf1"
            :srcset="Bookshelf1"
            alt="Bookshelf 1"
            title="Bookshelf"
          />
          <img
            class="image-hover h-full w-full bg-gray-300 mb-4"
            :src="Bookshelf2"
            :srcset="Bookshelf2"
            alt="Bookshelf 2"
            title="Bookshelf"
          />
          <div class="header p-8">
            <div class="hero-header">
              <h1>concept design for bookshelf</h1>
              <h2 class="text-xs font-thin pb-4">
                Sketch, Painting, Solidworks, Keyshot
              </h2>
              <p class="text-sm font-light">
                The preferred material for the bookshelf series is wood in
                different variations; ash wood, mahogany wood, maple wood.
              </p>
            </div>
          </div>
        </router-link>

        <!-- Chair -->
        <router-link class="figure" to="/chair">
          <img
            class="image-main h-full w-full bg-gray-300 mb-4"
            :src="chair1"
            :srcset="chair1"
            alt="chair 1"
            title="chair"
          />
          <img
            class="image-hover h-full w-full bg-gray-300 mb-4"
            :src="chair2"
            :srcset="chair2"
            alt="chair 2"
            title="chair"
          />
          <div class="header p-8">
            <div class="hero-header">
              <h1>concept design for chairs</h1>
              <h2 class="text-xs font-thin pb-4">Sketch, Painting</h2>
              <p class="text-sm font-light">
                The chair frame is made of walnut wood and the seats are made of
                cotton with a black wool-like finishing
              </p>
            </div>
          </div>
        </router-link>

        <!-- Painting -->
        <router-link class="figure" to="/painting">
          <img
            class="image-main h-full w-full bg-gray-300 mb-4"
            :src="Eyes"
            :srcset="Eyes"
            alt="Eyes"
            title="Eyes"
          />
          <img
            class="image-hover h-full w-full bg-gray-300 mb-4"
            :src="Eyes"
            :srcset="Eyes"
            alt="Eyes"
            title="Eyes"
          />
          <div class="header p-8">
            <div class="hero-header">
              <h1>Chalk on black paper</h1>
              <h2 class="text-xs font-thin pb-4">Painting</h2>
              <p class="text-sm font-light"></p>
            </div>
          </div>
        </router-link>

        <!-- Electric -->
        <router-link class="figure" to="">
          <img
            class="image-main h-full w-full bg-gray-300 mb-4"
            :src="Electric1"
            :srcset="Electric1"
            alt="Electric Project"
            title="Electric Project"
          />
          <img
            class="image-hover h-full w-full bg-gray-300 mb-4"
            :src="Electric1"
            :srcset="Electric2"
            alt="Electric Project"
            title="Electric Project"
          />
          <div class="header p-8">
            <div class="hero-header">
              <h1>Energy Management System</h1>
              <h2 class="text-xs font-thin pb-4">Proteus, Jumper Wires, Bulb, Breadboard</h2>
              <p class="text-sm font-light"></p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import chair1 from "@/assets/images/projet-Images/Chair1.jpg";
import chair2 from "@/assets/images/projet-Images/Chair2.jpg";
import Helmet1 from "@/assets/images/projet-Images/Helmet1.jpg";
import Helmet2 from "@/assets/images/projet-Images/Helmet2.jpg";
import Bookshelf1 from "@/assets/images/projet-Images/Shelfs1.png";
import Bookshelf2 from "@/assets/images/projet-Images/Shelfs2.jpg";
import Fusion1 from "@/assets/images/projet-Images/Fusion1.png";
import Fusion2 from "@/assets/images/projet-Images/Fusion22.png";
import BusShelters1 from "@/assets/images/projet-Images/BusShelter1.jpeg";
import BusShelters2 from "@/assets/images/projet-Images/BusShelter2.png";
import Eyes from "@/assets/images/projet-Images/eyes.png";
import Electric1 from "@/assets/images/projet-Images/Electric1.jpg";
import Electric2 from "@/assets/images/projet-Images/Electric2.png";
export default {
  name: "Projects",

  data() {
    return {
      chair1: chair1,
      chair2: chair2,
      Helmet1: Helmet1,
      Helmet2: Helmet2,
      Bookshelf1: Bookshelf1,
      Bookshelf2: Bookshelf2,
      BusShelters1: BusShelters1,
      BusShelters2: BusShelters2,
      Fusion1: Fusion1,
      Fusion2: Fusion2,
      Eyes: Eyes,
      Electric1: Electric1,
      Electric2: Electric2,
    };
  },
};
</script>

<style scoped>
.figure {
  position: relative;
  @apply w-full rounded hover:shadow-2xl cursor-pointer overflow-hidden;
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

.header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  object-fit: cover;
  color: white;
  background: rgb(0, 0, 0, 0.8);
  opacity: 0;
  @apply lg:h-full md:h-[27.8rem] h-[13rem] lg:w-full md:w-[43.7rem] w-[20.35rem];
}

img.image-hover,
img.image-main {
  @apply lg:h-full md:h-[27.8rem] h-[13rem] lg:w-full md:w-[43.7rem] w-[20.35rem];
}

.header:hover {
  opacity: 1;
}

.hero-header h2,
p {
  @apply hidden lg:block;
}

.hero-header h1 {
  @apply text-base lg:text-3xl font-bold uppercase pb-1;
}
</style>
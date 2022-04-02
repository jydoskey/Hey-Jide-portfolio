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
        <router-link
          class="
            w-full
            rounded
            hover:shadow-2xl
            cursor-pointer
            figure
            overflow-hidden
          "
          to="/busshelter"
        >
          <img
            class="image-main h-full w-full bg-gray-300"
            :src="BusShelters1"
            :srcset="BusShelters1"
            alt="BusShelters 1"
            title="BusShelters"
          />
          <img
            class="image-hover h-full w-full bg-gray-300"
            :src="BusShelters2"
            :srcset="BusShelters2"
            alt="BusShelters"
            title="BusShelters"
          />
          <div class="header h-full w-full p-8">
            <div class="hero-header">
              <h1 class="text-3xl font-bold uppercase pb-1">
                Concept design for Bus Shelters
              </h1>
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
        <router-link
          class="
            w-full
            col-span-2
            row-span-2
            rounded
            hover:shadow-2xl
            cursor-pointer
            figure
            overflow-hidden
          "
          to="/helmet"
        >
          <img
            class="image-main h-full w-full bg-gray-300"
            :src="Helmet1"
            :srcset="Helmet1"
            alt="Helmet-image 1"
            title="Helmet"
          />
          <img
            class="image-hover h-full w-full bg-gray-300"
            :src="Helmet2"
            :srcset="Helmet2"
            alt="Helmet-image 2"
            title="Helmet"
          />
          <div class="header h-full w-full p-8">
            <div class="hero-header">
              <h1 class="text-3xl font-bold uppercase pb-1">
                Concept design for a Helmet
              </h1>
              <h2 class="text-xs font-thin pb-4">Coloured Painting, Sketch</h2>
              <p class="text-sm font-light">
                Designing stylish helmets that will encourage motor cycles to
                wear their helmets and stay protected.
              </p>
            </div>
          </div>
        </router-link>

        <!-- Fusion -->
        <router-link
          class="
            w-full
            rounded
            hover:shadow-2xl
            cursor-pointer
            figure
            overflow-hidden
          "
          to="/fusion"
        >
          <img
            class="image-main h-full w-full bg-gray-300"
            :src="Fusion1"
            :srcset="Fusion1"
            alt="Fusion 1"
            title="Fusion"
          />
          <img
            class="image-hover h-full w-full bg-gray-300"
            :src="Fusion2"
            :srcset="Fusion2"
            alt="Fusion 2"
            title="Fusion"
          />
          <div class="header h-full w-full p-8">
            <div class="hero-header">
              <h1 class="text-3xl font-bold uppercase pb-1">
                Fusion (Software App)
              </h1>
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

        <div
          class="
            w-full
            rounded
            hover:shadow-2xl
            cursor-pointer
            figure
            overflow-hidden
          "
        >
          <img
            class="image-main h-full w-full bg-gray-300"
            :src="Bookshelf1"
            :srcset="Bookshelf1"
            alt="Bookshelf 1"
            title="Bookshelf"
          />
          <img
            class="image-hover h-full w-full bg-gray-300"
            :src="Bookshelf2"
            :srcset="Bookshelf2"
            alt="Bookshelf 2"
            title="Bookshelf"
          />
          <div class="header h-full w-full p-8">
            <div class="hero-header">
              <h1 class="text-3xl font-bold uppercase pb-1">
                concept design for bookshelf
              </h1>
              <h2 class="text-xs font-thin pb-4">
                Sketch, Painting, Solidworks, Keyshot
              </h2>
              <p class="text-sm font-light">
                The preferred material for the bookshelf series is wood in
                different variations; ash wood, mahogany wood, maple wood.
              </p>
            </div>
          </div>
        </div>

        <div
          class="
            w-full
            rounded
            hover:shadow-2xl
            cursor-pointer
            figure
            overflow-hidden
          "
        >
          <img
            class="image-main h-full w-full bg-gray-300"
            :src="chair1"
            :srcset="chair1"
            alt="chair 1"
            title="chair"
          />
          <img
            class="image-hover h-full w-full bg-gray-300"
            :src="chair2"
            :srcset="chair2"
            alt="chair 2"
            title="chair"
          />
          <div class="header h-full w-full p-8">
            <div class="hero-header">
              <h1 class="text-3xl font-bold uppercase pb-1">
                concept design for chairs
              </h1>
              <h2 class="text-xs font-thin pb-4">Sketch, Painting</h2>
              <p class="text-sm font-light">
                The chair frame is made of walnut wood and the seats are made of
                cotton with a black wool-like finishing
              </p>
            </div>
          </div>
        </div>

        <div
          class="
            w-full
            rounded
            hover:shadow-2xl
            cursor-pointer
            figure
            overflow-hidden
          "
        >
          <img
            class="image-main h-full w-full bg-gray-300"
            :src="Eyes"
            :srcset="Eyes"
            alt="chair 1"
            title="chair"
          />
          <img
            class="image-hover h-full w-full bg-gray-300"
            :src="Eyes"
            :srcset="Eyes"
            alt="chair 2"
            title="chair"
          />
          <div class="header h-full w-full p-8">
            <div class="hero-header">
              <h1 class="text-3xl font-bold uppercase pb-1">
                Chalk on black paper painting
              </h1>
              <h2 class="text-xs font-thin pb-4">Painting</h2>
              <p class="text-sm font-light"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chair1 from "@/assets/images/projet-Images/Chair1.jpg";
import chair2 from "@/assets/images/projet-Images/Chair2.jpg";
import Helmet1 from "@/assets/images/projet-Images/Helmet1.jpg";
import Helmet2 from "@/assets/images/projet-Images/Helmet2.jpg";
import Bookshelf1 from "@/assets/images/projet-Images/Shelf1.png";
import Bookshelf2 from "@/assets/images/projet-Images/Shelf2.jpg";
import Fusion1 from "@/assets/images/projet-Images/Fusion1.png";
import Fusion2 from "@/assets/images/projet-Images/Fusion22.png";
import BusShelters1 from "@/assets/images/projet-Images/BusShelter1.jpeg";
import BusShelters2 from "@/assets/images/projet-Images/BusShelter2.png";
import Eyes from "@/assets/images/projet-Images/eyes.png";
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
    };
  },
};
</script>

<style scoped>
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

.header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  object-fit: cover;
  text-align: start;
  color: white;
  background: rgb(0, 0, 0, 0.75);
  opacity: 0;
}

.header:hover {
  opacity: 1;
}
</style>
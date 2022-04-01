<template>
  <div class="container mt-16 mx-auto">
    <div class="container mx-auto">
      <div
        class="
          grid-cols-3
          p-37
          space-y-2
          lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3
        "
      >
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
          <div class="header h-full w-full pt-8">
            <div class="hero-header">
              <h1>Hero title</h1>
              <h2>Another landing page</h2>
              <button>Sign-up</button>
            </div>
          </div>
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
            overflow-hidden
          "
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
          <div class="header h-full w-full pt-8">
            <div class="hero-header">
              <h1>Hero title</h1>
              <h2>Another landing page</h2>
              <button>Sign-up</button>
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
          <div class="header h-full w-full pt-8">
            <div class="hero-header">
              <h1>Hero title</h1>
              <h2>Another landing page</h2>
              <button>Sign-up</button>
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
          <div class="header h-full w-full pt-8">
            <div class="hero-header">
              <h1>Hero title</h1>
              <h2>Another landing page</h2>
              <button>Sign-up</button>
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
          <div class="header h-full w-full pt-8">
            <div class="hero-header">
              <h1>Hero title</h1>
              <h2>Another landing page</h2>
              <button>Sign-up</button>
            </div>
          </div>
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
  text-align: center;
  color: white;
  background: rgb(0, 0, 0, 0.75);
  opacity: 0;
}

.header:hover {
  opacity: 1;
}
</style>
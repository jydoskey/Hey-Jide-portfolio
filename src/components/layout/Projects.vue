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
            :src="chair1"
            :srcset="chair1"
            alt="Chair-image 1"
            title="Reading Chair"
          />
          <img
            class="image-hover h-full w-full"
            :src="chair2"
            :srcset="chair2"
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
            :src="Helmet1"
            :srcset="Helmet1"
            alt="Helmet-image 1"
            title="Helmet"
          />
          <img
            class="image-hover h-full w-full"
            :src="Helmet2"
            :srcset="Helmet2"
            alt="Helmet-image 2"
            title="Helmet"
          />
        </div>

        <div class="w-full rounded hover:shadow-2xl cursor-pointer figure">
          <img
            class="image-main h-full w-full"
            :src="Bookshelf1"
            :srcset="Bookshelf1"
            alt="Bookshelf-image 1"
            title="Bookshelf"
          />
          <img
            class="image-hover h-full w-full"
            :src="Bookshelf2"
            :srcset="Bookshelf2"
            alt="Bookshelf-image 2"
            title="Bookshelf"
          />
        </div>

        <div class="w-full rounded hover:shadow-2xl cursor-pointer figure">
          <img
            class="image-main h-full w-full"
            :src="BusShelters1"
            :srcset="BusShelters1"
            alt="Bus-Shelters-image 1"
            title="Bus Shelters"
          />
          <img
            class="image-hover h-full w-full"
            :src="BusShelters2"
            :srcset="BusShelters2"
            alt="Bus-Shelters-image 2"
            title="Bus Shelters"
          />
        </div>

        <div class="w-full rounded hover:shadow-2xl cursor-pointer figure">
          <img
            class="image-main h-full w-full"
            :src="Fusion1"
            :srcset="Fusion1"
            alt="Fusion-image 1"
            title="Fusion"
          />
          <img
            class="image-hover h-full w-full"
            :src="Fusion2"
            :srcset="Fusion2"
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
import chair1 from "@/assets/Chair1.png";
import chair2 from "@/assets/Chair2.png";
import Helmet1 from "@/assets/Helmet-1.png";
import Helmet2 from "@/assets/Helmet-2.png";
import Bookshelf1 from "@/assets/Bookshelf1.png";
import Bookshelf2 from "@/assets/Bookshelf2.png";
import BusShelters1 from "@/assets/Bus-shelters1.png";
import BusShelters2 from "@/assets/Bus-shelters2.png";
import Fusion1 from "@/assets/Fusion-1.png";
import Fusion2 from "@/assets/Fusion-2.png";
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

<style>
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
<template>
  <div>
    <div class="bg-white-100">
      <nav
        class="
          container
          px-6
          py-8
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="
              text-xl
              font-bold
              text-gray-800
              md:text-2xl
              hover:text-blue-400
              dark:text-white
            "
            >Ademodi Olajumoke</router-link
          >

          <!-- Mobile button for menu -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
                dark:text-white
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu to close and hide -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          "
        >
          <li>
            <router-link
              class="
                text-sm
                font-bold
                text-gray-800
                hover:text-blue-400
                cursor-pointer
                dark:text-white
              "
              to="/about"
              >About</router-link
            >
          </li>
          <!-- <li
            class="
              text-sm
              font-bold
              text-gray-800
              hover:text-blue-400
              cursor-pointer
              dark:text-white
            "
          >
            Instagram
          </li>
          <li
            class="
              text-sm
              font-bold
              text-gray-800
              hover:text-blue-400
              cursor-pointer
              dark:text-white
            "
          >
            Behance
          </li> -->
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<template>
<header class="sticky top-0 z-10">
    <nav class="border-gray-200 px-2 sm:px-4 py-2.5 transition-all
    dark:bg-moon-5 bg-sun-blue dark:text-moon-1 text-sun-white"
      :class="{'rounded': fromTop>60, 'mx-4': fromTop>60, 'mt-4': fromTop>60}"
    >
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <router-link :to="{ name: 'home' }" class="flex items-center">
                <img src="/logo.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                    Blog-App
                </span>
            </router-link>
        <div class="flex md:order-2">
            <div class="hidden relative mr-3 md:mr-0 md:block">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-sun-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89
                    3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd">
                    </path>
                </svg>
                </div>
                <input type="text" id="email-adress-icon" aria-label="search"
                class="block p-2 pl-10 w-full rounded-lg
                  sm:text-sm border border-sun-navy dark:border-moon-4
                  text-sun-navy dark:text-moon-5 placeholder:text-moon-4"
                placeholder="Search...">
            </div>
            <button data-collapse-toggle="mobile-menu-3" type="button"
            class="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden
            hover:bg-gray-100 focus:outline-none focus:ring-2
            dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-3"
            aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0
                011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1
                0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd">
                </path>
            </svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414
                10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0
                01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd">
                </path>
            </svg>
            </button>
        </div>
        <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
        id="mobile-menu-3">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0
            md:text-sm md:font-medium">
                <li>
                    <router-link :to="{ name: 'home' }"
                    class="block py-2 pr-4 pl-3 md:p-0 font-bold">
                        Home
                    </router-link>
                </li>
                <li>
                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                    class="flex justify-between items-center py-2 pr-4 pl-3 w-full
                    md:p-0 md:w-auto font-bold">
                        Posts
                        <svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10
                            10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1
                            1 0 010-1.414z" clip-rule="evenodd">
                            </path>
                        </svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div id="dropdownNavbar" class="hidden z-10 w-44 rounded divide-y
                    divide-gray-100 shadow dark:divide-gray-600 bg-sun-navy
                    dark:bg-moon-4">
                        <ul class="py-1 text-sm text-sun-white dark:text-moon-2"
                        aria-labelledby="dropdownLargeButton">
                            <li v-for="category in $store.state.category.list" :key="category.id">
                                <router-link :to="{
                                    name: 'posts-tech',
                                    params: {
                                        tech: category.name,
                                        techId: category.id,
                                    }
                                }"
                                class="block py-2 px-4 hover:underline hover:scale-110
                                  origin-left">
                                    {{category.name}}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <router-link :to="{ name: 'about' }"
                    class="block py-2 pr-4 pl-3 md:p-0 font-bold">
                        About
                    </router-link>
                </li>
                <li v-if="$store.getters['user/isAuthenticated']">
                    <router-link :to="{ name: 'dashboard' }"
                    class="block py-2 pr-4 pl-3 md:p-0 font-bold">
                        Dashboard
                    </router-link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
</header>
</template>

<script setup>
import { ref } from 'vue';

const fromTop = ref(window.scrollY);
window.onscroll = () => {
  fromTop.value = window.scrollY;
};
</script>

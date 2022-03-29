<template>
<header class="sticky top-0 transition-all"
:class="{'translate-y-2': fromTop>5, 'px-4': fromTop>5}">
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800"
      :class="{'rounded': fromTop>5, 'px-4': fromTop>5}"
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
                <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89
                    3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd">
                    </path>
                </svg>
                </div>
                <input type="text" id="email-adress-icon" aria-label="search"
                class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border
                border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                dark:text-white dark:focus:ring-blue-500
                dark:focus:border-blue-500"
                placeholder="Search...">
            </div>
            <button data-collapse-toggle="mobile-menu-3" type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden
            hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400
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
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b
                    border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0
                    md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400
                    dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
                    dark:border-gray-700">
                        Home
                    </router-link>
                </li>
                <li>
                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                    class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium
                    text-gray-700 border-bborder-gray-100 hover:bg-gray-50 md:hover:bg-transparent
                    md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400
                    dark:hover:text-white dark:focus:text-white dark:border-gray-700
                    dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                        Posts
                        <svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10
                            10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1
                            1 0 010-1.414z" clip-rule="evenodd">
                            </path>
                        </svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div id="dropdownNavbar" class="hidden z-10 w-44 bg-white rounded divide-y
                    divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton">
                        <li>
                            <router-link :to="{ name: 'posts-tech', params: { tech: 'vue' }}"
                            class="block py-2 px-4 hover:bg-gray-100
                            dark:hover:bg-gray-600 dark:hover:text-white">VUE</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'posts-tech', params: { tech: '.net' }}"
                            class="block py-2 px-4 hover:bg-gray-100
                            dark:hover:bg-gray-600 dark:hover:text-white">.NET</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'posts-tech', params: { tech: 'js' }}"
                            class="block py-2 px-4 hover:bg-gray-100
                            dark:hover:bg-gray-600 dark:hover:text-white">
                                JS
                            </router-link>
                        </li>
                        </ul>
                        <div class="py-1">
                            <router-link :to="{ name: 'posts-tech', params: { tech: 'sql' }}"
                            class="block py-2 px-4 text-sm
                            text-gray-700hover:bg-gray-100
                            dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                SQL
                            </router-link>
                        </div>
                    </div>
                </li>
                <li>
                    <router-link :to="{ name: 'about' }"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100
                    hover:bg-gray-50 md:hover:bg-transparent md:border-0
                    md:hover:text-blue-700 md:p-0
                    md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700
                    dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        About
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

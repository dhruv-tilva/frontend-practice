<template>
  <nav class="px-4 sticky top-0 z-10 w-full border-b-2 border-black md:px-9 bg-white">
    <div class="max-w-screen-xl flex justify-between mx-auto py-2 items-center">
      <div>
        <RouterLink to="/" @click.prevent id="logo"
          class="font-bold font-dm text-2xl hover:underline focus:outline-dashed focus:outline-offset-2 md:text-3xl cursor-pointer"
          href="">Frontend Practice</RouterLink>
      </div>
      <div class="space-x-4 hidden md:flex lg:space-x-8">
        <RouterLink class="text-lg font-semibold font-archivo hover:underline" to="/">Home</RouterLink>
        <RouterLink class="text-lg font-semibold font-archivo hover:underline" to="/projects">Projects</RouterLink>
        <RouterLink class="text-lg font-semibold font-archivo hover:underline" to="/blog">Blog</RouterLink>
        <RouterLink class="text-lg font-semibold font-archivo hover:underline" to="/faq">FAQ</RouterLink>
        <RouterLink class="text-lg font-semibold font-archivo hover:underline" to="/contact">Contact</RouterLink>
        <RouterLink class="text-lg font-semibold font-archivo hover:underline" to="/newsletter">Newsletter</RouterLink>
      </div>
      <div class="relative z-[1] md:hidden">
        <div class="flex items-center">
          <i @click="toggleMenu = !toggleMenu"
            class="fa-solid text-3xl cursor-pointer focus:outline-dashed focus:outline-offset-2"
            :class="{ 'fa-bars': toggleMenu, 'fa-xmark': !toggleMenu }"></i>
        </div>
        <ul
          class="list-none fixed top-0 bg-white right-[-2px] bottom-0 overflow-hidden z-[-1] border-l-2 border-black space-y-4 max-w-[300px] transition-width duration-300 ease-in-out delay-0"
          :class="{ 'w-full': !toggleMenu }, { 'w-[0%]': toggleMenu }">
          <div class="p-6">
            <li @click="toggleMenu = true">
              <RouterLink
                class="font-bold text-2xl font-archivo hover:underline focus:outline-dashed focus:outline-offset-2"
                to="/">Home</RouterLink>
            </li>
            <li @click="toggleMenu = true">
              <RouterLink
                class="font-bold text-2xl font-archivo hover:underline focus:outline-dashed focus:outline-offset-2"
                to="/projects">Projects</RouterLink>
            </li>
            <li @click="toggleMenu = true">
              <RouterLink
                class="font-bold text-2xl font-archivo hover:underline focus:outline-dashed focus:outline-offset-2"
                to="/blog">Blog</RouterLink>
            </li>
            <li @click="toggleMenu = true">
              <RouterLink
                class="font-bold text-2xl font-archivo hover:underline focus:outline-dashed focus:outline-offset-2"
                to="/faq">FAQ</RouterLink>
            </li>
            <li @click="toggleMenu = true">
              <RouterLink
                class="font-bold text-2xl font-archivo hover:underline focus:outline-dashed focus:outline-offset-2"
                to="/contact">Contact</RouterLink>
            </li>
            <li @click="toggleMenu = true">
              <RouterLink
                class="font-bold text-2xl font-archivo hover:underline focus:outline-dashed focus:outline-offset-2"
                to="/newsletter">Newsletter</RouterLink>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>

  <RouterView></RouterView>

  <footer class="bg-black py-10 px-5">
    <div class="max-w-[1200px] mx-auto">
      <div>
        <p class="text-white font-archivo font-normal mb-6 lg:text-center">Frontend Practice - © 2023</p>
      </div>
      <ul class="md:flex p-0 max-w-[400px] md:space-x-4 lg:mx-auto">
        <li>
          <RouterLink
            class="text-white font-bold text-lg font-archivo focus:outline-dashed focus:outline-offset-2 hover:underline"
            to="/">
            Home</RouterLink>
        </li>
        <li>
          <RouterLink
            class="text-white font-bold text-lg font-archivo focus:outline-dashed focus:outline-offset-2 hover:underline"
            to="/projects">Projects</RouterLink>
        </li>
        <li>
          <RouterLink
            class="text-white font-bold text-lg font-archivo focus:outline-dashed focus:outline-offset-2 hover:underline"
            to="/blog">Blog</RouterLink>
        </li>
        <li>
          <RouterLink
            class="text-white font-bold text-lg font-archivo focus:outline-dashed focus:outline-offset-2 hover:underline"
            to="/faq">FAQ</RouterLink>
        </li>
        <li>
          <RouterLink
            class="text-white font-bold text-lg font-archivo hover:underline focus:outline-dashed focus:outline-offset-2"
            to="/contact">Contact</RouterLink>
        </li>
        <li>
          <RouterLink
            class="text-white font-bold text-lg font-archivo focus:outline-dashed focus:outline-offset-2 hover:underline"
            to="/newsletter">Newsletter</RouterLink>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
// import { RouterLink, RouterView } from 'vue-router';

export default {
  data() {
    return {
      toggleMenu: true,
    };
  },
};
</script>

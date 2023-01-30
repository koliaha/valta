<template>
  <div class="block md:hidden">
      <button @click="toggleNav" class="border rounded-large p-[18px]"><img src="@/assets/img/icon/burger.svg" alt="arrow_left"></button>
    <div  class="bg-white fixed w-screen min-h-screen z-10  top-[0px] duration-300" :class="showMenu ? 'left-[0%]' : 'left-[-100%]'">
      <div class="container my-6 px-5">
        <div class="flex items-center gap-[14px]">
          <button @click="toggleNav" class="border rounded-large p-[18px]"><img src="@/assets/img/icon/arrow_left.svg" alt="arrow_left"></button>
          <h1 class="text-3xl font-semibold">Меню</h1>
        </div>
        <div class="grid grid-cols-1 divide-y mt-4  text-lg font-medium">
          <a v-for="({ text, route }, index) in links" :key="index" :href="route">
            <div class="my-3">{{ text }}</div>
          </a>
        </div>
        <a href="">
          <img src="@/assets/img/logo.png" class="max-w-[218px] mx-auto mt-6" alt=""></a>
      </div>
    </div>
  </div>
</template>
<script setup>
const showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
const links = ref([
    { text: "Портфель новинок", route: "#" },
    { text: "О Валте", route: "#" },
    { text: "Академия зообизнеса ", route: "#" },
    { text: "Работа мечты", route: "#" },
    { text: "Контакты", route: "#" },
])
</script>

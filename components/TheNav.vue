<template>
  <div class="flex justify-between py-3">
    <div class="flex gap-x-[31px]">
      <div class="nav-city-select flex items-center">
        <img src="@/assets/img/icon/map.svg" alt="">
        <span class="ml-2 mr-1">Москва</span>
        <img src="@/assets/img/icon/arrow_orange.svg" alt="arrow_orange">
      </div>
      <span class="nav-city flex items-center">
        <img src="@/assets/img/icon/phone.svg" alt="phone">
        <a href="tel:+7 (495) 797-34-73"  class="ml-2 mr-1">+7 (495) 797-34-73</a>
        <img src="@/assets/img/icon/arrow_orange.svg" alt="arrow_orange">
      </span>
    </div>
    <nav class="max-w-198px flex gap-x-[30px]">
      <a v-for="({ text, route }, index) in links" :key="index" :href="route">{{text}}</a>
    </nav>
  </div>
</template>
<script setup>
const links = ref([
  { text: "Портфель новинок", route: "#" },
  { text: "О Валте", route: "#" },
  { text: "Академия зообизнеса ", route: "#" },
  { text: "Работа мечты", route: "#" },
  { text: "Контакты", route: "#" },
])
</script>
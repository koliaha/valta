<template>
  <div class="py-[20px] flex items-center justify-between">
    <a class="max-w-[133px]" href="#">
      <img class="w-full" src="@/assets/img/logo.png" alt="logo">
    </a>
    <p class="max-w-[252px] text-blue text-xs ml-[12px]">
      Экспертиза. Консалтинг. Готовые решения.
      Зоотовары мировых брендов для успеха
      вашего бизнеса. Работаем с 1996 года.
    </p>
    <div class="flex items-stretch  gap-x-[14px] h-[54px]  text-sm">
      <div class="flex items-center cursor-pointer hover:bg-black/20 px-[8px]"
        v-for="({ text, route, image }, index) in menu_list" :key="index" :href="route">
        <img :src="imgUrl(image)" :alt="image">
        <span class="ml-[8px] ">{{ text }}</span>
      </div>
    </div>
    <div class="flex items-stretch h-[54px] gap-x-[14px]">
      <div class="flex items-center cursor-pointer border rounded-large p-[18px]">
        <img :src="imgUrl('search')" alt="search">
      </div>
      <div class="flex items-center cursor-pointer border rounded-large p-[18px]" @click="counter++">
        <img :src="imgUrl('shop')" alt="heart">
        <span class="ml-[8px]">Корзина</span>
        <span class="ml-[10px] border rounded-sm px-[6px] bg-orange text-white">{{counter}}</span>
      </div>
      <div class="flex items-center cursor-pointer border rounded-large p-[18px]">
        <img :src="imgUrl('user')" alt="user">
        <span class="ml-[8px]">Авторизоваться</span>
      </div>
    </div>
  </div>
</template>
<script setup>
const counter = ref(24)
const menu_list = ref([
  { text: "Портфель новинок", route: "#", image: 'globus' },
  { text: "Сравнение", route: "#", image: 'arrows' },
  { text: "Избранное", route: "#", image: 'heart' },
])
const imgUrl = (icon) => {
  return new URL(`../assets/img/icon/${icon}.svg`, import.meta.url)
}
</script>
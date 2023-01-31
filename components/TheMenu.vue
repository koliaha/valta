<template>
  <div class="py-[20px] flex items-center justify-between">
    <BurgerMenu />
    <div class="flex items-center">
      <a class="max-w-[133px] hidden md:block" href="#">
        <img class="w-full" src="@/assets/img/logo.png" alt="logo">
      </a>
      <p class="max-w-[252px] text-blue text-xs ml-[12px] hidden lg:block">
        Экспертиза. Консалтинг. Готовые решения.
        Зоотовары мировых брендов для успеха
        вашего бизнеса. Работаем с 1996 года.
      </p>
    </div>
    <div class="flex  items-end flex-col lg:items-center lg:flex-row gap-x-[12px] 2xl:gap-x-[20px]">
      <div class=" items-stretch  gap-x-[8px] 2xl:gap-x-[14px] h-[54px]  text-sm  hidden md:flex" >
        <div class="flex items-center cursor-pointer hover:bg-black/20 px-[8px]"
          v-for="({ text, route, image }, index) in menu_list" :key="index" :href="route">
          <img :src="imgUrl(image)" :alt="image">
          <span class="ml-[8px] ">{{ text }}</span>
        </div>
      </div>
      <div class="flex items-stretch h-[54px] gap-x-[8px] 2xl:gap-x-[14px] select-none">
        <div
          class="flex items-center cursor-pointer border rounded-large p-[15px] 2xl:p-[18px] hidden md:flex duration-100 hover:opacity-80">
          <img :src="imgUrl('search')" alt="search">
        </div>
        <div class="flex items-center cursor-pointer border rounded-large p-[15px] 2xl:p-[18px] duration-100 hover:opacity-80"
          @click="counter++">
          <img :src="imgUrl('shop')" alt="heart">
          <span class="ml-[8px] hidden xl:block">Корзина</span>
          <span class="ml-[10px] border rounded-sm px-[6px] bg-orange text-white">{{ counter }}</span>
        </div>
        <div class="flex items-center cursor-pointer border rounded-large p-[15px] 2xl:p-[18px] duration-100 hover:opacity-80">
          <img :src="imgUrl('user')" class="" alt="user">
          <span class="ml-[8px] hidden xl:block">Авторизоваться</span>
        </div>
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
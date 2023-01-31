<template>
  <div class="flex gap-[23px] md:flex-wrap overflow-x-scroll md:overflow-x-auto py-3">
    <ProductItem v-for="(item, index) in product_list" :key="index" :data-item="item" />
  </div>
</template>
<script setup>
const product_list = ref([
  { text: "Зоомагазины", color: 'text-orange', theme: 'bg-pet-light_orange', image: 'shopping' },
  { text: "Интернет-магазины", color: 'text-primary', theme: 'bg-pet-light_salat', image: 'remote' },
  { text: "Ветеринарные клиники", color: 'text-blue', theme: 'bg-pet-light_gray', image: 'friends' },
  { text: "Ветеринарные врачи", color: 'text-blue', theme: 'bg-pet-light_blue', image: 'doctor' },
  { text: "Грумеры", color: 'text-primary', theme: 'bg-pet-dark_green', image: 'bath' },
  { text: "Заводчики", color: 'text-red', theme: 'bg-pet-dark_orange', image: 'sleep' },
])
</script>
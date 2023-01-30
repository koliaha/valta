<template>
    <div class="flex  gap-x-[24px] items-stretch h-[327px]">
        <ServiceItem v-for="(item, index) in product_list" :key="index" :data-item="item" />
        <ContentItem v-for="(item, index) in banner_list" :key="index" :data-item="item" />
    </div>
</template>
<script setup>
const product_list = ref([
    {
        "title": "Комплексная логистика",
        "text": "На высшем профессиональном и этическом уровне мы обеспечиваем клиентов эффективными комплексами логистических услуг для развития их бизнеса, процветания и успеха. И даже если вы далеко, мы всегда рядом!",
        "icon": "truck"
    },

    { title: 'Финансы и финансовые инструменты', text: "Обеспечиваем гибкие финансовые условия и поддерживаем доверительные партнёрские отношения за счёт наших финансовых сервисов.", icon: 'bank' },
])
const banner_list = ref([
    {
        "title": "«ВКУС» - ваш Валтакоин успеха",
        "text": "Новая вкусная программа лояльности, которая меняет жизнь питомцев к лучшему. Зарабатывайте валтакоины и вносите свой активный вклад в формирование культуры ухода за домашними любимцами.",
        "color": "bg-primary",
        "theme": "bg-pet-light_green",
        "link": "#",
        "button": "Подробнее",
        "bg": "coins",
        "btnWide": "max-w-[229px]"
    },
])
</script>
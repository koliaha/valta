<template>
    <div class="flex gap-[23px]  items-stretch min-h-[403px]  flex-wrap justify-center">
        <ContentItem v-for="(item, index) in banner_list" :key="index" :data-item="item">
            <template v-slot:header>
                <div class="text-3xl lg:text-4xl 2xl:text-5xl font-semibold" >{{ item.header }}  <p :class="item.textColor">{{ item.title }}</p> </div>
            </template>
        </ContentItem>
    </div>
</template>
<script setup>
const banner_list = ref([
    {
        "header": "Доброй пожаловать",
        "title": "на новый сайт Валты!",
        "text": "Валта — это команда экспертов, лидер российской зооиндустрии, влияющий на профессиональное развитие рынка",
        "color": "bg-primary",
        "theme": "bg-pet-light_salat",
        "link": "#",
        "btnWide": "max-w-[292px]",
        "button": "Стать партнером Валты",
        "bg": "slide",
        "width": "max-w-[860px] 2xl:max-w-[1050px]",
        "textColor": "text-primary",
        "isWide":true
    },
    {
        "title": "Добро пожаловать, любимый клиент!",
        "text": "Мы разделяем вашу любовь к питомцам и готовы вместе с вами менять их жизнь к лучшему!",
        "color": "bg-orange",
        "theme": "bg-pet-light_orange",
        "link": "#",
        "button": "Авторизоваться",
        "width": "max-w-[335px]",
        "textColor": "text-orange"
    },
])
</script>
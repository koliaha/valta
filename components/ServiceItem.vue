<template>
    <div
        class="bg-white min-h-[327px] max-w-[334px] w-full rounded-large flex flex-col p-[24px] shadow-[0_0px_30px_0px_rgba(0,0,0,0.1)]">
        <img :src="imgUrl(dataItem.icon)" class="w-[52px]" alt="user">
        <h2 class=" text-xl font-semibold mt-3 mb-2">{{ dataItem.title }}</h2>
        <p>{{ dataItem.text }}</p>
    </div>
</template>
<script >
export default {
    props: {
        dataItem: Object
    },
    setup() {
        const imgUrl = (icon) => {
            return new URL(`../assets/img/icon/${icon}.svg`, import.meta.url)
        }
        return { imgUrl }
    }
}
</script>
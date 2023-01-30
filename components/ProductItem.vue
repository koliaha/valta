<template>
    <div class="bg-orange min-h-[234px] min-w-[215px] max-w-[215px] w-full rounded-large flex flex-col justify-between" :class="dataItem.theme">
        <h2 class="m-[14px] max-w-[140px] text-xl font-semibold" :class="dataItem.color">{{ dataItem.text }}</h2>
        <img :src="imgUrl(dataItem.image)" alt="user">
    </div>
</template>
<script >
export default {
    props: {
        dataItem: Object
    },
    setup() {
        const imgUrl = (icon) => {
            return new URL(`../assets/img/advance/${icon}.svg`, import.meta.url)
        }
        return {imgUrl}
    }
}
</script>
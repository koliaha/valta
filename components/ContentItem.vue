<template>
    <div class=" w-full  rounded-large flex flex-col bg-contain bg-right bg-no-repeat pt-5 pb-2"
        :class="[dataItem.theme, dataItem.width]" :style="`background-image: url('${imgUrl(dataItem.bg)}');`">
        <div class=" bg-coins h-full flex flex-col" :class="[dataItem.isWide ? 'px-[44px] ' : 'px-[24px] justify-between',]">
            <div class="">
                <slot name="header" v-if="dataItem.header" />
                <h2 v-if="!dataItem.header" class="text-2xl font-semibold" :class="dataItem.textColor">{{
                    dataItem.title
                }}</h2>
                <p class="max-w-[340px] my-2">{{ dataItem.text }}</p>
            </div>
            <the-button class="my-2 mt-5" :class="[dataItem.btnWide ? dataItem.btnWide : '']" :data-item="btnInfo" />
        </div>
    </div>
</template>
<script >
import TheButton from './TheButton.vue'
export default {
    components: { TheButton },
    props: {
        dataItem: Object
    },
    setup({ dataItem }) {
        const imgUrl = (img) => {
            return new URL(`../assets/img/${img}.png`, import.meta.url)
        }
        const btnInfo = ref({
            title: dataItem.button,
            theme: dataItem.color,
            link: dataItem.link
        })
        return { imgUrl, btnInfo }
    }
}
</script>
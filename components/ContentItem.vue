<template>
    <div class=" w-full  rounded-xl flex flex-col bg-contain bg-right bg-no-repeat pt-5 md:pb-2 relative overflow-hidden"
        :class="[dataItem.theme, dataItem.width]" :style="!dataItem.isWide ? `background-image: url('${imgUrl(dataItem.bg)}');` :''">
        <div class=" flex flex-col" :class="[dataItem.isWide ? 'px-[44px] ' : 'px-[24px] justify-between h-full',]">
            <div class="">
                <slot name="header" v-if="dataItem.header" />
                <h2 v-if="!dataItem.header" class="text-2xl font-semibold" :class="dataItem.textColor">{{
                    dataItem.title
                }}</h2>
                <p class="max-w-[340px] my-2">{{ dataItem.text }}</p>
            </div>
            <TheButton class="my-2 mt-5" :class="[dataItem.btnWide ? dataItem.btnWide : '']" :data-item="btnInfo" />
        </div>
        <div v-if="dataItem.isWide" class="max-w-full md:max-w-[320px] lg:max-w-[400px] 2xl:max-w-[477px] w-full md:absolute top-[0px] right-[0px] max-h-[344px]  lg:max-h-full overflow-hidden">
            <img  class="w-full duration-300 hover:scale-105" :src="imgUrl(dataItem.bg)" alt="">
        </div>
        
    </div>
</template>
<script >
export default {
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
<template>
    <button class="text-white rounded-lg py-[21px] max-w-[300px] w-full duration-200 hover:opacity-80" :class="dataItem.theme">
        {{ dataItem.title }}
    </button>
</template>
<script>
export default {
    props: {
        dataItem: {
            type: Object,
            required: true
        }
    }, setup(props) {
        const clickBtn = () => { console.log(props.dataItem?.link); }
        return { clickBtn }
    }
}
</script>
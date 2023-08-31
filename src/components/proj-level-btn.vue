<template>
    <button
        class="py-3 px-4 font-bold w-[100px] border-2 border-black focus:outline-2 focus:outline-dashed focus:outline-offset-2"
        :class="[bg, color, hoverBg, focusBg,]">{{
            btnText }}</button>
</template>

<script>
export default {
    props: ['btnText', 'bg', 'color', 'hoverBg', 'focusBg', 'buttonText', 'clickBg']
}
</script>
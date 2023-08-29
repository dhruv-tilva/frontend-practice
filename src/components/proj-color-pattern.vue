<template>
    <div class="w-full px-4 border-b-2 border-black sm:border-r-2">
        <h3 class="font-dm text-2xl font-bold text-left mt-6 mb-4 lg:text-center">Color Palette:</h3>
        <div class="flex justify-center flex-wrap w-full mb-6">
            <div v-for="(item, index) in abletoncolorPattern" :key="index"
                class="flex items-center w-28 my-2 mr-3 space-x-1 sm:w-32 lg:w-24">
                <div class="w-6 h-6 border-2 border-stone-300 rounded-[50%]" :style="{ backgroundColor: item }"></div>
                <p class="text-base font-normal font-archivo">{{ item }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    inject: ['abletoncolorPattern']
}
</script>
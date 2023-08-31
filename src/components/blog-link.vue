<template>
    <div v-for="(item, index) in  blogLinkData " :key="index"
        class="max-w-[900px] w-full px-6 py-3 border-black mx-auto sm:flex sm:justify-between sm:items-center transition-all duration-200 hover:bg-neutral-200"
        :class="{ 'border-b-2 border-t-2': item.title !== 'How to quickly build your developer portfolio.' }">
        <div class="w-full sm:w-[65%]">
            <RouterLink :to="item.path"
                class="text-2xl font-semibold leading-tight font-dm hover:underline hover:underline-offset-4" href="">{{
                    item.title }}</RouterLink>
        </div>
        <div class="hidden sm:flex max-w-[250px] text-right items-center space-x-2">
            <p v-for="( subTitle, index ) in  item.subTitles " :key="index"
                class="py-1 px-3 font-normal text-sm font-archivo bg-black text-white rounded-[100px]">{{ subTitle }}</p>
        </div>
    </div>
</template>

<script>
export default {
    inject: ['blogLinkData']
}
</script>
<template>
    <div
        class="w-full m-8 border-2 border-black relative sm:w-[45%] sm:m-4 lg:w-[30%] xl:w-[22.5%] hover:-translate-y-3 transition-transform duration-200 focus:outline-dashed focus:outline-offset-2 cursor-pointer">
        <div class="border-b-2 border-black">
            <RouterLink :to="path">
                <img class="w-full" :src="url" alt="">
            </RouterLink>
        </div>
        <div class="flex items-center bg-[#faebd7] py-2 px-4">
            <div class="absolute py-1 px-3  archivo border-2 border-black top-[-7px] right-[-10px] font-bold"
                :class="{ 'bg-[#bcff93]': level === 1, 'bg-yellow-200': level === 2, 'bg-amber-400': level === 3 }">
                <p>Level {{ level }}</p>
            </div>
            <p class="bg-[#faebd7] text-[22px] underline font-bold">{{ title }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['url', 'title', 'level', 'path']
}
</script>
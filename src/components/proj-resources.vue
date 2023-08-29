<template>
        <div class="w-full px-4 border-b-2 border-black pb-6">
                <h3 class="font-dm text-2xl font-bold text-left mt-6 mb-4 lg:text-center">Resources:</h3>
                <ul class="w-full list-none lg:pl-6">
                        <li v-for="(item, ind) in abletonresources" :key="ind"
                                class="text-base font-bold underline hover:text-blue-600 transition-all duration-200"><a
                                        href="">{{ item }}</a></li>
                </ul>
        </div>
</template>

<script>
export default {
        inject: ['abletonresources']
}
</script>
<template>
    <div class="w-full px-4 border-b-2 border-black sm:border-r-2">
        <h3 class="font-dm text-2xl font-bold text-left mt-6 mb-4 lg:text-center">Recreate this to learn:</h3>
        <ul class="ml-6 mb-6 list-outside list-disc">
            <li class="text-base" v-for="(item, index) in abletonrecreateLearn" :key="index"><a href="">{{ item }}</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    inject: ['abletonrecreateLearn']
}
</script>
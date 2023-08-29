<template>
    <div v-for="(item, index) in blogHost" :key="index">
        <h2 class="max-w-2xl text-3xl font-bold font-dm mx-auto my-5 lg:my-6">{{ item.title }}</h2>
        <div class="max-w-2xl text-xl font-normal mx-auto mt-9 p-4 text-center bg-black font-dm text-white">
            {{ item.desc }}
        </div>
        <BlogSubPara>{{ item.paragraph }}</BlogSubPara>
        <h3 class="max-w-2xl text-xl font-bold my-4 font-dm leading-none mx-auto">Pros:</h3>
        <ul class="max-w-2xl mx-auto my-4 list-disc pl-5 text-base font-normal font-archivo">
            <li v-for="(pro, index) in item.pros">{{ pro }}
            </li>
        </ul>
        <h3 class="max-w-2xl text-xl font-bold my-5 font-dm leading-none mx-auto">Details:</h3>
        <ul class="max-w-2xl mx-auto my-4 list-disc pl-5 text-base font-normal font-archivo">
            <li v-for="(detail, index) in item.details">{{ detail }}: <a class="text-zinc-800 font-semibold underline"
                    v-if="detail == 'URL'" v-for="link in item.links[0]" :href="link">{{ link }}</a> <a
                    class="text-zinc-800 font-semibold underline" v-else-if="detail == 'Documentation'"
                    v-for="link in item.links[1]" :href="link">{{ link }}</a></li>
        </ul>
    </div>
</template>

<script>
import BlogSubPara from './blog-sub-para.vue';
export default {
    components: {
        BlogSubPara
    },
    inject: ['blogHost']
}
</script>

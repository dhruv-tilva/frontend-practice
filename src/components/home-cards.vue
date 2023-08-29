<template>
    <div class="flex flex-col items-center border-2 border-black p-4 mx-auto max-w-[450px] md:flex-row lg:mx-0">
        <img class="max-w-[90px] mb-3 md:mr-6 lg:mr-8" :src="url">
        <p class="text-lg text-center">{{ desc }}</p>
    </div>
</template>

<script>
export default {
    props: ['url', 'desc']
}
</script>
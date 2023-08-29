<template>
    <h1 class="text-4xl font-bold font-dm sm:text-8xl sm:text-center">{{ abletontitle }}</h1>
    <h2 class="text-2xl font-bold font-dm mb-4 sm:text-center">{{ abletonsubTitle }}</h2>
</template>

<script>
export default {
    inject: ['abletontitle', 'abletonsubTitle']
}
</script>
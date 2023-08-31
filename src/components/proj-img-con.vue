<template>
    <div class="max-w-screen-xl mx-auto border-b-2 border-l-2 border-r-2 border-black">
        <h1 class="font-dm text-4xl font-bold text-center pt-12">Reference Image</h1>
        <div class="p-8 w-full">
            <img class="max-h-full max-w-full shadow-xl rounded-2xl w-full" :src="url" alt="">
        </div>
    </div>
</template>

<script>
export default {
    inject: ['abletonimg'],
    data() {
        return {
            url: this.abletonimg
        }
    }
}
</script>
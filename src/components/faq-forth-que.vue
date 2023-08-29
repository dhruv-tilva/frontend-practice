<template>
    <div class="max-w-[750px] w-full mt-5 border-2 border-black mx-auto">
        <p @click="isThird = !isThird"
            class="bg-orange-100 p-3 dm text-2xl font-bold leading-none border-black hover:underline hover:underline-offset-1 cursor-pointer"
            :class="{ 'border-b-2': isThird }">Which languages do
            I
            use for these projects?
        </p>
        <p v-show="isThird" class="text-lg font-normal px-3 py-5 font-archivo">In short, you can use any programming
            language you
            desire for these practice projects.</p>
        <p v-show="isThird" class="text-lg font-normal px-3 py-5 font-archivo">The beauty of recreating websites for
            practice is that
            you can utilize any tech stack, such as HTML, CSS, JavaScript, React, Vue, Angular, Svelte, or any other
            language, framework, or library.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isThird: false
        }
    }
}
</script>